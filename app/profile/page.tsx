import {getServerSession} from 'next-auth/next'
import Image from 'next/image'
import {authConfig} from '@/configs/auth'
import {IProfile} from '@/app/profile/types'
import s from './page.module.scss'

export default async function Profile() {
 const {user} = await getServerSession(authConfig) as IProfile

 return <div className={s.container}>
  <h1>{user.name}</h1>
  <Image width={160} height={160} src={user.image} alt={'profile-avatar'} />
 </div>
}