"use client";

import { useState } from "react";
import Image from "next/image";
import avatar from "@/public/images/astronaut.jpg"
import { Timestamp } from "firebase/firestore";

type Props = {
  comment: string;
  name: string;
  createdAt: Timestamp;
  photoURL: string;
  // replies: any[];
  // replyButton?: boolean;
}

function CommentItem({ name, comment, createdAt, photoURL, }: Props) {
  const [showReplies, setShowReplies] = useState<boolean>(false);
  const toggleReplies = () => {
    setShowReplies(!showReplies);
  }

  return (
    <li className="flex flex-col mb-8 ">
      <div className="flex ">
        <div className="mr-4 flex-shrink-0 xs:mr-2">
          <Image
            src={photoURL || avatar}
            alt="Avatar"
            width={500}
            height={500}
            className="rounded-full w-16 h-16 object-cover md:w-12 md:h-12 xs:w-8 xs:h-8"
          />
        </div>
        <div className="flex flex-col overflow-hidden justify-center ">
          <div className="flex items-center relative">
            <h1 className="font-bold xs:font-normal mr-2 xs:text-sm mb-1">
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
          <p className="xs:text-sm font-medium">
            {comment}
          </p>
        </div>
      </div>
      {/* {
        replyButton && (
          <button className="text-dark dark:text-light self-start font-medium text-sm ml-20 md:ml-16 mt-3">
            Reply
          </button>
        )
      }
      {
        replies.length > 0 &&
        <button
          onClick={toggleReplies}
          className="text-dark dark:text-light underline self-start font-md mt-1 ml-20 text-sm md:ml-16">
          {
            showReplies ? "Hide replies" : "Show replies"
          }
        </button>
      }
      {
        showReplies && (
          <ul className="ml-16 mt-6">
            <CommentItem
              name="Hieu Nguyen"
              comment="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum."
              createdAt={createdAt}
              photoURL={avatar.src}
              replies={[]}
              replyButton={false}
            />
          </ul>
        )
      } */}
    </li>
  )
}

export default CommentItem