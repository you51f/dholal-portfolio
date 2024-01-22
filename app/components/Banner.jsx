import React from 'react'
import styles from '../page.module.css';
// import { ISOCTEUR } from 'next/font/google'

// const inter = ISOCTEUR({ subsets: ['latin'] })

const Banner = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.banner_box}>
        <div className={styles.banner_left}>
            <div className={styles.banner_title1}>ARCHITECTURE</div>
            <div className={styles.banner_title2}>PORTFOLIO</div>
            <div className={styles.banner_title3}>DHOLAL MOHAMED-KHAIR</div>
            <div className={styles.banner_btns_container}>
                <div className={styles.banner_btn1}>Check My Work</div>
                <div className={styles.banner_btn2}>Contact Me</div>
            </div>
        </div>
        <div className={styles.banner_right}>
          <div className={styles.banner_image}></div>
        </div>
      </div>
    </div>
  )
}

export default Banner