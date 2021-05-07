import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {RootState, actionCreator} from '../../modules';
import {Store, State, Handlers} from './types';
import {api} from '../../utils';
import View from './view';
import {Line, Path} from '../../schema';


const Pannel: React.FC = () => {
  const dispatch = useDispatch();

  const [state, setState] = React.useState<State>({
    isLinesShown: false,
    isLoading: false,
  });

  const store: Store = useSelector((rootState: RootState) => {
    const key: number | undefined = rootState.common.busStopKey;
    return {
      stop: key === undefined ? undefined : rootState.common.busStops[key],
      isPannelActive: true,
      lines: rootState.common.lines,
    };
  });

  const handlers: Handlers = {
    toggleLines: () => {
      if (!state.isLinesShown && store.stop) {
        setState({...state, isLoading: true});
        api.get(`/api/stops/${store.stop.properties.primaryKey}/lines`)
            .then((value) => {
              const lines = value.data as {[key: number]: Line};
              dispatch(actionCreator.common.loadLines({lines}));
              setState({...state, isLinesShown: true, isLoading: false});
            });
      } else {
        setState({...state, isLinesShown: false});
      }
    },

    clickLine: (lineKey) => {
      api.get(`/api/lines/${lineKey}/paths`)
          .then((response) => {
            const paths = response.data as {[key: number]: Path};
            dispatch(actionCreator.common.loadPaths({paths}));
          });
    },
  };

  return <View {...{store, state, handlers}}/>;
};

export default Pannel;
