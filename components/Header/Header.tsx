'use client'
import Link from 'next/link'
import {routes} from '@/constants'
import s from './Header.module.scss'

export const Header = () => {

 const { home, about, cards } = routes
 
 return <header className={s.container}>
  <Link href={home} className={s.link}>Home</Link>
  <Link href={about} className={s.link}>About</Link>
  <Link href={cards} className={s.link}>Cards</Link>
 </header>
}