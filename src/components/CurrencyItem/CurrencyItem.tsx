import React from 'react';
import countries from '../../utils/countries-data';
import { ReactComponent as Equal } from '../../image/equal.svg';
import './CurrencyItem.css';

interface ICurrencyItem {
  code: string
  value: number
}

const CurrencyItem: React.FC<ICurrencyItem> = ({ code, value, }) => {
  const to = code.slice(0, 3);
  const from = code.slice(3);
  const flagSource = countries.find((item) => item.code === from)?.flag;
  return (
    <div className="currency-item">
      <img src={flagSource} alt="" />
      <div className="item-info">
        1<span className="code">{from}</span>
        <Equal />
        {(1 / value).toFixed(2)}
        <span className="code">{to}</span>
      </div>
    </div>
  );
};

export default CurrencyItem;
