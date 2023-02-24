import React from 'react';
import Select from '../../components/Select/Select';
import { useAppDispatch } from '../../hooks/hooks';
import { setFrom, setTo } from '../../store/reducers/ConvertSlice';

const ConvertPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const setDefaultFrom = (code: string): void => {
    dispatch(setFrom(code));
  };

  const setDefaultTo = (code: string): void => {
    dispatch(setTo(code));
  };
  return (
    <div className="convert-page">
      <Select setDefaulCode={setDefaultFrom} />
      <Select setDefaulCode={setDefaultTo} />
    </div>
  );
};

export default ConvertPage;
