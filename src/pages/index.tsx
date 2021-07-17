import { GetStaticProps } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import avatarImage from '../../public/images/avatar.svg'
import { SubscribeButton } from '../components/SubscribeButton'
import { stripe } from '../services/stripe'
import styles from './home.module.scss'

type HomeProps = {
  product: {
    priceId: string,
    amount: number
  }
}

export default function Home({ product }: HomeProps) {
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
            <span>por {product.amount} mensais</span>
          </p>
          <SubscribeButton priceId={product.priceId} />
        </section>
        <Image src={avatarImage} alt="Garota programando"/>
      </main>
    </>

  )
}

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve('price_1JDv7TKJkzLEbdfQxvkuLTjt', {
    expand: ['product']
  })

  const product = {
     priceId: price.id,
     amount: new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
     }).format(price.unit_amount ? price.unit_amount / 100 : null as any)  
  }

  return {
    props: {
      product
    },
    revalidate: 60 * 60 * 24, //24 horas
  }
}
