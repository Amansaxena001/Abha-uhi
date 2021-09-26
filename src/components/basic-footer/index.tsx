import classNames from 'classnames';
import React from 'react';
import Link from 'next/link';
import styles from './styles.module.scss';

interface IProps {}

const BasicFooter: React.FC<IProps> = () => {
    return (
        <div className={styles.outerContainer}>
            <div className={classNames('container', styles.outerContainerItems)}>
                <div className={styles.outerContainerChild}>
                    <h2>About us</h2>
                    <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe rerum perspiciatis, non veniam nobis ipsam alias eos quasi est nemo
                        excepturi doloribus tenetur, totam unde, quaerat dolore nesciunt vitae enim.
                    </p>
                </div>
                <div className={styles.outerContainerChild}>
                    <h2>Quick links</h2>
                    <ul>
                        <li>
                            <Link href="/">
                                <a>courses</a>
                            </Link>
                        </li>
                        <li>
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
                        </li>
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
                    <h2>Contact us</h2>
                    <p className={styles.contactUs}>shardasangeetvid@gmail.com</p>
                </div>
            </div>
            <hr />
            <div className={classNames('container', styles.copyRight)}>Copyright ©️ 2021-2022 sharda sangeet vidhyalaya</div>
        </div>
    );
};
export default BasicFooter;
