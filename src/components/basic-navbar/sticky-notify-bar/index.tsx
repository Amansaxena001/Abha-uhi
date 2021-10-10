import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import styles from './styles.module.scss'

const TopNotificationBar: React.FC = () => {
  const [colorChange, setColorchange] = useState<boolean>(false);


  useEffect(() => {
    window.addEventListener('scroll', changeNavbarColor);

    return () => {
      window.removeEventListener('scroll', changeNavbarColor)
    }
  }, [])
  const changeNavbarColor = () => {
    if (window.scrollY >= 200) {
      setColorchange(true)
    }
    else {
      setColorchange(false);
    }
  };


  return (
    <div className={colorChange ? styles.container__2 : styles.container} >
      <Link href="/feedback" >
        <div>
          Click here to Submit feedback if you are or were a student of <strong>SSV</strong>
        </div>
      </Link>
    </div>
  );
}
export default TopNotificationBar