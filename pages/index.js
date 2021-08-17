import Head from 'next/head'
import Navbar from '../components/Navbar'
import Homepage from '../components/Homepage/Index'
import Footer from '../components/Footer'
// import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>Udaan Property Pvt Ltd</title>
        <meta name="description" content="Discover apartments/Cottages/Lands that enhance your wellbeing. Live a healthy and balanced life with everything you enjoy at your fingertips." />
        <link rel="icon" href="/favicon.ico" />  
      </Head>
      <Navbar calledBy="home"/>
      <Homepage/>
      <Footer/>
    </>
  )
}
