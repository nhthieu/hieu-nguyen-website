"use client";

import { useEffect, useState, useRef } from 'react'
import CommentItem from './CommentItem'
import { db } from '@/lib/firebase';
import { collection, onSnapshot, query, where, orderBy, limit, getDocs, startAfter, QueryDocumentSnapshot, DocumentData, getDocsFromCache } from 'firebase/firestore';
import { LoadingIcon } from './Icons';
import { useInView } from 'framer-motion';

type Props = {
  slug: string;
}

const batch = 10;

function CommentList({ slug }: Props) {
  const [comments, setComments] = useState<any[]>([]);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const [isLoadingMore, setIsLoadingMore] = useState<boolean>(false);
  const [loadingComments, setLoadingComments] = useState<boolean>(true);
  const [isShowLoadMoreButton, setIsShowLoadMoreButton] = useState<boolean>(false);
  const [lastVisible, setLastVisible] = useState<QueryDocumentSnapshot<DocumentData>>({} as QueryDocumentSnapshot<DocumentData>);

  // init load
  useEffect(() => {
    if (isInView) {
      const commentsRef = collection(db, 'blog-comments');
      const q = query(commentsRef, where('slug', '==', slug), where('verified', '==', true), orderBy('createdAt', 'desc'), limit(batch));
      const unsubsribe = onSnapshot(q,
        (snapshot) => {
          const comments = snapshot.docs.map((doc) => {
            doc.metadata.fromCache ? console.log('from cache') : console.log('from server');
            return {
              id: doc.id,
              ...doc.data()
            }
          })
          
          setLoadingComments(false);
          if (snapshot.docs.length > 0) {
            setLastVisible(snapshot.docs[snapshot.docs.length - 1]);
            setIsShowLoadMoreButton(snapshot.docs.length >= batch);
          }
          setComments(comments);
        }, (error) => {
          console.log(error);
          alert(error.message);
        })

      return () => { unsubsribe(); console.log('realtime listener unsubscribed') }
    }
  }, [slug, isInView]);

  const loadMoreComments = async () => {
    if (!lastVisible) return;
    setIsLoadingMore(true);
    const commentsRef = collection(db, 'blog-comments');
    const q = query(
      commentsRef,
      where('slug', '==', slug),
      where('verified', '==', true),
      orderBy('createdAt', 'desc'),
      limit(batch),
      startAfter(lastVisible)
    );
    let querySnapshot = {} as any;
    try {
      querySnapshot = await getDocsFromCache(q);
      console.log('from cache')
    } catch (err) {
      querySnapshot = await getDocs(q);
      console.log('from server')
    } finally {
      const comments = querySnapshot.docs.map((doc: DocumentData) => ({
        id: doc.id,
        ...doc.data()
      }))
      setIsShowLoadMoreButton(comments.length > 0)
      if (querySnapshot.docs.length > 0) {
        setLastVisible(querySnapshot.docs[querySnapshot.docs.length - 1]);
      }
      setComments((prev) => [...prev, ...comments]);
      setIsLoadingMore(false);
    }
  }

  const showLoadMoreButton = isShowLoadMoreButton && lastVisible;

  return (
    <div ref={ref}>
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
    </div>
  )
}

export default CommentList