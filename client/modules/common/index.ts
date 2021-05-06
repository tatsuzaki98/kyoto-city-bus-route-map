import {
  setBusStop, SetBusStopAction,
  loadBusStops, LoadBusStopsAction,
  loadLines, LoadLinesAction,
} from './types';
import {Stop, Line} from '../../schema';

export type Actions = SetBusStopAction | LoadBusStopsAction | LoadLinesAction;

export interface State {
  busStopKey?: number;
  busStops: {[key: number]: Stop};
  lines: {[key: number]: Line}
};

const initializeState = (): State => ({
  busStops: {},
  lines: {},
});

export const reducer = (state: State = initializeState(), action: Actions) => {
  switch (action.type) {
    case 'SET_BUS_STOP':
      return {...state, busStopKey: action.payload.key};
    case 'LOAD_BUS_STOPS':
      return {...state, busStops: action.payload.stops};
    case 'LOAD_LINES':
      return {...state, lines: action.payload.lines};
    default:
      return state;
  }
};

export const actionCreator = {
  setBusStop,
  loadBusStops,
  loadLines,
};
