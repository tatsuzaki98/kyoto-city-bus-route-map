import {Stop} from '../../schema';

export interface State {
};

export interface Store {
  stops: {[key: number]: Stop};
  // focused: number | undefined;
};

export interface Handlers {
  clickStop: (key: number) => void;
};

export interface Props {
  store: Store;
  handlers: Handlers;
};
