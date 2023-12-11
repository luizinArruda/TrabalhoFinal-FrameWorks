import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
export default function Home() {
  return (
    <div>
      <Navbar />
      <Head>
        <title> Home </title>
      </Head>
      <div className={styles.body}>
        <div className={styles.body2}>
        <h2>Descrição de Times</h2>
        <p>Proporcionamos uma experiência inclusiva às pessoas cegas, disponibilizando um banco de dados abrangente de descrições em áudio para imagens. Reconhecemos a importância da acessibilidade e dedicamo-nos a tornar o ambiente digital acessível a todos.</p>
        </div>
      </div>
    
      <Footer />
    </div>
  )
}
