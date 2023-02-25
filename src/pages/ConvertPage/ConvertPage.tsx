import React, { useEffect } from 'react';
import Input from '../../components/Input/Input';
import Select from '../../components/Select/Select';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import {
  setFrom,
  setTo,
  setAmount,
  swapCurriences
} from '../../store/reducers/ConvertSlice';
import { ReactComponent as Swap } from '../../image/swap.svg';
import './ConvertPage.css';
import { fetchConvert } from '../../store/reducers/ActionCreator';

const ConvertPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const {
    query: { from, to, amount, },
    result,
  } = useAppSelector((state) => state.rootReducer.convertSlice);
  const setDefaultFrom = (code: string): void => {
    dispatch(setFrom(code));
  };

  const setDefaultTo = (code: string): void => {
    dispatch(setTo(code));
  };

  const amountHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (/\D+/gm.test(e.target.value)) return;
    dispatch(setAmount(Number(e.target.value)));
  };

  useEffect(() => {
    void dispatch(fetchConvert({ amount: 1, from, to, }));
  }, [ to, from, ]);

  return (
    <div className="convert-page">
      <div className="container">
        <div className="conver-content">
          <div className="field">
            <Input title="Amount" onChange={amountHandler} value={amount} />
            <Select setDefaultCode={setDefaultFrom} queryKey="from" />
          </div>
          <button onClick={() => dispatch(swapCurriences())}>
            <Swap />
          </button>
          <div className="field">
            <Input
              disable={true}
              title="To"
              value={(result * amount).toFixed(2)}
            />
            <Select setDefaultCode={setDefaultTo} queryKey="to" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConvertPage;
