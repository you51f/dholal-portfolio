import Image from 'next/image'
import { Footer, Navbar, Title, Banner, ProjectType } from './components'
import styles from './page.module.css'
import { sanityFetch } from '@/sanity/lib/sanityFetch';
import { categoriesQuery } from '@/sanity/lib/queries';

export default async function Home() {
  const categories = await sanityFetch(categoriesQuery); 
  return (
    <div className={styles.home}>
      <Navbar colorStyle={1}/>
      <Banner/>
      <Title text={"PROJECTS"}/>
      <div className={styles.types_container}>
      {categories?.map((category, index) => {
          return (
            <ProjectType key={category._id} category={category}/> 
          )
        })} 
        {/* <ProjectType/> */}
      </div>
      {/* <div>Home page</div> */}
      <Footer/>
    </div>
  )
}
