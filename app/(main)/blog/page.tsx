import BackToTop from '@/components/BackToTop';
import BlogItem from '@/components/BlogItem'
import getPosts from '@/lib/getPosts';
import React from 'react'

export const metadata = {
  title: "Hieu Nguyen - Blog",
  description: `Hieu Nguyen's Personal Website`,
}

type Props = {}

function BlogPage({ }: Props) {
  const posts = getPosts();

  return (
    <div className='w-full pb-32'>
      <BackToTop />
      <section id="blog" className='max-w-4xl mx-auto'>
        <div className="w-full flex flex-col items-center border-b border-solid border-dark/10 dark:border-light/10 pb-16 md:text-center">
          <h1 className="font-bold text-5xl mb-6 md:text-4xl">Blog</h1>
          <p className="text-dark/75 dark:text-light/75 font-medium text-lg md:text-base">Where I write tech and non-tech related stories, ideas and insights.</p>
        </div>
        <div className='pt-16'>
          <div className='flex flex-col items-start justify-center'>
            {posts.map(post => (
              <BlogItem
                key={post.data.slug}
                title={post.data.title}
                description={post.data.description}
                date={post.data.date}
                slug={post.data.slug}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default BlogPage