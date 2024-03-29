import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Link from 'next/link';

const Home: NextPage = () => {
	return (
		<div className={`${styles.container} bg-[#ECF9FF]`}>
			<Head>
				<title>Khakay</title>
				<meta name="description" content="Khakay" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main className={styles.main}>
				<h1 className={`${styles.title} text-[#ECF9FF]`}>Welcome to Khakay!</h1>

				<div className={styles.grid}>
					<Link href="/auth">
						<a className={styles.card}>
							<h2>Auth Forms &rarr;</h2>
							<p>Login in and Signup forms Templates</p>
						</a>
					</Link>
					<Link href="/cards">
						<a className={styles.card}>
							<h2>Cards &rarr;</h2>
							<p>Different type of cards Templates</p>
						</a>
					</Link>
					<Link href="/multi-step-form">
						<a className={styles.card}>
							<h2>Multi Step Forms &rarr;</h2>
							<p>Beautiful Multi step forms Templates</p>
						</a>
					</Link>
					<Link href="/navbar">
						<a className={styles.card}>
							<h2>Navbar &rarr;</h2>
							<p>Beautiful Navbar Templates</p>
						</a>
					</Link>
					<Link href="/page-not-found">
						<a className={styles.card}>
							<h2>Page Not Found &rarr;</h2>
							<p>Beautiful Page Not Found Templates</p>
						</a>
					</Link>
				</div>
			</main>

			<footer className={styles.footer}>
				<a href="https://github.com/Hat52" target="_blank" rel="noopener noreferrer">
					Developed by Hamza Ali
					{/* <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span> */}
				</a>
			</footer>
		</div>
	);
};

export default Home;
