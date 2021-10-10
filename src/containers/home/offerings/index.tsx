import React from 'react'
import styles from './styles.module.scss'

const Offerings: React.FC = () => {
  return (
    <div className={styles.outerContainer}>
      <strong>What you'll get</strong><span>?</span>
      <div className={styles.container}>
        <div>
          <h2>A Govt. Certificate</h2>
          <p>The full length of the course is 6 years. Post completion of every
            year(with theory and practicle examintion) a <strong>Govt. Signed certificate </strong>  will be issued by Prayag Sangeet Allahabad</p>
        </div>
        <div className={styles.container__Logo} >
          <img src="/degree.svg" alt="graduate" height={500} width={500} />
        </div>
      </div>
      <div className={styles.container__2}>
        <div className={styles.container__2__Logo} >
          <img src="/cert.svg" alt="graduate" />
        </div>
        <div>
          <h2>Graduate with a degree <br /> equivalent to <strong>B.A</strong></h2>
          <p>After successfull completion of the course i'e 6 years, a degree certificate called <strong>Prabhakar</strong>
            {' '}  is issued by Prayag sangeet Samiti, Allahabad</p>
        </div>

      </div>
    </div>
  );
}
export default Offerings