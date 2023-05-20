"use client";

import Image from "next/image";
import avatar from "@/public/images/astronaut.jpg"
import { Timestamp } from "firebase/firestore";

type Props = {
  comment: string;
  name: string;
  createdAt: Timestamp;
  photoURL: string;
}

function CommentItem({ name, comment, createdAt, photoURL }: Props) {
  return (
    <li className="flex items-center mb-8 relative">
      <div className="mr-4 flex-shrink-0">
        <Image
          src={photoURL}
          alt="Avatar"
          width={500}
          height={500}
          className="rounded-full w-16 h-16 object-cover md:w-12 md:h-12"
        />
      </div>
      <div className="flex flex-col overflow-hidden justify-center">
        <div className="flex items-center">
          <h1 className="font-bold mr-2 xs:text-base">
            {name}
          </h1>
          {/* <p className="font-extralight text-sm">
            {
              createdAt.toDate().toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })
            }
          </p> */}
        </div>
        <p className="xs:text-sm">
          {comment}
        </p>
      </div>
      {/* <button className="py-2 px-4 rounded-2xl bg-dark text-light">
        Reply
      </button> */}
    </li>
  )
}

export default CommentItem