import {Action} from 'redux';
import {Stop, Line, Path} from '../../schema';


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


/* 特定の一つの路線の深いコピーを作成し、Storeに保持する */
interface SetLinePayload {line: Line};
export interface SetLineAction extends Action {
  type: 'SET_LINE';
  payload: SetLinePayload;
};
export const setLine = (payload: SetLinePayload): SetLineAction => ({
  type: 'SET_LINE',
  payload,
});


/* 区間を取り込む */
interface LoadPathsPayload {paths: {[key: number]: Path}};
export interface LoadPathsAction extends Action {
  type: 'LOAD_PATHS';
  payload: LoadPathsPayload;
};
export const loadPaths = (payload: LoadPathsPayload): LoadPathsAction => ({
  type: 'LOAD_PATHS',
  payload,
});
