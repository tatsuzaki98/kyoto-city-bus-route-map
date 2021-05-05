import React from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../../modules';
import {Store} from './types';
import View from './view';


const Pannel: React.FC = () => {
  const store: Store = useSelector((rootState: RootState) => {
    const key: number | undefined = rootState.common.busStopKey;
    return {
      stop: key === undefined ? undefined : rootState.common.busStops[key],
      isPannelActive: true,
    };
  });

  return <View {...{store}}/>;
};

export default Pannel;
