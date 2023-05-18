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
      className="mb-12"
    >
      <h1 className="font-medium text-2xl md:text-xl xs:text-sm capitalize">{title}</h1>
      {/* <p className=' font-normal text-lg mb-2'>{description}</p> */}
      <p className="text-dark/75 dark:text-light/75 md:text-sm xs:text-xs">Posted on {date}</p>
    </Link>
  )
}

export default BlogItem