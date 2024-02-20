import {Metadata} from 'next'
import s from './About.module.scss'

export const metadata:Metadata = {
 title: 'Space | About',
}
export default function About () {
 return <div className={s.container}>
  <h2 className={s.title}>About project page</h2>
 </div>
}