"use client";

import { User } from "firebase/auth";
import { useEffect, useState, useRef } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/firebase";
import Image from "next/image";
import defaultImage from "@/public/images/astronaut4.jpg"

type Props = {
  user: User;
  slug: string;
}

function CommentForm({ user, slug }: Props) {
  const ref = useRef<HTMLTextAreaElement>(null);
  const [comment, setComment] = useState<string>("");
  const [sending, setSending] = useState<boolean>(false);
  const commentsRef = collection(db, 'blog-comments');
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (comment.trim() === '') return;
    setComment("");
    // resize input
    if (ref.current) {
      ref.current.style.height = 'auto';
    }
    setSending(true);
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
    setSending(false);

  }

  // auto resize input
  useEffect(() => {
    const input = ref.current;
    const adjustHeight = () => {
      if (!input) return;
      input.style.height = 'auto';
      input.style.height = input.scrollHeight + 'px';
    }
    input?.addEventListener('input', adjustHeight);
    return () => {
      input?.removeEventListener('input', adjustHeight);
    }
  }, []);

  return (
    <div className="flex w-full">
      <Image
        src={user.photoURL || defaultImage}
        alt="Avatar"
        width={500}
        height={500}
        className="rounded-full w-16 h-16 object-cover md:w-12 md:h-12"
      />
      <form
        onSubmit={handleSubmit}
        className="flex flex-col ml-2 w-full">
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          // type="text"
          ref={ref}
          placeholder="Write something..."
          rows={1}
          className="ml-2 overflow-hidden border-b border-solid border-dark/25 dark:border-light/25 outline-none focus:border-dark focus:dark:border-light bg-light dark:bg-dark md:p-1 md:text-base xs:text-sm" />
        <button
          disabled={comment.trim() === ""}
          type="submit"
          className={`self-end py-2 px-4 text-light dark:text-dark rounded-xl mt-4 md:text-sm ${comment.trim() === "" ? "bg-dark/25 dark:bg-light/25" : "bg-dark opacity-90 dark:bg-light hover:opacity-100"}`}>
          Comment
        </button>
      </form>
    </div>
  )
}

export default CommentForm