import {Action} from 'redux';
import {Stop} from '../../schema';


/* Storeに特定の一つのバス停を登録する */
interface SetBusStopPayload {key: number};
export interface SetBusStopAction extends Action {
  type: 'SET_BUS_STOP';
  payload: SetBusStopPayload;
};
export const setBusStop = (payload: SetBusStopPayload): SetBusStopAction => ({
  type: 'SET_BUS_STOP',
  payload,
});


/* 全てのバス停データを読み込む */
interface LoadBusStopsPayload {stops: {[key: number]: Stop}};
export interface LoadBusStopsAction extends Action {
  type: 'LOAD_BUS_STOPS';
  payload: LoadBusStopsPayload;
};
export const loadBusStops = (payload: LoadBusStopsPayload): LoadBusStopsAction => ({
  type: 'LOAD_BUS_STOPS',
  payload,
});
