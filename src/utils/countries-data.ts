import RUBFlag from '../image/countries/RUB.png';
import AEDFlag from '../image/countries/AED.png';
import AUDFlag from '../image/countries/AUD.png';
import CNYFlag from '../image/countries/CNY.png';
import GBPFlag from '../image/countries/GBP.png';
import JPYFlag from '../image/countries/JPY.png';
import KZTFlag from '../image/countries/KZT.png';
import UAHFlag from '../image/countries/UAH.png';
import USDFlag from '../image/countries/USD.png';

export interface ICountries {
  flag: string
  code: string
  selected: boolean
}

const countries: ICountries[] = [
  {
    code: 'RUB',
    flag: RUBFlag,
    selected: false,
  },
  {
    code: 'AED',
    flag: AEDFlag,
    selected: false,
  },
  {
    code: 'AUD',
    flag: AUDFlag,
    selected: false,
  },
  {
    code: 'CNY',
    flag: CNYFlag,
    selected: false,
  },
  {
    code: 'GBP',
    flag: GBPFlag,
    selected: false,
  },
  {
    code: 'JPY',
    flag: JPYFlag,
    selected: false,
  },
  {
    code: 'KZT',
    flag: KZTFlag,
    selected: false,
  },
  {
    code: 'UAH',
    flag: UAHFlag,
    selected: false,
  },
  {
    code: 'USD',
    flag: USDFlag,
    selected: false,
  },
  {
    code: 'EUR',
    flag: USDFlag,
    selected: false,
  },
];

export default countries;
