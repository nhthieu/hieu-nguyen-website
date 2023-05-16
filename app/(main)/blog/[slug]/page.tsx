import Markdown from "markdown-to-jsx"
import matter from "gray-matter"
import fs from "fs";
import getPosts from "@/lib/getPosts";

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
    <div className='w-full min-h-screen py-40 pb-64'>
      <h1 className="text-5xl font-bold mb-12 text-center">{post.data.title}</h1>
      <article className="prose-base prose-pre:bg-[#1e293b] prose-headings:font-bold">
        <Markdown>{post.content}</Markdown>
      </article>
    </div>
  )
}

export default BlogContentPage