import React from 'react';
import styles from './styles.module.scss';

interface IProps {}

const Courses: React.FC<IProps> = () => (
    <div className={styles.container}>
        <h1>Our Courses</h1>
    </div>
);

export default Courses;