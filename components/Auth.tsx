"use client";

import { auth, provider } from "@/firebase"
import { setPersistence, signInWithPopup, browserSessionPersistence } from "firebase/auth"

type Props = {}

function Auth({}: Props) {
  const signInWithGoogle = () => {
    setPersistence(auth, browserSessionPersistence)
      .then(() => {
        return signInWithPopup(auth, provider);
      })
      .catch((err) => {
        console.log(err.code, err.message)
      })
  }

  return (
    <div className="flex items-center mb-12">
      <button
        className="p-4 bg-dark dark:bg-light rounded-md text-light dark:text-dark font-bold md:text-sm sm:text-xs "
        onClick={signInWithGoogle}
      >
        Sign in with Google to comment
      </button>
    </div>
  )
}

export default Auth