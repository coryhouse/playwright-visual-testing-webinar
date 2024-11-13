import React from 'react';
import {
    breakingNewsBanner,
    breakingNewsContainer,
    breakingNewsMessage
} from './breakingNewsBanner.module.css';

const BreakingNewsBanner = ({ message }) => {
  return (
    <div className={breakingNewsBanner}>
      <div className={breakingNewsContainer}>
        <strong>BREAKING NEWS:</strong>
        <div className={breakingNewsMessage}>{message}</div>
      </div>
    </div>
  );
};

export default BreakingNewsBanner;