"use client";

import { auth, provider } from "@/firebase"
import { setPersistence, signInWithPopup, browserSessionPersistence, signInWithRedirect, signInWithCredential, inMemoryPersistence } from "firebase/auth"

type Props = {}

function Auth({}: Props) {
  const signInWithGoogle = () => {
    setPersistence(auth, inMemoryPersistence)
      .then(() => {
        return signInWithRedirect(auth, provider);
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
      {/* <h1 className="ml-4 font-medium text-lg md:text-base sm:text-sm">Sign in with Google to comment</h1> */}
    </div>
  )
}

export default Auth