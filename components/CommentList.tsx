"use client";

import { useEffect, useState } from 'react'
import CommentItem from './CommentItem'
import { db } from '@/firebase';
import { collection, onSnapshot, query, where, orderBy, limit, getDocs } from 'firebase/firestore';

type Props = {
  slug: string;
}

function CommentList({ slug }: Props) {
  const [comments, setComments] = useState<any[]>([]);
  useEffect(() => {
    const commentsRef = collection(db, 'blog-comments');
    const q = query(commentsRef, where('slug', '==', slug), orderBy('createdAt', 'desc'), limit(10));
    const unsubsribe = onSnapshot(q, (snapshot) => {
      const comments = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }))
      setComments(comments)
    })
    console.log(comments)
    return () => unsubsribe();
    // getDocs(q).then((snapshot) => {
    //   const comments = snapshot.docs.map((doc) => ({
    //     id: doc.id,
    //     ...doc.data()
    //   }))
    //   console.log(comments);
    //   setComments(comments)
    // }
    // )
  }, [slug]);

  return (
    <ul>
      {
        comments.map((comment) => (
          <CommentItem
            key={comment.id}
            name={comment.name}
            comment={comment.comment}
            createdAt={comment.createdAt}
            photoURL={comment.photoURL}
          />
        ))
      }
    </ul>
  )
}

export default CommentList