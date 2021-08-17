import Head from 'next/head'
import Navbar from '../components/Navbar'
import Index from '../components/gallery/Index'
import Footer from '../components/Footer'
// import styles from '../styles/Home.module.css'

export default function Gallery() {
  return (
    <>
      <Head>
        <title>Udaan Property - Gallery</title>
        <link rel="icon" href="/favicon.ico" />  
      </Head>
      <Navbar calledBy="gallery"/>
      <Index/>
      <Footer/>
    </>
  )
}
