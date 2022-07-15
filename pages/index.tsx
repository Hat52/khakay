import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to Khakay!
        </h1>

        <div className={styles.grid}>
          <a href="/auth" className={styles.card}>
            <h2>Auth Forms &rarr;</h2>
            <p>Signin and Logup forms Templates</p>
          </a>

          <a href="/cards" className={styles.card}>
            <h2>Cards &rarr;</h2>
            <p>Different type of cards Templates</p>
          </a>

          <a
            href="/multi-step-form"
            className={styles.card}
          >
            <h2>Multi Step Forms &rarr;</h2>
            <p>Beautiful Multi step forms Templates</p>
          </a>

          <a
            href="/navbar"
            className={styles.card}
          >
            <h2>Navbars &rarr;</h2>
            <p>
              Beautiful Navbars Templates
            </p>
          </a>

          <a
            href="/page-not-found"
            className={styles.card}
          >
            <h2>Page Not Found &rarr;</h2>
            <p>
              Beautiful Page Not Found Templates
            </p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://github.com/Hat52"
          target="_blank"
          rel="noopener noreferrer"
        >
          Devloped by Hamza Ali
          {/* <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span> */}
        </a>
      </footer>
    </div>
  )
}

export default Home
