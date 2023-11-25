import React from 'react';
import styles from './Header.scss';

const path =
  'M 10 10 h 80 v 80 h -79 v -80 m 70 10 l -60 60 m 56 -19 a 13 13 19 1 0 1 15 M 20 20 v 30 m 0 -10 l 20 -18 m -15 13 l 14 14';

export default () => (
  <div className={styles.header}>
    <div className="logo">
      <svg width="50" height="50" viewBox="0 0 100 100">
        <path d={path} />
      </svg>
    </div>
    <div className="text-box">
      <span className="title">kenlove</span>
      <span className="sub-title">is where life happens</span>
    </div>
  </div>
);
