import classNames from 'classnames';
import React from 'react';
import Link from 'next/link';
import { PhoneFilled } from '@ant-design/icons';
import styles from './styles.module.scss';

interface IProps { }

const BasicFooter: React.FC<IProps> = () => {
    return (
        <div className={styles.outerContainer}>
            <div className={classNames('container', styles.outerContainerItems)}>
                <div className={styles.outerContainerChild}>
                    <h2>About us</h2>
                    <p>
                        We are a music school specifically focused on teaching Hindustani Classical Music i'e
                        vocals and synthesizers. The school has been running since 1990 and as of today, it's a
                        registered <strong>Govt center</strong>  under <strong>Prayag Sangeet Samiti, Allahabad</strong> .
                        The school follows strict sllaybus decided by Prayag Sangeet
                        Samiti who is also responsible for conducts examinations all over India every year.
                    </p>
                </div>
                <div className={styles.outerContainerChild}>
                    <h2>Quick links</h2>
                    <ul>
                        <li>
                            <Link href="/feedback">
                                <a>submit feedback</a>
                            </Link>
                        </li>
                        {/* <li>
                            <Link href="/about">
                                <a>certifications</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/blog/hello-world">
                                <a>admission form</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/blog/hello-world">
                                <a>institute information</a>
                            </Link>
                        </li> */}
                    </ul>
                </div>
                <div className={styles.outerContainerChild}>
                    <h2>Address</h2>
                    <p>
                        {' '}
                        C-20 Sonalika Appt, flat no <br /> H-2-B, shalimar gardern, ext-2 <br /> pincode - 201005
                    </p>
                </div>
                <div className={styles.outerContainerChild}>
                    <h2>Contact us</h2><br />
                    <Link href="#" >
                        <a className={styles.contactUs} href="mailto:example@example.com" target="_blank" rel="noreferrer">
                            shardasangeetvid@gmail.com
                        </a>
                    </Link><br />
                    <div style={{
                        display: 'flex', alignItems: 'center', gap: '15px', marginTop:
                            20
                    }}>
                        <PhoneFilled className={styles.phone} /><h3>+91 9953207024 </h3>
                    </div>


                </div>
            </div>
            <hr />
            <div className={classNames('container', styles.copyRight)}>Copyright ©️ 2021-2022 sharda sangeet vidhyalaya</div>
        </div>
    );
};
export default BasicFooter;
