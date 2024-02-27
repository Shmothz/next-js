import Image from 'next/image'
import {Navigation} from '@/components/Navigation'
import logo from '../../public/logo.png'
import s from './Header.module.scss'

export const Header = () => {

 return <header className={s.container}>
  <Image className={s.logo} height={52} src={logo} alt={'logo'}/>
  <Navigation/>
 </header>
}