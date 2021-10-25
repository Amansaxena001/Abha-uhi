import classNames from 'classnames';
import React from 'react';
import styles from './styles.module.scss';

interface IProps {
    sliderRef: any;
}

const OurMission: React.FC<IProps> = ({ sliderRef }) => {
    return (
        <div ref={sliderRef}>
            <div className={classNames('container', styles.childContainer)}>
                <div className={styles.childContainerLeft}>
                    <h2>Our Mission</h2>
                    <strong>Who we are</strong>
                    <span>?</span>
                    <h3>
                        We are a music school specifically focused on teaching Hindustani Classical Music i'e vocals and synthesizers. The school has been
                        running since 1990 and as of today, it's a registered Govt center under Prayag Sangeet Samiti, Allahabad. The school follows strict
                        sllaybus decided by Prayag Sangeet Samiti who is also responsible for conducts examinations all over India every year. Every year more
                        than 100+ students appear for examination from 1st year to 6th year.
                    </h3>
                </div>
                <div className={styles.childContainerRight}>
                    <img className={styles.logo} src="/vocals_3.svg" alt="feed" />
                </div>
            </div>
        </div>
    );
};
export default OurMission;
