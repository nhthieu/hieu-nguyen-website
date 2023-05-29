"use client";

import { User } from "firebase/auth";
import { useEffect, useState, useRef, createRef } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import Image from "next/image";
import defaultImage from "@/public/images/astronaut.jpg"
import ReCAPTCHA from "react-google-recaptcha";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

type Props = {
  user: User;
  slug: string;
}
const commentsRef = collection(db, 'blog-comments');

function CommentForm({ user, slug }: Props) {
  const ref = useRef<HTMLTextAreaElement>(null);
  const recaptchaRef = createRef<ReCAPTCHA>();
  const [comment, setComment] = useState<string>("");
  const [sending, setSending] = useState<boolean>(false);
  const notify = (msg: string, err = false) => {
    if (err) {
      toast.error(msg, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "colored",
      });
    } else {
      toast.success(msg, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (comment.trim() === '') return;
    recaptchaRef.current?.execute();
  }

  const onRecaptchaChange = async (captchaCode: string | null) => {
    if (!captchaCode) {
      return;
    }
    // resize input
    if (ref.current) {
      ref.current.style.height = 'auto';
    }
    setSending(true);
    try {
      await addDoc(commentsRef, {
        name: user.displayName,
        comment,
        slug,
        createdAt: serverTimestamp(),
        photoURL: user.photoURL,
        uid: user.uid,
        email: user.email,
        verified: false,
        replies: []
      })
      notify("Comment submitted for review!");
    } catch (err: any) {
      console.log(err);
      notify("Something went wrong", true);
    } finally {
      setComment("");
      setSending(false);
      recaptchaRef.current?.reset();
    }
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
        className="rounded-full w-16 h-16 object-cover md:w-12 md:h-12 xs:w-8 xs:h-8"
      />
      <form
        onSubmit={handleSubmit}
        className="flex flex-col ml-4 xs:ml-2 w-full"
      >
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          // type="text"
          ref={ref}
          placeholder="Write something..."
          rows={1}
          className="overflow-hidden border-b border-solid border-dark/25 dark:border-light/25 outline-none focus:border-dark focus:dark:border-light bg-light dark:bg-dark md:text-base xs:text-sm"
        />
        <ReCAPTCHA
          ref={recaptchaRef}
          size="invisible"
          sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''}
          onChange={onRecaptchaChange}
          badge="bottomright"
          theme="dark"
        />
        <button
          disabled={comment.trim() === ""}
          type="submit"
          className={`self-end py-2 px-4 text-light dark:text-dark rounded-xl mt-4 md:text-sm md:py-1 md:px-3 ${comment.trim() === "" ? "bg-dark/25 dark:bg-light/25" : "bg-dark opacity-90 dark:bg-light hover:opacity-100"}`}>
          {sending ? "Sending..." : "Comment"}
        </button>
      </form>
      <ToastContainer />
    </div>
  )
}

export default CommentForm