import React from 'react'
import styles from '../page.module.css';
import { HiOutlineMail, HiOutlinePhone } from 'react-icons/hi';
import { AiFillLinkedin, AiOutlineInstagram } from 'react-icons/ai';
import { AiFillFacebook } from 'react-icons/ai';
import { FaXTwitter } from 'react-icons/fa6';
import { BiLogoTiktok } from 'react-icons/bi';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className={styles.footer}>
        <div className={styles.footer_box}>
            <div className={styles.footer_left}>
                {/* <div className={styles.footer_logo}></div> */}
                <Link href={'/'}><h1 className={styles.footer_logo}>Dholal</h1></Link>
                <div className={styles.footer_lists}>
                    <div className={styles.footer_pages}>
                        <div className={styles.footer_pages_title}>Pages</div>
                        <div className={styles.footer_pages_items}>
                        <Link href={'/'}><ul>Home</ul></Link>
                        {/* <Link href={'/catalog'}><ul>Catalog</ul></Link> */}
                        <Link href={'/about-us'}><ul>About Me</ul></Link>
                        </div>
                    </div>
                    <div className={styles.footer_policies}>
                    <div className={styles.footer_pages_title2}>Projects</div>
                        <div className={styles.footer_pages_items}>
                            <Link href={'/'}><ul>Residential</ul></Link>
                            <Link href={'/'}><ul>Commercial</ul></Link>
                            <Link href={'/'}><ul>Interior Design</ul></Link>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.footer_right}>
                <div className={styles.footer_social}>
                    <div className={styles.footer_pages_title3}>Reach Me</div>
                        <div className={styles.footer_pages_title4}><HiOutlineMail className={styles.footer_email}/> Email: <span>dholal@gmail.com</span></div>
                        <div className={styles.footer_pages_title4}><HiOutlinePhone className={styles.footer_email}/> Phone: <span>0987654321</span></div>
                        <div className={styles.footer_pages_title4}><AiFillLinkedin className={styles.footer_email}/>LinkedIn: <span>Click here</span></div>
                </div>  
            </div>
        </div>
        <div className={styles.footer_evo}>
            <div className={styles.footer_evo_text}>
                Powered by
            </div>
            <div className={styles.footer_evo_logo}></div>
        </div> 
        <div className={styles.footer_evo2}>
            <div className={styles.footer_evo_text}>
            © 2022 All rights reserved. EVO Technologies & Services.
            </div>
            
        </div> 
    </footer>
  )
}

export default Footer