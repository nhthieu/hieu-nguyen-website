"use client";

import { useEffect, useState } from 'react';
import CommentForm from './CommentForm'
import CommentList from './CommentList';
import Auth from './Auth';
import { auth } from '@/firebase';
import { User } from 'firebase/auth';

type Props = {
  slug: string;
  className?: string;
}

function CommentSection({ slug, className }: Props) {
  const [user, setUser] = useState<User | null>(auth.currentUser);
  
  return (
    <div>
      <div className={`${className} border-t border-dark/10 dark:border-light/10 border-solid pt-12 flex flex-col items-center mb-8`}>
        <h1 className="text-4xl font-bold mb-8 md:text-3xl">Comments</h1>
        {
          user ?
            <CommentForm user={user} slug={slug} />
            :
            <Auth setUser={setUser}/>
        }
      </div>
      <CommentList slug={slug} />
    </div>
  )
}

export default CommentSection