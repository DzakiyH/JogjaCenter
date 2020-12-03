import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Jogja Center
        </h1>

        <div className={styles.grid}>
          <Link href="/mobilitas"><a className={styles.card}>
            <h3>Mobilitas &rarr;</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </a>
          </Link>

          <Link href="/ekonomi"><a  className={styles.card}>
            <h3>Ekonomi &rarr;</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </a>
          </Link>

          <Link href="/pariwisata">
          <a className={styles.card}>
            <h3>Pariwisata &rarr;</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
          </a>
          </Link>

        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
