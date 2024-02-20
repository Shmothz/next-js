import {Metadata} from 'next'
import {Card} from '@/components/Card'
import {ICards} from '@/app/cards/types'
import s from './Cards.module.scss'

export const metadata: Metadata = {
 title: 'Space | Cards',
}

async function getCards():Promise<ICards> {
 const response = await fetch(`${process.env.API}/users`, {
  method: 'GET',
 })

 return response.json()
}

export default async function Cards() {
 const cards = await getCards()

 return <div className={s.container}>{
  cards.map((item, index) => <Card key={index} char={item}/>)
 }</div>
}