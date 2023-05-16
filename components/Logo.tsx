import Image from "next/image"
import Link from "next/link"
import signaturePic from '../public/images/signature.svg'
import { motion } from "framer-motion"

type Props = {
  className?: string
}

function Logo({ className }: Props) {
  return (
      <Image
        src={signaturePic}
        width={32}
        height={32}
        alt='Signature'
        priority
        className={`${className}`}
      />
  )
}

export default Logo