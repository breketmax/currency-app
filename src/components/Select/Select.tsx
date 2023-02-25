import React, { useEffect, useState } from 'react';
import countries, { type ICountries } from '../../utils/countries-data';
import './Select.css';
import { ReactComponent as Dropdown } from '../../image/dropdown.svg';
import { useAppSelector } from '../../hooks/hooks';
import { type IQuery } from '../../types/IConvert';

interface ISelectProps {
  setDefaultCode: (code: string) => void
  queryKey: keyof IQuery
}

const Select: React.FC<ISelectProps> = ({ setDefaultCode, queryKey, }) => {
  const [ countriesState, setCountriesState, ] = useState<ICountries[]>(countries);
  const { query, } = useAppSelector((state) => state.rootReducer.convertSlice);
  const [ isOpen, setIsOpen, ] = useState<boolean>(false);
  useEffect(() => {
    setIsOpen(false);
  }, []);

  const selectCode = (code: string, index: number): void => {
    const countriesCopy: ICountries[] = JSON.parse(JSON.stringify(countries));
    countriesCopy[index].selected = true;
    setCountriesState(countriesCopy);
    setDefaultCode(code);
    setIsOpen(false);
  };

  return (
    <div className="select-wrapper">
      <div className="custom-select">
        {countriesState.map((item) =>
          item.code === query[queryKey]
            ? (
            <div
              key={item.code}
              className="selected-option option"
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              <img src={item.flag} alt="Country flag" />
              {item.code}
            </div>
              )
            : null
        )}
        <div className={isOpen ? 'select-dropdown' : 'select-dropdown hidden'}>
          {countriesState.map((item, index) => (
            <div
              className="option"
              key={item.code}
              onClick={() => {
                selectCode(item.code, index);
              }}
            >
              <img src={item.flag} alt="Country flag" />
              {item.code}
            </div>
          ))}
        </div>
      </div>
      <button
        className="open-dropdown"
        onClick={() => {
          setIsOpen(!isOpen);
        }}
      >
        <Dropdown />
      </button>
    </div>
  );
};

export default Select;
