import {
  setBusStop, SetBusStopAction,
  loadBusStops, LoadBusStopsAction,
  loadLines, LoadLinesAction,
  setLine, SetLineAction,
  loadPaths, LoadPathsAction,
} from './types';
import {Stop, Line, Path} from '../../schema';

export type Actions = SetBusStopAction |
  LoadPathsAction |
  LoadBusStopsAction |
  LoadLinesAction |
  SetLineAction;

export interface State {
  busStopKey?: number;
  busStops: {[key: number]: Stop};
  line?: Line;
  lines: {[key: number]: Line}
  paths: {[key: number]: Path}
};

const initializeState = (): State => ({
  busStops: {},
  lines: {},
  paths: {},
});

export const reducer = (state: State = initializeState(), action: Actions) => {
  switch (action.type) {
    case 'SET_BUS_STOP':
      return {...state, busStopKey: action.payload.key};
    case 'LOAD_BUS_STOPS':
      return {...state, busStops: action.payload.stops};
    case 'LOAD_LINES':
      return {...state, lines: action.payload.lines};
    case 'SET_LINE':
      return {...state, line: {...action.payload.line}};
    case 'LOAD_PATHS':
      return {...state, paths: {...action.payload.paths}};
    default:
      return state;
  }
};

export const actionCreator = {
  setBusStop,
  loadBusStops,
  loadLines,
  setLine,
  loadPaths,
};
