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
    <p>gvjafvb adjbgvkjasdbv kjbgjabdg jkabgjkbad ag jabgjka asdg jkabg kjsdbgjksdbg anviasodngv alkgbilng langianedkdnkdos lskbnkdnkd lsdbnds ndksfdn kdnvskdn kxcnvsdb sfbnfb skn bdsfbs bdbvkz dv b sv s bs bksrbksb ks</p>
    <p>gvjafvb adjbgvkjasdbv kjbgjabdg jkabgjkbad ag jabgj fdsf asfege  egsa f zgv dgs</p>
    <p>gvjafvb adjbgvkjasdbv kjbgjabdg jkabgjkbad ag jabgjka asdg jkabg kjsdbgjksdbg anviasodngv alkgbilng langianedkdnkdos lskbnkdnkd lsdbnds ndksfdn kdnvskdn kxcnvsdb sfbnfb skn bdsfbs bdbvkz dv b sv s bs bksrbksb ks</p>
   
    <div className={styles.project_info}>
      <p className={styles.project_info_text}><span className={styles.project_info_title}>Email</span> test@mail.com</p>
      <p className={styles.project_info_text}><span className={styles.project_info_title}>Phone</span> 0912345678</p>
    </div>
    <div className={styles.about_btn2}>Download Resume</div>
    
  </div>
    <div className={styles.about_img}>
      <div className={styles.image_container}>
        <Image
         src={''} 
         width={500}
         height={550}
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