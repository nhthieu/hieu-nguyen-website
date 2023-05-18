import Link from "next/link";

type Props = {
  date?: string;
  title: string;
  description: string;
  url: string;
  blank?: boolean;
  className?: string;
}

// css for hover effect
// relative before:absolute before:left-0 before:top-0 before:h-full before:w-full before:bg-cardRadialGradient

function ProjectItem({ date, title, description, url, blank, className }: Props) {
  return (
    <Link href={url} target={blank ? '_blank' : ''} className={className}>
      <div className={`border border-solid border-dark/10 dark:border-light/10 rounded-xl p-8 w-full h-72 hover:bg-cardRadialGradientLight hover:border-dark/25 dark:hover:bg-cardRadialGradientDark dark:hover:border-light/25 transition duration-150 ease-linear lg:h-80 md:h-auto`}>
        <p className="mb-4">{date}</p>
        <h1 className="font-bold text-3xl mb-8 md:text-2xl">{title}</h1>
        <p className="text-dark dark:text-light/75">{description}</p>
      </div>
    </Link>
  )
}

export default ProjectItem