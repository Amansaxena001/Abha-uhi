import PrimaryButton from '@app/src/components/primary-button';
import React from 'react';
import styles from './styles.module.scss';

interface IProps { }

const HeroSection: React.FC<IProps> = () => {
    return (
        <div className={styles.parent} data-aos-anchor-easing='ease-in-out' data-aos-delay='0' data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-easing="ease-out-back"
            // data-aos-mirror="true"
            data-aos-once="false"
        >
            <div className="container">
                <h1 className={styles.headerText}>
                    Sharda Sangeet <br /> Vidhyalaya
                </h1>
                <div className={styles.subTitle}>Teaching Hindustani Classical Music since <img src="/1985.svg" alt="time" /></div>
                <PrimaryButton className={styles.h__btn} type="primary" onClickHandler={() => console.log('Hll')}>
                    Lets Start
                </PrimaryButton>

                <div className={styles.stats}>
                    <div className={styles.s__text}>
                        <h1>+5K</h1>
                        <span>students taught</span>
                    </div>
                    <div className={styles.s__text}>
                        <h1> +1K</h1>
                        <span>satisfied students</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
