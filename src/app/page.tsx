"use client"
import React, { useState } from 'react'
import { Manrope } from 'next/font/google'
import styles from './page.module.css'
import NavBar from './components/navbar'
import Content from './components/content'

const manrope = Manrope({
  weight: '400',
  subsets: ['latin'],
})

export const ThemeContext = React.createContext({
  theme: 'dark',
  setTheme: (theme: string) => { }
})

export default function Home() {
  const setTheme = (theme: string) => {
    setThemeMode({ ...themeMode, theme })
  }

  const initState = {
    theme: 'dark',
    setTheme: setTheme
  }

  const [themeMode, setThemeMode] = useState(initState)

  return (
    <ThemeContext.Provider value={themeMode}>
      <main className={[styles.main, manrope.className].join(' ')}>
        <NavBar></NavBar>
        <Content></Content>
      </main>
    </ThemeContext.Provider>
  )
}
