"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import styles from '../page.module.css';
import { urlForImage } from '@/sanity/lib/image';
import imageUrlBuilder from "@sanity/image-url";
import { client } from '@/sanity/lib/client';

const ProjectDetails = ({project, dataIndex}) => {
  const [index1, setIndex1] = useState(0);
  const [index2, setIndex2] = useState(0);
  const builder = imageUrlBuilder(client);
  return (
    <div className={styles.project_details_main}>
        <div className={styles.project_name}>{dataIndex+1}. {project.name}</div>
    <div className={styles.product_detail_container}>
    <div>
      <div className={styles.image_container}>
        <Image
        //  src={''} 
        key={dataIndex}
         width={600}
         height={300}
        //  src={urlForImage(project.h_image[index1])} 
         src={builder.image(project.h_image[index1]).width(1280).height(720).url()} 
         
        className={styles.product_detail_image}
        // alt={''}
        alt={project.h_image[0]?.alt}
          />
      </div>
      <div className={styles.small_images_container}>
        {project.h_image?.map((item, i) => (
          <Image 
            key={i}
            // src={''}
            alt={i}
            src={builder.image(item).width(1280).height(720).url()}
            // className={styles.small_image}
            className={i === index1 ? `${styles.small_image}  ${styles.selected_image}` : `${styles.small_image}`}
            onMouseEnter={() => setIndex1(i)}
            width={110}
         height={80}
            // onMouseEnter={() => setIndex(i)}
          />
          
          
         ))}
      </div>
    </div>

    <div className={styles.project_info}>
    <div className={styles.project_info_text}>Details: </div>
        {project.description != null ? <div>
      <p className={styles.project_info_text}>{project.description}</p></div> : null}
     
      <div className={styles.project_info}>
      {project.details?.map((item, i) => (
          <p key={i} className={styles.project_info_text}><span className={styles.project_info_title}>{item.title}</span> {item.text}</p>
         ))}
        {/* <p className={styles.project_info_text}><span className={styles.project_info_title}>Year</span> 2000</p>
        <p className={styles.project_info_text}><span className={styles.project_info_title}>Year</span> 2000</p>
        <p className={styles.project_info_text}><span className={styles.project_info_title}>Year</span> 2000</p> */}
      </div>
      
    </div>
  </div>
  <div className={styles.image_v}>
      <div className={styles.image_container}>
        <Image
        //  src={''} 
         width={400}
         height={650}
         src={builder.image(project.v_image[index2]).width(910).height(1280).url()} 
         key={dataIndex}
        className={styles.product_detail_image_v}
        // alt={''}
        alt={project.v_image[0]?.alt} 
          />
      </div>
      <div className={styles.small_images_container_v}>
        {project.v_image?.map((item, i) => (
          <img 
            key={i}
            // src={''}
            src={builder.image(item).width(910).height(1280).url()}
            // className={styles.small_image_v}
            className={i === index2 ? `${styles.small_image_v}  ${styles.selected_image}` : `${styles.small_image_v}`}

            onMouseEnter={() => setIndex2(i)}
            width={80}
         height={110}
         alt={i}
            // onMouseEnter={() => setIndex(i)}
          />
          
        ))}
      </div>
    </div>
  
</div>  
  )
}

export default ProjectDetails