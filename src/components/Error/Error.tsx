import React from 'react';
import './Error.css';
import { ReactComponent as Sad } from '../../image/sad.svg';

interface IError {
  children: React.ReactNode
}
const Error: React.FC<IError> = ({ children, }) => {
  return (
    <div className="error" data-testid="error">
      <Sad />
      {children}
    </div>
  );
};

export default Error;
