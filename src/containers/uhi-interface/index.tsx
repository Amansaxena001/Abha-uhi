import { Button, message } from 'antd';
import classNames from 'classnames';
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
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
    const [canInteract, setCanInteract] = useState(true);
    const apptId = router.query?.appointmentId as string;
    const finalData = useSelector(state => state?.uhi?.data);

    const _fetchApptDetails = async () => {
        try {
            const res = await fetchApptDetails(apptId);
            dispatch(saveApptDetails(res.data));
            if (res.data?.emr?.symptoms?.length > 0) {
                setCanInteract(false);
            }
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
                {finalData?.matchedCount === 1 ? (
                    <div className={styles.center} style={{ padding: '0 20px', textAlign: 'center' }}>
                        <Image src="/complete.png" height={400} width={500} />
                        <h3>Thanks for submitting details, have a great doctor experience </h3>
                    </div>
                ) : (
                    <div>
                        {!canInteract ? (
                            <div className={styles.center} style={{ padding: '0 20px', textAlign: 'center' }}>
                                <Image src="/done.jpg" height={355} width={350} />
                                <h3>
                                    You have already filled details for this Appointment <br />
                                    {apptId}
                                </h3>
                            </div>
                        ) : (
                            <>
                                <ProgressBar />
                                <SearchSymptoms />
                                <AddSymptoms />
                            </>
                        )}
                    </div>
                )}
            </div>
        </>
    );
};

export default PatientSymptomInterface;
