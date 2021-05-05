import {combineReducers, createStore, applyMiddleware, compose} from 'redux';
import {connectRouter, routerMiddleware, RouterState, push} from 'connected-react-router';
import {createBrowserHistory} from 'history';
import * as Common from './common';


process.env.NODE_ENV === 'development' && null;


/*
 * React Router Configs
 */
export const history = createBrowserHistory();


/*
 * Redux Configs
 */
export type Actions = Common.Actions;

export type RootState = {
  router: RouterState;
  common: Common.State;
};

export const actionCreator = {
  common: Common.actionCreator,
  push: push,
};

export const store = createStore(
    combineReducers({
      router: connectRouter(history),
      common: Common.reducer,
    }),
    compose(applyMiddleware(routerMiddleware(history))),
);
