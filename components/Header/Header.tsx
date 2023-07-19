import Link from 'next/link'
import {routes} from '@/constants'

export const Header = () => {

 const { home, about, add } = routes

 return <header>
  <Link href={home}>Home</Link>
  <Link href={about}>About</Link>
  <Link href={add}>Add</Link>
 </header>
}