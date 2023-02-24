import React, { useEffect } from 'react';
import { useAppDispatch } from './hooks/hooks';
import { fetchConvert } from './store/reducers/ActionCreator';

const App: React.FC = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    void dispatch(fetchConvert({ from: 'USD', to: 'RUB', amount: 15, }));
  }, []);
  return <div className="App"></div>;
};

export default App;
