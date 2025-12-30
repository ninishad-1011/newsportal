import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import { NewsCardProps } from '@/types/news'

const newsCart = ({item}:NewsCardProps) => {
  return (
    <div className='border p-4 rounded-md shadow-md'>
        <Link href={'/news/${item._id}'}>
        <Image src={'/image/The-Role-of-Technology-in-Modern-Society-1024x570.jpg'} width={400} height={300} alt='news image' className='md:h-56 rounded mb-4 hover:scale-105 cursor-pointer transation-all duration-200'/>
        </Link>
        <div>
            <h2 className='text-xl font-semibold my-3'>{item.title}</h2>
            <p className='mb-4'>{item.body .substring(0,100)}</p>
            <Link href={'/news/${item._id}'} >
                <Button variant="default">Read More</Button>
            </Link>
        </div>
    </div>
  )
}

export default newsCart