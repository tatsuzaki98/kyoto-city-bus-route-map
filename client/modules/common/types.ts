import {Action} from 'redux';
import {Stop, Line} from '../../schema';


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


/* 路線を取り込む */
interface LoadLinesPayload {lines: {[key: number]: Line}};
export interface LoadLinesAction extends Action {
  type: 'LOAD_LINES';
  payload: LoadLinesPayload;
};
export const loadLines = (payload: LoadLinesPayload): LoadLinesAction => ({
  type: 'LOAD_LINES',
  payload,
});
