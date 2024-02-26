import {NextRequest, NextResponse} from 'next/server'
import {cards} from '@/app/api/cards/cards'
import {ICard, ICards} from '@/app/api/cards/types'

export async function GET(req: NextRequest) {

    const API_KEY = process.env.API_KEY

    const { searchParams } = new URL(req.url)

    const query = searchParams.get('search')

    let responseCards: ICards = cards

    if (!!query) {
        responseCards = cards.filter((card: ICard) => card.name.toLowerCase().includes(query.toLowerCase()))
    }

    return NextResponse.json(responseCards)
}