import Head from 'next/head'
import Prismic from '@prismicio/client'
import { GetStaticProps } from 'next'
import { getPrismicClient } from '../../services/prismic'
import styles from './styles.module.scss'

export default function Posts() {
    return (
        <>
            <Head>
                <title>Posts | Ignews</title>
            </Head>
            <main className={styles.container}>
                <div className={styles.posts}>
                    <a href="#">
                        <time>20 de Julho de 2021</time>
                        <strong>Teste</strong>
                        <p>gdsgdsgsdgsdgkjçlkjçljlgds</p>
                    </a>
                    <a>
                        <time>20 de Julho de 2021</time>
                        <strong>Teste</strong>
                        <p>gdsgdsgsdgsdgkjçlkjçljlgds</p>
                    </a>
                    <a>
                        <time>20 de Julho de 2021</time>
                        <strong>Teste</strong>
                        <p>gdsgdsgsdgsdgkjçlkjçljlgds</p>
                    </a>
                </div>
            </main>
        </>
    )
}

export const getStaticProps: GetStaticProps = async () => {
    const prismic = getPrismicClient()
    const response = await prismic.query([
        Prismic.Predicates.at('document.type', 'publication')
    ], {
        fetch: ['publication.title', 'publications.content'],
        pageSize: 100,
    })

    console.log(JSON.stringify(response, null, 2))
    return {
        props: {
            
        }
    }
}
