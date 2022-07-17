import { Button, message } from 'antd';
import classNames from 'classnames';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { saveApptDetails } from './actions';
import { fetchApptDetails } from './api';
import AddSymptoms from './partials/add-symptoms';
import AppointmentBar from './partials/appt-bar/appt-sticky-bar';
import ProgressBar from './partials/progress-bar';
import SearchSymptoms from './partials/search';
import styles from './styles.module.scss';

export const PatientSymptomInterface = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const apptId = router.query?.appointmentId as string;

    const _fetchApptDetails = async () => {
        try {
            const res = await fetchApptDetails(apptId);
            dispatch(saveApptDetails(res.data));
        } catch (error) {
            message.error('Error in fething Appt details');
        }
    };

    useEffect(() => {
        if (apptId?.length) {
            _fetchApptDetails();
        }
    }, [apptId]);

    return (
        <>
            <div className={classNames(styles.innerContainer)}>
                <AppointmentBar />
                <ProgressBar />
                <SearchSymptoms />
                <AddSymptoms />
            </div>
        </>
    );
};

export default PatientSymptomInterface;
