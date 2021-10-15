import classNames from 'classnames'
import React from 'react'
import styles from './styles.module.scss'

const OurMission: React.FC = () => {
  return (
    <div>
      <div className={classNames('container', styles.childContainer)}>
        <div className={styles.childContainerLeft}>
          <h2>Our Mission</h2>
          <strong>Who we are</strong><span>?</span>
          <h3>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe quo neque magnam inventore, fuga ea cum perspiciatis eligendi
            nisi quibusdam odit illo voluptatem, iusto praesentium. Aut minima consequatur porro! Magni?
            nisi quibusdam odit illo voluptatem, iusto praesentium. Aut minima consequatur porro! Magni?
            nisi quibusdam odit illo voluptatem, iusto praesentium. Aut minima consequatur porro! Magni?
            nisi quibusdam odit illo voluptatem, iusto praesentium. Aut minima consequatur porro! Magni?
          </h3>
        </div>
        <div className={styles.childContainerRight}>
          <img className={styles.logo} src="/vocals_3.svg"
            alt="feed" />
        </div>

      </div>
    </div>
  );
}
export default OurMission