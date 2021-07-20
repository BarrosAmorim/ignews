import Head from 'next/head'
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
