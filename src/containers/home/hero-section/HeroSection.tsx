import PrimaryButton from '@app/src/components/primary-button';
import React from 'react';
import styles from './styles.module.scss';

interface IProps {
    ourMissionRef: any;
}

const HeroSection: React.FC<IProps> = ({ ourMissionRef }) => {
    return (
        <div
            className={styles.parent}
            data-aos-anchor-easing="ease-in-out"
            data-aos-delay="0"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-easing="ease-out-back"
            // data-aos-mirror="true"
            data-aos-once="false"
        >
            <div className="container">
                <h1 className={styles.headerText}>
                    Sharda Sangeet <br /> Vidhyalaya
                </h1>
                <div className={styles.subTitle}>
                    Live one-on-one, interactive sessions with the Guru <br />
                    <strong>Mrs. Poonam Saxena</strong>
                    <br />
                    <br />
                </div>
                <div className={styles.subTitle__2}>
                    No matter if you are a beginner(5 year old or 20 year) or a professional musician you can have confidence on our teaching methods{' '}
                </div>
                <PrimaryButton className={styles.h__btn} type="primary" onClickHandler={() => ourMissionRef?.current?.scrollIntoView({ behavior: 'smooth' })}>
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
