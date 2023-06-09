
import Link from "next/link";
import Markdown from "markdown-to-jsx"
import matter from "gray-matter"
import fs from "fs";

import getPosts from "@/lib/getPosts";
import { ArrowBackIcon } from "@/components/Icons";
import ThemeSwitcher from "@/components/ThemeSwitcher";
import BackToTop from "@/components/BackToTop";
import CommentSection from "@/components/CommentSection";

export async function generateStaticParams() {
  const posts = getPosts();
  return posts.map(post => ({
    slug: post.data.slug
  }));
}

const getPostContent = (slug: string): PostData => {
  const folder = "contents/blogs";
  const file = `${folder}/${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);

  return {
    data: {
      title: matterResult.data.title,
      description: matterResult.data.description,
      date: matterResult.data.date,
      slug: matterResult.data.slug,
    },
    content: matterResult.content,
  }
}

export const metadata = {
  title: `Hieu Nguyen - Blog`,
  description: `Hieu Nguyen's Personal Website`,
}

type Props = {
  params: { slug: string; }
}

function BlogContentPage({ params }: Props) {
  const { slug } = params;
  const post = getPostContent(slug);

  return (
    <div className='w-full pb-32'>
      <ThemeSwitcher />
      <BackToTop />
      <div className="max-w-4xl mx-auto">
        <Link href="/blog">
          <div className="w-6">
            <ArrowBackIcon className="fill-dark/75 hover:fill-dark dark:fill-light/75 dark:hover:fill-light transition duration-300 ease-out" />
          </div>
        </Link>
        <div className="flex flex-col items-center mb-20 mt-16 w-full">
          <h1 className="text-5xl font-bold mb-6 text-center lg:text-4xl md:text-3xl md:mb-4 sm:text-2xl capitalize">{post.data.title}</h1>
          <p className="text-dark/75 dark:text-light/75 text-lg text-center lg:text-base">{post.data.date}</p>
        </div>
        <article className="prose-lg prose-pre:bg-dark/5 dark:prose-pre:bg-light/10 prose-pre:overflow-x-scroll prose-headings:font-bold prose-a:underline prose-a:font-medium lg:prose-base sm:prose-sm prose-img:mx-auto ">
          <Markdown>{post.content}</Markdown>
        </article>

        <CommentSection slug={slug} className="mt-16" /> 
      </div>
    </div>
  )
}

export default BlogContentPage