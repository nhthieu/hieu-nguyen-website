"use client";

import { auth, provider } from "@/lib/firebase"
import { setPersistence, signInWithPopup, browserSessionPersistence, User, onAuthStateChanged } from "firebase/auth"
import { useEffect } from "react";

type Props = {
  setUser: React.Dispatch<React.SetStateAction<User | null>>
}

function Auth({ setUser }: Props) {
  // listen for user login/logout
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      }
    })
    return () => { unsubscribe(); console.log('listen for sign in unsubscribed') }
  }, [setUser])

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