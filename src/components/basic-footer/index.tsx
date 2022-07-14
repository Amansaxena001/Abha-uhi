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
                    <h2>Quick links</h2>
                    <ul>
                        <li>
                            <Link href="/feedback">
                                <a>feedback</a>
                            </Link>
                        </li>
                    </ul>
                </div>
                <div className={styles.outerContainerChild}>
                    <h2>Contact us</h2>
                    <br />
                    <Link href="#">
                        <a className={styles.contactUs} href="mailto:shardasangeetmusic@gmail.com" target="_blank" rel="noreferrer">
                            bajaj@gmail.com
                        </a>
                    </Link>
                    <br />
                </div>
            </div>
            <hr />
            <div className={classNames('container', styles.copyRight)}>Copyright ©️ 2021-2022 sharda sangeet vidhyalaya</div>
        </div>
    );
};
export default BasicFooter;
