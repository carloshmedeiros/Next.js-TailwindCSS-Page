import Head from 'next/head'
import Navbar from '../components/Nav'
import Home from './Home'
import Footer from '../components/Footer'

export default function Main() {
  return (
    <div>
      <Head>
        <title>Broth</title>
        <link rel="icon" href="/LogoBHTBranca.png" />
      </Head>
      <Navbar/>
      <Home/>
      <Footer/>
    </div>
  )
}
