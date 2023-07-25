import {Metadata} from 'next'

type IProps = {
    params: {
        id: string
    }
}

export async function generateMetadata ({params}:IProps): Promise<Metadata>  {
    return {
        title: 'Card | ' + params.id,
    }
}
export default function Card ({params}: IProps) {
    return <div>
        {params.id}
    </div>
}