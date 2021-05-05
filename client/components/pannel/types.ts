import {Stop} from '../../schema';

export interface State {
};

export interface Store {
  stop: Stop | undefined;
  isPannelActive: boolean;
};

export interface Handlers {
};

export interface Props {
  store: Store;
};
