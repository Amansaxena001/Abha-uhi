import React from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import styles from './styles.module.scss';

const AppointmentBar = () => {
    return (
        <div className={classNames('container', styles.container)}>
            <Image src="/appt.svg" height={50} width={50} />
            <div className={styles.content}>
                <h1>Appointment Scheduled for 3:00 PM</h1>
                <span>Que Number: 201</span>
            </div>
        </div>
    );
};

export default AppointmentBar;
