import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'

function Banner() {
  return (
    <div className='bg-gray-200/30 dark:bg-gray-800/30 backdrop-blur-md border border-white/30 dark:border-gray-500/30 rounded-md'>
      <div className='p-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8'>
        {/* ছবি */}
        <div>
          <Image 
            src="/image/The-Role-of-Technology-in-Modern-Society-1024x570.jpg" 
            width={600} 
            height={400} 
            alt="banner image" 
            className='rounded-md'
          />
        </div>

        {/* লেখা */}
        <div className='space-y-4 flex flex-col'>
          <h4 className='text-sm font-semibold text-gray-700 dark:text-gray-400'>প্রযুক্তি</h4>
          <h2 className='text-xl font-bold'>
            ওপেন এআই দ্রুত বৃদ্ধি পাচ্ছে এবং প্রচুর অর্থ ব্যয় করছে
          </h2>
          <p className='text-gray-800 dark:text-gray-300'>
            OpenAI-এর মাসিক আয় আগস্টে $৩০০ মিলিয়ন হয়েছে, যা ২০২৩ সালের শুরু থেকে ১,৭০০% বৃদ্ধি পেয়েছে, এবং সংস্থাটি এই বছরের বার্ষিক বিক্রয় প্রায় $৩.৭ বিলিয়ন আশা করছে, <br /> <br />
            OpenAI অনুমান করছে যে আগামী বছর এর আয় প্রায় $১.৬ বিলিয়ন হবে। আগস্টে OpenAI-এর আয় গত বছরের তুলনায় তিনগুণের বেশি হয়েছে, এবং প্রায় ৩৫০ মিলিয়ন মানুষ — মার্চের প্রায় ১০০ মিলিয়ন থেকে বৃদ্ধি পেয়ে — জুন মাসে এর পরিষেবা ব্যবহার করেছে।
          </p>

          <Button variant="default">আরও পড়ুন</Button>
        </div>
      </div>
    </div>
  )
}

export default Banner
