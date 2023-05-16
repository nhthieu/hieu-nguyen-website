import Link from "next/link";

type Props = {
  date?: string;
  title: string;
  description: string;
  url: string;
  blank?: boolean;
}

function ProjectItem({ date, title, description, url, blank }: Props) {
  return (
    <Link href={url} target={blank ? '_blank' : ''}>
      <div className="border border-solid border-light/25 rounded-xl p-8 w-full h-auto mb-4 relative before:absolute before:left-0 before:top-0 before:h-full before:w-full before:bg-cardRadialGradient">
        <p className="mb-4">{date}</p>
        <h1 className="font-bold text-3xl mb-8">{title}</h1>
        <p className="text-light/75">{description}</p>
      </div>
    </Link>
  )
}

export default ProjectItem