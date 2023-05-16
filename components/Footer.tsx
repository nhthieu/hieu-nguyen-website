import { SocialIcon } from "react-social-icons"

type Props = {
  className?: string
}

function Footer({ className }: Props) {
  return (
    <footer className={`py-8 flex items-center justify-between border-t border-solid border-light/25 font-medium text-xs w-full text-light/50 ${className}`}>
      <p>Crafted by Hieu Nguyen</p>
      <div className="flex items-center justify-between">
        <SocialIcon url="https://www.linkedin.com/in/nhthieu16/" fgColor="gray" bgColor="transparent" target="blank"/>
        <SocialIcon url="https://www.github.com/nhthieu" fgColor="gray" bgColor="transparent" target="blank"/>
        <SocialIcon url="mailto:nguyenhotrunghieu0106@gmail.com" fgColor="gray" bgColor="transparent" target="blank" />
      </div>

      <p>{new Date().getFullYear()} &copy; All Rights Reserved</p>
    </footer>
  )
}

export default Footer