import Link from "next/link"
import { SocialIcon } from "react-social-icons";

type Props = {
  href: string;
  name: string;
  info: string;
  className?: string;
}

function ContactItem({ href, name, info, className }: Props) {
  return (
    <Link
      href={href}
      target="blank"
      className={`flex flex-col items-center border border-solid border-light/25 rounded-xl p-8 pb-16 ${className}`}>
      <div className="border rounded-full border-light/50 p-2 mb-8">
        <SocialIcon url={href} fgColor="#fafafa" bgColor="transparent" target="blank" />
      </div>
      <h1 className="font-bold text-2xl mb-4">{info}</h1 >
      <p>{name}</p>
    </Link>

  )
}

export default ContactItem