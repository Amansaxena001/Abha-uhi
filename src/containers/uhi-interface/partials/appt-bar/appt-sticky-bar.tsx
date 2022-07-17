import React from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import { useSelector } from 'react-redux';
import moment from 'moment';
import styles from './styles.module.scss';

const AppointmentBar = () => {
    const apptDetails = useSelector<any>(state => state!.uhi?.apptDetails);
    const apptTime = moment(apptDetails?.scheduleDatetime as string)
        .add(30, 'minutes')
        .format('hh:mm a');

    return (
        <div className={classNames('container', styles.container)}>
            <Image src="/appt.svg" height={50} width={50} />
            <div className={styles.content}>
                <h1>Appointment Scheduled at {apptTime} at Fortis Hospital</h1>
                <span>Que Number: 14</span>
            </div>
        </div>
    );
};

export default AppointmentBar;
