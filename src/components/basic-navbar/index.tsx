import classNames from 'classnames';
import React from 'react';
import styles from './styles.module.scss';

interface IProps {}

const BasicNavbar: React.FC<IProps> = () => (
  <div className={classNames('container', styles.nav)}>
    <div className={styles.leftContainer}>
      <div>Institute</div>
      <div>About</div>
      <div>Admissions</div>
    </div>
    <div className={styles.rightContainer}>Login</div>
  </div>
);

export default BasicNavbar;
