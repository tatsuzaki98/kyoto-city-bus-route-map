import React from 'react';
import {useDispatch} from 'react-redux';
import View from './view';
import {api} from '../utils';
import {Stop} from '../schema';
import {actionCreator} from '../modules';


const App: React.FC = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    api.get('/api/stops')
        .then((value) => {
          const stops = value.data as {[key: number]: Stop};
          dispatch(actionCreator.common.loadBusStops({stops}));
        });
  }, []);

  return <View/>;
};

export default App;
