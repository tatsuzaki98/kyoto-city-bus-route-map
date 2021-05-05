import {combineReducers, createStore, applyMiddleware, compose} from 'redux';


import {connectRouter, routerMiddleware, RouterState, push} from 'connected-react-router';
import {createBrowserHistory} from 'history';


process.env.NODE_ENV === 'development' && null;


/*
 * React Router Configs
 */
export const history = createBrowserHistory();


/*
 * Redux Configs
 */
export type RootState = {
  router: RouterState;
};
export const actionCreator = {
  push: push,
};

export const store = createStore(
    combineReducers({
      router: connectRouter(history),
    }),
    compose(applyMiddleware(routerMiddleware(history))),
);
