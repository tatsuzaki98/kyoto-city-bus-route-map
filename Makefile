######################### Default Action ######################### 
.PHONY: all
all: build


######################### Node.js Core ######################### 

##### npm config
PACKAGE_JSON = ./package.json ./package-lock.json
NODE_MODULE_DIR = ./node_modules
NPM_INSTALL_LOG = $(NODE_MODULE_DIR)/.package-lock.json


######################### Config Files ######################### 

##### Directory
CONFIG_DIR = ./config

##### Webpack Config
SERVER_WEBPACK_CONF = $(CONFIG_DIR)/webpack-server.js
CLIENT_WEBPACK_CONF = $(CONFIG_DIR)/webpack-client.js
DEV_WEBPACK_CONF = $(CONFIG_DIR)/webpack-devclient.js

##### Typescript Config
TS_CONFIG = $(CONFIG_DIR)/tsconfig.json

##### Post CSS config
PCSS_CONF = $(CONFIG_DIR)/postcss.config.js
TAILWIND_CONF = $(CONFIG_DIR)/tailwind.js
CSS_CONF = $(PCSS_CONF) $(TAILWIND_CONF)

#### Post CSS development config
#### JSX(TSX)によらず、Tailwindの全ての定義を書き出す
TAILWIND_DEV_CONF = $(CONFIG_DIR)/tailwind-dev.js


######################### Client Source Files ######################### 
CLIENT_SRC_DIR = ./client
CLIENT_SRC_FILES = $(wildcard $(CLIENT_SRC_DIR)/*) \
          $(wildcard $(CLIENT_SRC_DIR)/*/*) \
          $(wildcard $(CLIENT_SRC_DIR)/*/*/*)

##### view*.jsx
REACT_VIEW_JSX = $(wildcard $(CLIENT_SRC_DIR)/view*.tsx) \
          $(wildcard $(CLIENT_SRC_DIR)/*/view*.tsx) \
          $(wildcard $(CLIENT_SRC_DIR)/*/*/view*.tsx)


######################### Server Source Files ######################### 
SERVER_SRC_DIR = ./server
SERVER_SRC_FILES = $(wildcard $(SERVER_SRC_DIR)/*) \
          $(wildcard $(SERVER_SRC_DIR)/*/*) \
          $(wildcard $(SERVER_SRC_DIR)/*/*/*)


######################### Public Files ######################### 
PUBLIC_DIR = ./public

##### HTML
PUBLIC_HTML = $(PUBLIC_DIR)/index.html

##### CSS
TAILWIND_CSS = $(PUBLIC_DIR)/tailwind.pcss
DEVELOPMENT_CSS = $(PUBLIC_DIR)/static/index.css


######################### Distribution Files ######################### 
DIST_DIR = ./build
DIST_FILES = $(wildcard $(DIST_DIR)/*) \
          $(wildcard $(DIST_DIR)/*/*) \
          $(wildcard $(DIST_DIR)/*/*/*)

DIST_SERVER = $(DIST_DIR)/server.js
DIST_HTML = $(DIST_DIR)/index.html

##### Static Files
DIST_STATIC_DIR = $(DIST_DIR)/static
DIST_CSS = $(DIST_STATIC_DIR)/index.css
DIST_CLIENT = $(DIST_STATIC_DIR)/client.js


######################### GeoJson Data ######################### 
GEOJSON = $(wildcard ./data/*)
DIST_GEOJSON = $(wildcard ./build/data/*)


######################### Log Files ######################### 
LOG_DIR = ./.log


######################### Build ######################### 

##### Install Modules
.PHONY: install
install: $(NPM_INSTALL_LOG)
$(NPM_INSTALL_LOG): $(PACKAGE_JSON)
	npm ci
	touch $@

##### Bundle All
.PHONY: build
build: $(DIST_SERVER) $(DIST_CLIENT) $(DIST_HTML) $(DIST_CSS) $(DIST_GEOJSON) ./build/static/leaflet.css

##### Bundle Server
$(DIST_SERVER): $(TS_CONFIG) $(SERVER_WEBPACK_CONF) $(SERVER_SRC_FILES) $(NPM_INSTALL_LOG)
	npx webpack --config $(SERVER_WEBPACK_CONF)
	touch $(DIST_SERVER)

##### Build Post-CSS
.PHONY: style
style: $(DIST_CSS)
$(DIST_CSS): $(TAILWIND_CSS) $(REACT_VIEW_JSX) $(CSS_CONF)
	npx postcss --config $(PCSS_CONF) $< -o $@ --env=production

#### JSX(TSX)によらず、Tailwindの全ての定義を書き出す
.PHONY: dev-style
dev-style: $(DEVELOPMENT_CSS)
$(DEVELOPMENT_CSS): $(TAILWIND_CSS) $(PCSS_CONF) $(TAILWIND_DEV_CONF)
	npx postcss --config $(PCSS_CONF) $< -o $@

##### Bundle Client
$(DIST_CLIENT): $(TS_CONFIG) $(CLIENT_WEBPACK_CONF) $(CLIENT_SRC_FILES) $(NPM_INSTALL_LOG)
	npx webpack --config $(CLIENT_WEBPACK_CONF)
	touch $(DIST_CLIENT)

##### Copy Public Files
$(DIST_HTML): $(PUBLIC_HTML)
	cp $< $@

##### Copy Leaflet CSS
./build/static/leaflet.css: ./public/static/leaflet.css
	cp $< $@

##### Copy Geojson Files
$(DIST_GEOJSON): $(GEOJSON)
	mkdir -p ./build/data
	cp ./data/* ./build/data/

######################### Launch ######################### 

##### Kill Port
.PHONY: port
port:
	if lsof -t -i:3000; then kill `lsof -t -i:3000`; fi
	if lsof -t -i:8080; then kill `lsof -t -i:8080`; fi

##### Launch Production Server and Client
.PHONY: run
run: build port
	node $(DIST_SERVER)

##### Launch Development Server and Client
.PHONY: start
start: $(DIST_SERVER) dev-style port
	node $(DIST_SERVER) &\
	npx webpack-cli serve --config $(DEV_WEBPACK_CONF)

##### Launch Server in Background
.PHONY: serve
serve: build port
	mv ./nohup.out $(LOG_DIR)
	nohup node $(DIST_SERVER) &


######################### Clear Cache ######################### 

##### インストールしたNodeモジュールを全て削除
.PHONY: clean
clean:
	rm -rf $(NODE_MODULE_DIR)

##### ビルドファイルを消去
.PHONY: clear
clear:
	rm $(DIST_SERVER)
	rm $(DIST_CLIENT)
