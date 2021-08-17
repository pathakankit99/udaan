import Head from 'next/head'
import Navbar from '../components/Navbar'
import Index from '../components/About/Index'
import Footer from '../components/Footer'
// import styles from '../styles/Home.module.css'

export default function About() {
  return (
    <>
      <Head>
        <title>Udaan Property Pvt Ltd - About</title>
        <meta name="description" content="In letter and spirit, our brand pillars stand at the very core of who we are and what we stand for - not just in our deliveries 
                    but also in our everyday conduct." />
        <link rel="icon" href="/favicon.ico" />  
      </Head>
      <Navbar calledBy="about"/>
      <Index/>
      <Footer/>
    </>
  )
}
