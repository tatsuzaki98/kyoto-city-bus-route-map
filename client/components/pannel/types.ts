import {Stop, Line} from '../../schema';

export interface State {
  isLinesShown: boolean;
  isLoading: boolean;
};

export interface Store {
  stop: Stop | undefined;
  lines: {[key: number]: Line};
};

export interface Handlers {
  toggleLines: () => void;
};

export interface Props {
  store: Store;
  state: State;
  handlers: Handlers;
};
