import Link from 'next/link';
import React from 'react'

type Props = {
  title: string;
  description?: string;
  slug: string;
  date: string;
}

function BlogItem({ title, description, slug, date }: Props) {
  return (
    <Link
      href={`/blog/${slug}`}
      className="mb-12 relative"
    >
      <h1 className="font-medium text-2xl">{title}</h1>
      {/* <p className=' font-normal text-lg mb-2'>{description}</p> */}
      <div className='w-full h-[1px] bg-light/75 mb-3' />
      <p className="text-light/75">{date}</p>
    </Link>
  )
}

export default BlogItem