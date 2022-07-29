import React from 'react';
import s from './Statistics.module.css';

const Statistics = ({good, neutral, bad, total, positivePercentage}) => {
  return (
    <>
    <h2 className="">Statistics</h2>
        <ul>
          <li>
            <p className={s.statistic}>Good: {good}</p>
          </li>
          <li>
            <p className={s.statistic}>Neutral: {neutral}</p>
          </li>
          <li>
            <p className={s.statistic}>Bad: {bad}</p>
          </li>
          <li>
            <p className={s.statistic}>
              Total: {total}
            </p>
                </li>
                          <li>
            <p className={s.statistic}>
              Positive feedback: {positivePercentage} %
            </p>
          </li>
        </ul>
    </>
  )

}

export default Statistics;
