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
      className="mb-8">
      <h1 className="font-medium text-xl mb-2">{title}</h1>
      <p className="text-light/50">{date}</p>
      {/* <p>{description}</p> */}
    </Link>
  )
}

export default BlogItem