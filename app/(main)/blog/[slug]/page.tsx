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
    params: {
      slug: post.data.slug,
    }
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
  params: {
    slug: string;
  }
}

function BlogContentPage({ params }: Props) {
  const slug = params.slug;
  const post = getPostContent(slug);

  return (
    <div className='w-full min-h-screen py-32 pb-64'>
      <div className="w-[80%] mx-auto">
        <Link href="/blog">
          <ArrowBackIcon className="fill-light/75 w-7 h-auto hover:fill-light transition duration-300 ease-out" />
        </Link>
        <div className="flex flex-col items-center mb-20 mt-24 w-full">
          <h1 className="text-5xl font-bold mb-6 text-center">{post.data.title}</h1>
          <p className="text-light/75 text-lg text-center">{post.data.date}</p>
        </div>
        <article className="prose-base prose-pre:bg-light/10 prose-headings:font-bold mx-auto prose-a:underline prose-a:font-medium">
          <Markdown>{post.content}</Markdown>
        </article>
      </div>

    </div>
  )
}

export default BlogContentPage