import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Banner from '/components/banner';
export default function Home() {
  const handleOnBannerBtnClick = () => {
    console.log('banner button click');
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Coffee Finder</title>
        <meta name='description' content='Find your new favorite coffee spot' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <Banner
          buttonText='View stores nearby'
          handleOnClick={handleOnBannerBtnClick}
        />
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
