import {NextRequest, NextResponse} from 'next/server'
import {cards} from '@/app/api/cards/cards'
import {ICard} from '@/app/api/cards/types'

export async function GET(req: NextRequest, {params}: { params: { id: string }}) {
    const {id} = params

    const responseCard = cards.find((card:ICard) => card.id.toString() === id)

    return NextResponse.json(responseCard)
}

export async function DELETE(req: NextRequest, {params}: { params: { id: string }}) {
    const {id} = params

    // Logic delete card

    return NextResponse.json({ message: `Deleted card with id: ${id}`})
}