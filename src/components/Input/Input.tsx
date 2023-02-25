import React from 'react';
import './Input.css';

interface IInput {
  disable?: boolean
  onChange?: React.ChangeEventHandler<HTMLInputElement>
  title: string
  value?: number | string
}

const Input: React.FC<IInput> = ({
  disable = false,
  title,
  onChange,
  value,
}) => {
  return (
    <div className="input-wrapper">
      <span className="input-title">{title}</span>
      <input type="text" disabled={disable} onChange={onChange} value={value} />
    </div>
  );
};

export default Input;
