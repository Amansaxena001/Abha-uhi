import { Alert } from 'antd';
import classNames from 'classnames';
import React from 'react';
import AddSymptoms from './partials/add-symptoms';
import AppointmentBar from './partials/appt-bar/appt-sticky-bar';
import ProgressBar from './partials/progress-bar';
import SearchSymptoms from './partials/search';
import styles from './styles.module.scss';

export const PatientSymptomInterface = () => {
    return (
        <>
            <div className={classNames(styles.innerContainer)}>
                <AppointmentBar />
                <ProgressBar />
                <SearchSymptoms />
                <AddSymptoms />
            </div>
            <div className={styles.submit}>
                <span>Complete</span>
            </div>
        </>
    );
};

export default PatientSymptomInterface;
