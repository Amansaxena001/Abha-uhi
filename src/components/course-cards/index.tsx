import React from 'react';
import { Tabs } from 'antd';
// import Image from 'next/image'
import styles from './styles.module.scss';

const CourseCard: React.FC = () => {
    const { TabPane } = Tabs;
    return (
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            {React.Children.toArray(
                [0, 1]?.map(curr => (
                    <div className={styles.container}>
                        <div className={styles.container__header}>
                            <img className={styles.container__logo} src="/vocals.svg" alt="feed" />
                        </div>
                        <h2>Classical Vocals</h2>
                        <span>Group/Personal lessons 3 times a week</span>
                        <Tabs defaultActiveKey="1" className={styles.tabs}>
                            <TabPane tab="About course" key="1">
                                <div className={styles.tabs__leftTabContent}>
                                    <div className={styles.tabs__list}>
                                        <img src="/graduate.svg" alt="course-graduate" />
                                        <h5>
                                            Graduate with
                                            <br /> <strong>UP Govt. course</strong> certified course
                                        </h5>
                                    </div>
                                    <p>
                                        The course covers all Hindustani music basics and the sllaybus strictly abides the sllyabus provided by{' '}
                                        <strong>Prayag Sangeet Samiti, Allahabad</strong>
                                    </p>
                                </div>
                            </TabPane>
                            <TabPane tab="Fee structure" key="2">
                                Content of Tab Pane2
                            </TabPane>
                        </Tabs>
                    </div>
                ))
            )}
        </div>
    );
};

export default CourseCard;
