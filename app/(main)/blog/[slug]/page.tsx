import Markdown from "markdown-to-jsx"
import matter from "gray-matter"
import fs from "fs";
import getPosts from "@/lib/getPosts";
import Link from "next/link";
import { ArrowBackIcon } from "@/components/Icons";

export const metadata = {
  title: "Hieu Nguyen - Blog",
  description: `Hieu Nguyen's Portfolio`,
}

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


type Props = {
  params: { slug: string; }
}

function BlogContentPage({ params }: Props) {
  const { slug } = params;
  const post = getPostContent(slug);

  return (
    <div className='w-full min-h-screen pb-48'>
      <div className="max-w-[80%] mx-auto xl:max-w-full">
        <Link href="/blog">
          <div className="w-6">
            <ArrowBackIcon className="fill-light/75  hover:fill-light transition duration-300 ease-out" />
          </div>
        </Link>
        <div className="flex flex-col items-center mb-20 mt-16 w-full">
          <h1 className="text-5xl font-bold mb-6 text-center lg:text-4xl md:text-3xl md:mb-4 sm:text-2xl">{post.data.title}</h1>
          <p className="text-light/75 text-lg text-center lg:text-base">{post.data.date}</p>
        </div>
        <article className=" prose-lg prose-pre:bg-light/10 prose-pre:text-light prose-pre:overflow-x-scroll prose-headings:font-bold prose-a:underline prose-a:font-medium text-light lg:prose-base sm:prose-sm">
          <Markdown>{post.content}</Markdown>
        </article>
      </div>
    </div>
  )
}

export default BlogContentPage