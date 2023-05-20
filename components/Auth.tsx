"use client";

import { auth, provider } from "@/firebase"
import { User, setPersistence, signInWithPopup, browserSessionPersistence } from "firebase/auth"
import Cookies from "js-cookie";

type Props = {
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
}

function Auth({ setUser }: Props) {
  const signInWithGoogle = () => {
    setPersistence(auth, browserSessionPersistence)
      .then(() => {
        return signInWithPopup(auth, provider)
      })
      .catch((err) => {
        console.log(err.code, err.message)
        alert(err.message)
      })
  }

  return (
    <div className="flex items-center mb-12">
      <button
        className="p-4 bg-dark dark:bg-light rounded-lg text-light dark:text-dark font-bold"
        onClick={signInWithGoogle}
      >
        Sign in
      </button>
      <h1 className="ml-4 font-medium text-lg">Sign in with Google to comment</h1>
    </div>
  )
}

export default Auth