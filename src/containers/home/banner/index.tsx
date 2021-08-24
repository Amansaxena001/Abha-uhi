import React from 'react'
import styles from './styles.module.scss'

const Banner: React.FC = () => (
  <div className={styles.container}>
    <div className={styles.c__shortSeparator} />
    <h1 className={styles.c__headerText}>FINDINGS</h1>
    <div className={styles.c__content}>
      <span>Why Hindustani Classical Music</span><br /> <h1> in 2021?</h1>
    </div>
    <div className={styles.c__content__text}>
      Singing is a unique exercise wherein concentration, meditation, and breathing
      exercises take place unconsciously and simultaneously.[19]  Just as there is fantasy music
      for relaxation, movement music to get one out of depression, there is resolution music that induces confidence.
    </div>
    <a>Read the article</a>
  </div>
)
export default Banner