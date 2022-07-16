import { Progress } from 'antd';
import classNames from 'classnames';
import React from 'react';
import styles from './styles.module.scss';

interface IProps {
    percentDone?: number;
}

const ProgressBar: React.FC<IProps> = ({ percentDone = 40 }) => {
    return (
        <div className={styles.container}>
            <div className={classNames('container', styles.innerContainer)}>
                <span>0/6 Symptoms</span>
                <div style={{ width: '40%' }}>
                    <Progress percent={percentDone} showInfo={false} type="line" strokeColor=" #52B6C3" />
                </div>
            </div>
        </div>
    );
};

export default ProgressBar;
