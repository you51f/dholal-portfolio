

import {React } from 'react'
import Image from 'next/image';
import styles from '../../../app/page.module.css';
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { Footer, Navbar, ProjectDetails, Title } from '@/app/components';
import Head from 'next/head';
import { sanityFetch } from '@/sanity/lib/sanityFetch';



export default async function Project ({ params }) {
  const typeSlug = params.typeslug


  const query = `*[_type == "project" && category->slug.current == $typeSlug]`
  const projects = await sanityFetch(query, {typeSlug});
  
  
  
  return (
      <div className={styles.home}> 
      <Navbar colorStyle={2}/> 
      <Title text={`${typeSlug}`}/>
      <div className={styles.projects}>
      {/* </div>
      <div className={styles.collection}> */}
        {projects?.map((project, index) => {
          return (
            <ProjectDetails project={project} dataIndex={index}/>
          )
        })} 
      </div>
      <Footer/>
    </div>
  )
}

