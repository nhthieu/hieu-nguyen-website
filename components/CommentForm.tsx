"use client";

import { User } from "firebase/auth";
import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/firebase";
import Image from "next/image";
import defaultImage from "@/public/images/astronaut4.jpg"

type Props = {
  user: User;
  slug: string;
}

function CommentForm({ user, slug }: Props) {
  const [comment, setComment] = useState<string>('');
  const commentsRef = collection(db, 'blog-comments');
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (comment.trim() === '') return;
    setComment("");
    await addDoc(commentsRef, {
      name: user.displayName,
      comment,
      slug,
      createdAt: serverTimestamp(),
      photoURL: user.photoURL,
      uid: user.uid,
      email: user.email,
      replies: []
    })
  }

  return (
    <div className="flex items-center mb-12 w-full">
      <Image 
        src={ user.photoURL || defaultImage }
        alt="Avatar"
        width={500}
        height={500}
        className="rounded-full w-16 h-16 object-cover"
      />
      <form
        onSubmit={handleSubmit}
        className="flex flex-col ml-2 w-full">
        <input
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          type="text"
          placeholder="Write something..."
          className="mb-4 p-2 border-b border-solid border-dark/25 dark:border-light/25 outline-none focus:border-dark focus:dark:border-light dark:bg-dark" />
      </form>
    </div>
  )
}

export default CommentForm