import classNames from 'classnames';
import Link from 'next/link';
import React from 'react';
import styles from './styles.module.scss';

interface IProps {}

const BasicNavbar: React.FC<IProps> = () => (
    <div className={styles.outerContainer}>
        <div className={classNames('container', styles.nav)}>
            <div className={styles.leftContainer}>
                <Link href="/">
                    <img src="/logo.svg" alt="base-logo" height={150} width={150} className={styles.logo} />
                </Link>
                {/* <div>About</div>
            <div>Admissions</div> */}
            </div>
            <div className={styles.rightContainer}>
                <div>About</div>
                <div>
                    <Link href="/feedback">Submit Feedback</Link>
                </div>
            </div>
        </div>
    </div>
);

export default BasicNavbar;
