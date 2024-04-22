import Image from 'next/image'
import React from 'react'
import styles from '../page.module.css';
import { Footer, Navbar, ProjectDetails, Title } from '@/app/components';

function About() {
  return (
    <div className={styles.home2}> 
      <Navbar colorStyle={2}/> 
      <Title text={'Dholal Mohammed-Khair'}/>
      <div className={styles.about}>
      <div className={styles.project_details_main}>
    <div className={styles.about_detail_container}>
    <div className={styles.about_detail_desc}>
      
      <div className={styles.details}>About Me</div>
    <p>Experienced 3 years of working as an architect in 2 countries (Sudan and UAE) which enhanced communication and teamwork skills through different culture and regulations. Achieved a record of creating and managing 40+ innovative and functional designs which resulted in high-quality architectural drawings that meet client requirements successfully by 90%. Dedicated to staying updated with design trends and technology advancements.</p>
   
    <div className={styles.project_info}>
      <p className={styles.project_info_text}><span className={styles.project_info_title}>Email</span> Eng.Dholal@gmail.com</p>
      <p className={styles.project_info_text}><span className={styles.project_info_title}>Phone</span> +971525576724</p>
    </div>
    <div className={styles.about_btn2}><a href="/public/DHOLAL_MOHAMEDKHAIR_CV.pdf" download="Dholal_MohamedKahir_CV" class="btn-box">Download Resume</a></div>
    
  </div>
    <div className={styles.about_img}>
      <div className={styles.image_container}>
        <Image
         src={''} 
         width={500}
         height={350}
        //  src={urlForImage(image[index])} 
         
        className={styles.product_detail_image}
        alt={''}
        // alt={image[0]?.alt}
          />
      </div>
    </div>

  </div>
  
</div> 
      </div>
      <Footer/>
    </div> 
  )
}

export default About