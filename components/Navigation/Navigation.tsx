'use client'
import Link from 'next/link'
import cn from 'classnames'
import {usePathname} from 'next/navigation'
import {signOut, useSession} from 'next-auth/react'
import {routes} from '@/constants/routes'
import s from './Navigation.module.scss'

export const Navigation = () => {
 const pathname = usePathname()
 const session = useSession()
 console.log(session)
 return (
  <> {routes.map((link) => {
   const isActive = pathname === link.route
   return (<Link key={link.route} href={link.route} className={cn(s.link, isActive && s.active)}>{link.label}</Link>)
  })}
     {!!session.data &&
      <Link href={'/profile'} className={cn(s.link, pathname === '/profile' && s.active)}>profile</Link>}
     {!!session.data ? <Link href={'#'} className={s.link} onClick={() => signOut({
      callbackUrl: '/',
      })}>sign out</Link> :
      <Link href={'/api/auth/signin'} className={s.link}>sign in</Link>}
  </>
 )
}
