import {Stop, Path} from '../../schema';

export interface State {
};

export interface Store {
  stops: {[key: number]: Stop};
  paths: {[key: number]: Path};
};

export interface Handlers {
  clickStop: (key: number) => void;
};

export interface Props {
  store: Store;
  handlers: Handlers;
};
