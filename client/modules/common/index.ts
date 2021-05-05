import {setBusStop, SetBusStopAction, loadBusStops, LoadBusStopsAction} from './types';
import {Stop} from '../../schema';

export type Actions = SetBusStopAction | LoadBusStopsAction;

export interface State {
  busStopKey: number | null;
  busStops: Stop[];
};

const initializeState = (): State => ({
  busStopKey: null,
  busStops: [],
});

export const reducer = (state: State = initializeState(), action: Actions) => {
  switch (action.type) {
    case 'SET_BUS_STOP':
      return {...state, busStopKey: action.payload.key};
    case 'LOAD_BUS_STOPS':

      return {...state, busStops: Object.values(action.payload.stops)};
    default:
      return state;
  }
};

export const actionCreator = {
  setBusStop,
  loadBusStops,
};
