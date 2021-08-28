import React from 'react';
import { Tabs } from 'antd';
// import Image from 'next/image'
import styles from './styles.module.scss';

const CourseCard: React.FC = () => {
    const { TabPane } = Tabs;
    return (
        <div className={styles.container}>
            {/* <Image className={styles.logo} src="https://cdn.dribbble.com/users/1749636/screenshots/10981823/harmonium_4x.png" width={250} height={200}/> */}
            <h2>Classical Vocals</h2>
            <Tabs defaultActiveKey="1" className={styles.tabs}>
                <TabPane tab="About course" key="1" />
                <TabPane tab="Fee structure" key="2">
                    Content of Tab Pane2
                </TabPane>
            </Tabs>
        </div>
    );
};

export default CourseCard;
