'use client'
import Link from 'next/link'

export default function NotFound() {
 return (
  <div>
   <p>Some error...</p>
   <p>Go to back<Link href={'/'}>Homepage</Link></p>
  </div>
 )
}
