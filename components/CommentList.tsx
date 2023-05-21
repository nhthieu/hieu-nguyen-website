"use client";

import { useEffect, useState, } from 'react'
import CommentItem from './CommentItem'
import { db } from '@/firebase';
import { collection, onSnapshot, query, where, orderBy, limit, getDocs, startAfter, QueryDocumentSnapshot, DocumentData } from 'firebase/firestore';
import { LoadingIcon } from './Icons';

type Props = {
  slug: string;
}

const batch = 10;

function CommentList({ slug }: Props) {
  const [comments, setComments] = useState<any[]>([]);
  const [isLoadingMore, setIsLoadingMore] = useState<boolean>(false);
  const [loadingComments, setLoadingComments] = useState<boolean>(true);
  const [lastVisible, setLastVisible] = useState<QueryDocumentSnapshot<DocumentData>>({} as QueryDocumentSnapshot<DocumentData>);

  // init load
  useEffect(() => {
    const commentsRef = collection(db, 'blog-comments');
    const q = query(commentsRef, where('slug', '==', slug), orderBy('createdAt', 'desc'), limit(batch));
    const unsubsribe = onSnapshot(q,
      (snapshot) => {
        const comments = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }))
        setLoadingComments(false);
        if (snapshot.docs.length > 0) {
          setLastVisible(snapshot.docs[snapshot.docs.length - 1]);
        }
        console.log(comments)
        setComments(comments);
      }, (error) => {
        console.log(error);
        alert(error.message);
      })

    return () => unsubsribe();
  }, [slug]);

  const loadMoreComments = async () => {
    if (!lastVisible) return;
    setIsLoadingMore(true);
    const commentsRef = collection(db, 'blog-comments');
    const q = query(
      commentsRef,
      where('slug', '==', slug),
      orderBy('createdAt', 'desc'),
      limit(batch),
      startAfter(lastVisible));
    const querySnapshot = await getDocs(q);
    const comments = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    }))
    console.log(comments);
    if (querySnapshot.docs.length > 0) {
      setLastVisible(querySnapshot.docs[querySnapshot.docs.length - 1]);
    }
    setComments((prev) => [...prev, ...comments]);
    setIsLoadingMore(false);
  }

  const showLoadMoreButton = lastVisible && comments.length % batch === 0 && comments.length > 0;

  return (
    <>
      {
        loadingComments ? (
          <div className='flex items-center justify-center w-full '>
            <h1 className='mr-3 italic font-light'>Loading comments</h1><LoadingIcon className='w-8 ' />
          </div>
        )
          :
          <ul>
            {
              comments.map((comment) => (
                <CommentItem
                  key={comment.id}
                  name={comment.name}
                  comment={comment.comment}
                  createdAt={comment.createdAt}
                  photoURL={comment.photoURL}
                // replies={[]}
                />
              ))
            }
          </ul>
      }

      {
        showLoadMoreButton && (
          <div className='w-full flex items-center justify-center mt-16'>
            <button
              onClick={loadMoreComments}
              className="text-light dark:text-dark font-medium text-sm p-4 bg-dark dark:bg-light rounded-xl xs:text-xs">
              {
                isLoadingMore ? 'Loading...' : 'Load more'
              }
            </button>
          </div>
        )
      }
    </>
  )
}

export default CommentList