import { Progress } from 'antd';
import classNames from 'classnames';
import React from 'react';
import { useSelector } from 'react-redux';
import styles from './styles.module.scss';

const ProgressBar: React.FC = () => {
    const progress = useSelector((state: any) => state.uhi.progress);
    return (
        <div className={styles.container}>
            <div className={classNames('container', styles.innerContainer)}>
                <span>{progress / 20}/6 Symptoms</span>
                <div style={{ width: '40%' }}>
                    <Progress percent={progress} showInfo={false} type="line" strokeColor=" #52B6C3" />
                </div>
            </div>
        </div>
    );
};

export default ProgressBar;
