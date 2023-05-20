"use client";

import { useState, useEffect } from 'react';
import CommentForm from './CommentForm'
import CommentList from './CommentList';
import Auth from './Auth';
import { auth } from '@/firebase';
import { User, onAuthStateChanged } from 'firebase/auth';
import Cookies from 'js-cookie';

type Props = {
  slug: string;
  className?: string;
}

function CommentSection({ slug, className }: Props) {
  const [user, setUser] = useState<User | null>(auth.currentUser);
  // listen for user login/logout
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUser(user)
    } else {
      setUser(null)
    }
  })

  return (
    <div className={`${className}`}>
      <h1 className="text-4xl font-bold mb-8">Leave a comment!</h1>
      {
        user ? <CommentForm user={user} slug={slug}/> : <Auth setUser={setUser} />
      }
      {/* <CommentForm /> */}
      <CommentList slug={slug}/>
    </div>
  )
}

export default CommentSection