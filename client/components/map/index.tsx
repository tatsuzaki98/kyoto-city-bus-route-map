import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../../modules';
import {Store} from './types';
import View from './view';


const Map: React.FC = () => {
  const store: Store = useSelector((rootState: RootState) => {
    console.log(rootState.common.busStops);
    return {
      stops: rootState.common.busStops,
    };
  });

  return <View {...{store}}/>;
};

export default Map;
