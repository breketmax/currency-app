import React from 'react';
import countries from '../../utils/countries-data';

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
      <img src={flagSource} alt="" />1{from} = {(1 / value).toFixed(2)} {to}
    </div>
  );
};

export default CurrencyItem;
