import Menu from '@/components/Menu';
import { srcLink } from '@/components/Utils';
import '@/styles/globals.css'
import TR from '@/translations/tr.json'
import Head from 'next/head';
import { createContext, useState, useMemo, useCallback } from 'react'

export const AppContext = createContext();

export default function App({ Component, pageProps }) {
  const [dayTime, setDayTime] = useState(true);
  const [currentBlock, setCurrentBlock] = useState("a-block");

  function toggleDayTime() {
    setDayTime(!dayTime);
  }

  const value = useMemo(
    () => ({
      dayTime,
      toggleDayTime,
      currentBlock,
      setCurrentBlock,

    }),
    [
      dayTime,
      toggleDayTime,
      currentBlock,
      setCurrentBlock,
    ],
  );


  return (
    <AppContext.Provider value={value}>
      <Head>
        <title>{TR.title}</title>
        <meta name="description" content={TR.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={srcLink("/favicon.ico")} />
      </Head>
      <Menu />
      <Component {...pageProps} />
    </AppContext.Provider>
  )
}
