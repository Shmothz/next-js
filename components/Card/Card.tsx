'use client'
import {FC} from 'react'
import {ICard} from '@/app/cards/types'
import s from './Card.module.scss'

interface IProps {
 char: ICard
}
export const Card:FC<IProps> = ({char}) => {

 return <div className={s.container}>
  <span className={s.name}>{char.name}</span>
  <ul>
   <li>{char.phone}</li>
   <li>{char.email}</li>
   <li>{char.website}</li>
  </ul>
 </div>
}