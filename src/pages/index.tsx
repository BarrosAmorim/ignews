import Head from 'next/head'
import Image from 'next/image'
import avatarImage from '../../public/images/avatar.svg'
import styles from './home.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>Início | ig.news</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span> 👏 Olá, bem vindo!</span>
          <h1>Notícias sobre o mundo <span>React.</span></h1>
          <p>
            Tenha acesso a todas as publicações <br />
            <span>por R$ 9,90</span>
          </p>
        </section>
        <Image src={avatarImage} alt="Garota programando" unoptimized />
      </main>
    </>

  )
}
