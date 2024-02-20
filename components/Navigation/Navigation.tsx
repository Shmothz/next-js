'use client'
import Link from 'next/link'
import cn from 'classnames'
import {usePathname} from 'next/navigation'
import {ILink} from '@/constants/routes'
import s from './Navigation.module.scss'

type IProps = {
 links: ILink[]
}
export const Navigation = ({ links }: IProps) => {
 const pathname = usePathname()
 return (
  <> { links.map((link) => {
   const isActive = pathname === link.route
   return (<Link key={link.route} href={link.route} className={cn(s.link, isActive && s.active)}>{link.label}</Link>)
  })}
  </>
 )
}
