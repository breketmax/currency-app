import React, { useEffect, useState } from 'react';
import countries, { type ICountries } from '../../utils/countries-data';

interface ISelectProps {
  setDefaulCode: (code: string) => void
}

const Select: React.FC<ISelectProps> = ({ setDefaulCode, }) => {
  const [ countriesState, setCountriesState, ] = useState<ICountries[]>(countries);
  useEffect(() => {
    const rndCounrty = Math.floor(Math.random() * 10);
    const countriesCopy: ICountries[] = JSON.parse(JSON.stringify(countries));
    countriesCopy[rndCounrty].selected = true;
    setDefaulCode(countriesCopy[rndCounrty].code);
    setCountriesState(countriesCopy);
  }, []);

  return (
    <div className="custom-select">
      <div className="selected-option option">
        {countriesState.map((item) =>
          item.selected
            ? (
            <h1 key={item.code}>
              <img src={item.flag} alt="Flag" /> {item.code}
            </h1>
              )
            : null
        )}
      </div>
      <div className="select-dropdown">
        {countriesState.map((item) => (
          <div className="option" key={item.code}>
            <img src={item.flag} alt="Country flag" />
            {item.code}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Select;
