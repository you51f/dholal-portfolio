"use client"
import React from 'react'
import styles from '../page.module.css';
import { AnimatedBox } from './index';
import Image from 'next/image';
import Link from 'next/link';
import imageUrlBuilder from "@sanity/image-url";
import { client } from '@/sanity/lib/client';

const ProjectType= ({category: { _id, image, name, slug }}) => {
    // const slug = 'projectX'
    const builder = imageUrlBuilder(client);
  return (
    // <AnimatedBox className={styles.animate_box}>
        <Link href={`/project/${slug?.current}`}>
            <div className={styles.types_main}>
                <div className={styles.types_box}>
                    <Image
                    src={builder.image(image).width(3280).height(2160).url()}
                    alt={name}
                    className={styles.types_img}
                    width={250}
                    height={190}
                    loading="lazy" 
                    />

                    <div className={styles.types_name}><h3>{name}</h3><p>3 projects</p></div>
                    <div className={styles.types_btn}>See Details</div>
                </div>
            </div>
        </Link>
    // </AnimatedBox>
  )
}

export default ProjectType