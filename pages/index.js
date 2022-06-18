import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useUser } from '@auth0/nextjs-auth0';
import HomePage from '../components/HomePage'
import DashBoard from '../components/DashBoard';

export default function Home() {
  const { user, error, isLoading } = useUser();
  console.log(user)

  if (user) {
    return (
      <div className={styles.container}>
        <Head>
          <title>Create Next App</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div>
          <DashBoard />
        </div>
      </div>
    )
  }


  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <HomePage />
      </div>
    </div>
  )
}
