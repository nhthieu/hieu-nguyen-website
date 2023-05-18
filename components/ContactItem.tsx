import Link from "next/link"

type Props = {
  href: string;
  name: string;
  className?: string;
  children?: React.ReactNode;
}

function ContactItem({ href, name, className, children }: Props) {
  return (
    <Link
      href={href}
      target="blank"
      className={`flex flex-col items-center border border-solid border-dark/10 hover:bg-cardRadialGradientLight hover:border-dark/25  dark:border-light/10 rounded-xl p-8 pb-16 md:pb-12 dark:hover:bg-cardRadialGradientDark dark:hover:border-light/25 transition duration-150 ease-linear ${className}`}>
      <div className="border rounded-full border-dark/25 dark:border-light/50 p-4 mb-8 flex items-center justify-center">
        {/* <SocialIcon url={href} fgColor={theme === "dark" ? "#fafafa" : "#121212"} bgColor="transparent" /> */}
        {children}
      </div>
      <p className="sm:text-sm">{name}</p>
    </Link>

  )
}

export default ContactItem