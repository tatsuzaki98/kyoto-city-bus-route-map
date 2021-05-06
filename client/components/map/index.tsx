import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {actionCreator, RootState} from '../../modules';
import {Handlers, Store} from './types';
import View from './view';


const Map: React.FC = () => {
  const dispatch = useDispatch();

  const store: Store = useSelector((rootState: RootState) => ({
    stops: rootState.common.busStops,
  }));

  const handlers: Handlers = {
    clickStop: (key) => {
      dispatch(actionCreator.common.setBusStop({key}));
    },
  };

  return <View {...{store, handlers}}/>;
};

export default Map;
