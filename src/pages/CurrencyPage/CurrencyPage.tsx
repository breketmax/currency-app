import React, { useEffect } from 'react';
import CurrencyItem from '../../components/CurrencyItem/CurrencyItem';
import Loading from '../../components/Loading/Loading';
import Select from '../../components/Select/Select';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { fetchCurrencyRate } from '../../store/reducers/ActionCreator';
import { setFrom } from '../../store/reducers/ConvertSlice';
import './CurrencyPage.css';

const CurrencyPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { from, } = useAppSelector(
    (state) => state.rootReducer.convertSlice.query
  );
  const { quotes, isCourseRateLoading, source, } = useAppSelector(
    (state) => state.rootReducer.currencyRateSlice
  );
  const setDefaultFrom = (code: string): void => {
    dispatch(setFrom(code));
  };

  useEffect(() => {
    if (from !== source) {
      void dispatch(
        fetchCurrencyRate({
          currencies: 'AED, AUD, CNY, GBP, JPY, KZT,RUB, UAH, USD, EUR',
          source: from,
        })
      );
    }
  }, [ from, ]);

  return (
    <div className="currency-page">
      <div className="container">
        <div className="choose-currency">
          <span className="select-title">Choose your currency</span>
          <Select setDefaultCode={setDefaultFrom} queryKey="from" />
        </div>
        {isCourseRateLoading
          ? (
          <Loading />
            )
          : (
          <div className="currencies-list">
            {Object.keys(quotes).map((code) => (
              <CurrencyItem code={code} value={quotes[code]} key={code} />
            ))}
          </div>
            )}
      </div>
    </div>
  );
};

export default CurrencyPage;
