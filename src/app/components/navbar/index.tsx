
"use client"
import { useContext } from 'react';
import Link from 'next/link';
import styles from './navbar.module.css';
import { BsSun, BsMoonStarsFill } from 'react-icons/bs';
import { ThemeContext } from '../../page';

const Mode = {
    Light: 'light',
    Dark: 'dark'
}

export default function NavBar() {
    const themeContext = useContext(ThemeContext)
    return (
        <main className={styles.navbar}>
            <div className={styles.logo}>
                <Link href='/'>
                    <span className={styles.initials}>LI</span>
                    Home
                </Link>
            </div>
            <ul className={styles.links}>
                <li className={styles.item}><Link href='/about'>About</Link></li>
                <li className={styles.item}><Link href="news.asp">Contact Me</Link></li>
                <li className={styles.item} onClick={() => { themeContext.setTheme(themeContext.theme === Mode.Light ? Mode.Dark : Mode.Light)}}>
                    {themeContext.theme === Mode.Light ? (
                        <BsMoonStarsFill />
                    ) : (
                        <BsSun ></BsSun>
                    )}
                </li>
            </ul>
        </main>
    )
}