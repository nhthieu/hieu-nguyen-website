import Link from "next/link"
import { SocialIcon } from "react-social-icons";

type Props = {
  href: string;
  name: string;
  className?: string;
}

function ContactItem({ href, name, className }: Props) {
  return (
    <Link
      href={href}
      target="blank"
      className={`flex flex-col items-center border border-solid border-light/25 rounded-xl p-8 pb-16  md:pb-12 relative before:absolute before:left-0 before:top-0 before:h-full before:w-full before:bg-cardRadialGradient ${className}`}>
      <div className="border rounded-full border-light/50 p-2 mb-8">
        <SocialIcon url={href} fgColor="#fafafa" bgColor="transparent" target="blank" />
      </div>
      <p className="sm:text-sm">{name}</p>
    </Link>

  )
}

export default ContactItem