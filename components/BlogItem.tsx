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
      className="mb-12 w-full"
    >
      <h1 className="font-medium text-2xl md:text-xl xs:text-lg capitalize underline">{title}</h1>
      <p className="text-dark/75 dark:text-light/75 text-sm xs:text-xs">Posted on {date}</p>
      <p className='font-normal text-lg md:text-base xs:text-sm mt-1'>{description}</p>
    </Link>
  )
}

export default BlogItem