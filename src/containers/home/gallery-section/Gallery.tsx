import classNames from 'classnames';
import React from 'react'
import styles from './styles.module.scss'
interface IProps {

}

const Gallery: React.FC<IProps> = ({ }) => {
  return (


    <div className={styles.parent}>
      <div className={styles.p__leftContainer}>
        left
      </div>
      <div className={styles.p__rightContainer}>
        <h1>
          A glimpse of the<br /> history
        </h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nulla animi officiis accusantium velit minus laudantium
          voluptatibus aspernatur dicta a, eaque nobis blanditiis? Non, nesciunt magni. Sit a enim sapiente nulla.</p>
      </div>
    </div >
  );
}

export default Gallery