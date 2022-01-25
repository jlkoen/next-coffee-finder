import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Coffee Finder</title>
        <meta name='description' content='Find your new favorite coffee spot' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          <a>Welcome to Coffee Finder</a>
        </h1>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
