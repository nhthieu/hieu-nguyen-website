import { SocialIcon } from "react-social-icons"

type Props = {
  className?: string
}

function Footer({ className }: Props) {
  return (
    <footer className={`py-6 border-t border-solid border-dark/10 font-medium text-xs w-full text-dark/50 dark:border-light/10 dark:text-light/50 ${className}`}>
      <div className="max-w-4xl mx-auto flex items-center">
        <p>Crafted by Hieu Nguyen&nbsp;|&nbsp;</p>
        <p>&nbsp;{new Date().getFullYear()} &copy; All Rights Reserved</p>

        {/* <div className="flex items-center justify-between">
        <SocialIcon url="https://www.linkedin.com/in/nhthieu16/" fgColor="gray" bgColor="transparent" target="blank"/>
        <SocialIcon url="https://www.github.com/nhthieu" fgColor="gray" bgColor="transparent" target="blank"/>
        <SocialIcon url="mailto:nguyenhotrunghieu0106@gmail.com" fgColor="gray" bgColor="transparent" target="blank" />
      </div> */}

      </div>

    </footer>
  )
}

export default Footer