import BlogItem from '@/components/BlogItem'
import React from 'react'

export const metadata = {
  title: "Hieu Nguyen - Blog",
  description: `Hieu Nguyen's Portfolio`,
}

type Props = {}

function BlogPage({ }: Props) {
  return (
    <div className='w-full min-h-screen py-40 pb-64'>
      <div className="flex flex-col border-b border-solid border-light/10 pb-20">
        <h1 className="font-bold text-5xl mb-6">Blog</h1>
        <p className="text-light/75 font-medium text-lg">Where I write tech and non-tech related stories, ideas and insights.</p>
      </div>
      <div className='pt-12'>
        <h1 className="font-bold text-3xl mb-8 ">Featured</h1>
        <div className='flex flex-col items-start justify-center'>
          <BlogItem 
            title='How to use Framer Motion'
            description='A quick guide on how to use Framer Motion to create animations in React.'
            date='Aug 26, 2021'
            slug='how-to-use-framer-motion'
          />
          <BlogItem 
            title='How to use Framer Motion'
            description='A quick guide on how to use Framer Motion to create animations in React.'
            date='Aug 26, 2021'
            slug='how-to-use-framer-motion'
          />
        </div>
      </div>

      <div className='pt-20'>
        <h1 className="font-bold text-3xl mb-8">Others</h1>
        <div className='flex flex-col items-start justify-center'>
          <BlogItem 
            title='How to use Framer Motion'
            description='A quick guide on how to use Framer Motion to create animations in React.'
            date='Aug 26, 2021'
            slug='how-to-use-framer-motion'
          />
          <BlogItem 
            title='How to use Framer Motion'
            description='A quick guide on how to use Framer Motion to create animations in React.'
            date='Aug 26, 2021'
            slug='how-to-use-framer-motion'
          />
        </div>
      </div>
    </div>
  )
}

export default BlogPage