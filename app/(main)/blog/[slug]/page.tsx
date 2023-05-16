
// export async function generateStaticParams() {

// }


type Props = {
  params: {
    slug: string
  }
}

function BlogContentPage({params}: Props) {
  console.log(params)
  return (
    <div className='w-full min-h-screen py-40 pb-64'>
      <h1>Blog Content</h1>
    </div>
  )
}

export default BlogContentPage