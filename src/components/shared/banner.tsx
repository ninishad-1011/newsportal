import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'

function banner() {
  return (
    <div className='bg-slate-100 dark:bg-gray-800 dark:text-white rounded-md'>
     <div className='p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8'>
        <div>
            <Image src="/image/The-Role-of-Technology-in-Modern-Society-1024x570.jpg" width={600} height={400} alt="banner image" className='rounded-md'/>
        </div>
        <div className='space-y-4 flex flex-col'>
            <h4 className='text-sm font-semibold text-gray-500'>Technology</h4>
            <h2 className='text-xl font-bold'>Open AI is Growing Fast and Burning Piles Of Money</h2>
                   <p>
            OpenAI monthly revenue hit US$300 million in August, up 1,700% since
            the beginning of 2023, and the company expects about $3.7 billion in
            annual sales this year, according to financial documents reviewed by
            The New York Times.
            <br /> <br />
            OpenAI estimates that its revenue will balloon to copy1.6 billion
            next year. OpenAI revenue in August more than tripled from a year
            earlier, according to the documents, and about 350 million people —
            up from around 100 million in March of this year — used its services
            each month as of June.
          </p>
          <Button variant="default">Read More</Button>
        </div>

     </div>
    </div>
  )
}

export default banner
