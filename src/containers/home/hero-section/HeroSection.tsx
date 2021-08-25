import PrimaryButton from '@app/src/components/primary-button'
import React from 'react'
import styles from './styles.module.scss'

interface IProps {

}

const HeroSection: React.FC<IProps> = ({}) => {
  return (
    <div>
      <h1 className={styles.headerText}>
        Sharda Sangeet <br /> Vidhyalaya
      </h1>
      <div>We make muscians touched down by Hindustani Classical Music</div>
      <PrimaryButton className={styles.h__btn} type="primary" onClickHandler={() => console.log('Hll')}>Lets Connect</PrimaryButton>

      <div className={styles.stats}>
        <div className={styles.s__text}>
          <h1>
            +10K
          </h1>
          <span>students taught</span>
        </div>
        <div className={styles.s__text}>
          <h1> +100 </h1>
          <span>satisfied students</span>
        </div>
      </div>
    </div>
  );
}


export default HeroSection