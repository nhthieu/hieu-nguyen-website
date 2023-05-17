import Link from "next/link";

type Props = {
  date?: string;
  title: string;
  description: string;
  url: string;
  blank?: boolean;
  className?: string;
}

function ProjectItem({ date, title, description, url, blank, className }: Props) {
  return (
    <Link href={url} target={blank ? '_blank' : ''} className={className}>
      <div className={`border border-solid border-light/25 rounded-xl p-8 w-full h-auto relative before:absolute before:left-0 before:top-0 before:h-full before:w-full before:bg-cardRadialGradient`}>
        <p className="mb-4">{date}</p>
        <h1 className="font-bold text-3xl mb-8 md:text-2xl">{title}</h1>
        <p className="text-light/75">{description}</p>
      </div>
    </Link>
  )
}

export default ProjectItem