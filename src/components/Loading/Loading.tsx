import React from 'react';
import loading from './loading.gif';
import './Loading.css';

const Loading: React.FC = () => {
  return (
    <div className="loading">
      <img src={loading} alt="Loading..." />
    </div>
  );
};

export default Loading;
