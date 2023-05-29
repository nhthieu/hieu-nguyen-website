---
  title: "How I built the comment section"
  description: "All the details about how I built the comment section for the blogs"
  date: "2023-05-29"
---

Thanks for tuning in! This is an update to my previous blog post [About The Website](/blog/about-the-website). This time, I will be explaining all the details on how I implemented the comment section for the blogs, what technologies I used and why I chose them, with some code snippets here and there. This will be a long one, so grab a cup of coffee and let's get started!

## The problem

As I mentioned in [my previous blog](/blog/about-the-website) that I wanted to add a comment section at the end of the blogs. This is a pretty common feature that you'll probably find everywhere nowadays and personally, I think it's a great way for the readers to be able to interact and share their thoughts with the author, also for not letting the blog posts become a one-way communication. I have read plenty of articles regarding this feature and found that there are a few ways to implement it:

- [ ] **Implement the backend from scratch:** Since I need somewhere to store the comments and also to query them later, I need to have a backend for this. I can use any backend framework that I'm familiar with, such as **Express.js**. However, this is not a very good option since it will take time to build and maintain the server, not to mention database configurations, concurrency issues, security issues, hosting costs, and all that good stuff. I'm not saying that this is a bad option, but I just don't think it's worth the time and effort for a simple feature like this. Also, even if I did decide to build it myself, it would not be as good and secure as the ones that are already out there.

- [ ] **Using a BaaS (Backend as a Service):** This is probably the easiest option to go for since I don't have to worry about all the jargon that I mentioned above. As the legendary [Fireship](https://www.youtube.com/@Fireship) once said: "I'm all about that Baas, 'bout that Baas, 'bout that Firebase, NoSQL" :v. For those who are not familiar with this term, in a nutshell, it's a cloud service model in which developers outsource all the behind-the-scenes aspects of a web or mobile application so that they only have to write and maintain the frontend. Sounds like a perfect option for me because honestly I'm too lazy to build a proper backend. Out of all the BaaS providers out there, I decided to go with [Firebase](https://firebase.google.com) since it's probably the most straightforward and beginner-friendly, plus its free tier is very generous with 20k writes/deletion and 50k reads per day. One downside is that I have to use a NoSQL database. Coming from a relational database background, this is a new concept for me and it took me some time to get used to. However, I think it's a good thing since I can learn something new along the way.

![nope](https://i.imgflip.com/7nhbgo.jpg " I ain't got time for that!")

## The implementation

### Registering a Firebase project

First thing first, I need to create a Firebase project. I won't go into details on how to do this since there are plenty of tutorials out there that can help you with this. After creating the project, add an app to it (I'm choosing Web since I'm building a web app). Then, the Firebase console will prompt you to add the Firebase SDK to your app: 

```
npm install firebase
```

I then created a new file called `firebase.ts` (or whatever you want to name it), and added the following code to it:

```ts
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider, getAuth } from 'firebase/auth';
import { initializeFirestore, persistentLocalCache } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: [your_api_key],
  authDomain: [your_auth_domain],
  projectId: [your_project_id],
  storageBucket: [your_storage_bucket],
  messagingSenderId: [your_messaging_sender_id],
  appId: [your_app_id],
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Google provider for authentication
const provider = new GoogleAuthProvider();
const auth = getAuth(app);
// Initialize firestore with caching
const db = initializeFirestore(app, {
  localCache: persistentLocalCache(),
})

// Export the variables for later use
export { app, provider, auth, db };
```

Now, I can import these variables anywhere in my project and use them to interact with the Firebase services.

### Registering Authentication and Firestore

As the name suggests, Authentication is used to authenticate users and Firestore is used to store data. I'm going to use both of these services in my project, so I need to enable them in the Firebase console. I'm going to use Google authentication for this project since it's the easiest to set up and it's also the most common one. 

![authentication](/images/blogs/how-i-built-the-comment-section/1.png "Authentication")

After enabling the authentication method, start a new collection in the **Firestore** app, named it `blog-comments` (or whatever you prefer) and add a new document to it. The document ID will be auto-generated, and the document will have the following fields:

- `name`: The name of the commenter
- `email`: The email of the commenter
- `comment`: The comment itself
- `createdAt`: The timestamp of when the comment was created
- `photoURL`: The photo URL of the commenter
- `uid`: The unique ID of the commenter
- `slug`: The slug of the blog post that the comment belongs to
- `verified`: A boolean value indicating whether the comment has been verified by the author or not

It will look like this.

![firestore](/images/blogs/how-i-built-the-comment-section/2.png "Firestore")

The `replies` field is only temporary to store the replies to the comments. For now, I'm not going to use it since I haven't implemented the reply feature yet. I will get back to this later.

### Implementing the comment section

Now that I have the backend set up, I can start implementing the comment section. For the codes below, I'm removing the `className` for simplicity since this is used for styling only. You can style it however you want.

#### Comment section UI

A good thing about React is that I can break down the UI into smaller components and reuse them. I'm going to do the same thing here. First, I created a new component called `CommentSection.tsx` and added the following code to it:

```tsx
import { User } from 'firebase/auth';

type Props = {
  slug: string;
  className?: string;
}

function CommentSection({ slug, className }: Props) {
  const [user, setUser] = useState<User | null>(auth.currentUser);

  return (
    <div>
      <div>
        <h1 >Comments</h1>
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
```

As you can see, this component is responsible for rendering the comment form and the comment list. The `slug` prop is used to identify which blog post the comment belongs to. The `user` state is used to store the current user. If the user is logged in, the comment form will be rendered, otherwise, the authentication component will be rendered. The `setUser` prop is used to update the `user` state. I will get back to this later.

#### Authentication component

The authentication component is responsible for rendering the "Sign in with Google" button and handling the authentication process. I created a new component called `Auth.tsx`. The `onAuthStateChanged` is the recommended way by Google to listen for user login/logout by setting an observer on the Auth object:

```tsx
import { User } from 'firebase/auth';

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

  // other codes
  return (
    // tsx
  )
}
```

As [documented by Google](https://firebase.google.com/docs/auth/web/manage-users), by using an observer, it ensures that the Auth object isn't in an intermediate state—such as initialization—when you get the current user. In addition, I also pass in the `setUser` function as props to update the `user` state in the `CommentSection` component. The `unsubscribe` function is used to unsubscribe the observer when the component unmounts. This is to prevent memory leaks.

Since I use sign in with Google, Firebase provides a built-in function called `signInWithPopup` to handle the authentication process. I added the following code to the `Auth` component:

```tsx
  const signInWithGoogle = () => {
    setPersistence(auth, browserSessionPersistence)
      .then(() => {
        return signInWithPopup(auth, provider);
      })
      .catch((err) => {
        console.log(err.code, err.message)
      })
  }
```

The `browserSessionPersistence` is used to persist the user's state in the browser session. This is to prevent the user from being logged out when the page refreshes. The `signInWithPopup` function will open a popup window for the user to sign in with their Google account. After the user signs in, the `onAuthStateChanged` observer will be triggered and the `user` state will be updated.

#### Comment form

After the user is logged in, the comment form will be rendered. I created a new component called `CommentForm.tsx` and added the following code to it:

```tsx
"use client";

import { User } from "firebase/auth";
import { useEffect, useState, useRef, createRef } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import Image from "next/image";
import defaultImage from "@/public/images/astronaut.jpg"
import ReCAPTCHA from "react-google-recaptcha";

type Props = {
  user: User;
  slug: string;
}

function CommentForm({ user, slug }: Props) {
  return (
    <div>
      <Image
        src={user.photoURL || defaultImage}
        alt="Avatar"
        width={500}
        height={500}
      />
      <form onSubmit={handleSubmit}>
        <textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          // type="text"
          ref={ref}
          placeholder="Write something..."
          rows={1}
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
        >
          {sending ? "Sending..." : "Comment"}
        </button>
      </form>
    </div>
  )
}

export default CommentForm
```

Don't worry too much about the codes, essentially, this component will render a comment submitting form similar to the **Youtube comment section** (inspired :v). You can login and try it out below.

The `user` prop, passed down by the `CommentSection.tsx` component, is used to get the user's information such as name, email, and photo URL. The `slug` prop is used to identify which blog post the comment belongs to.

To prevent Google from charging me 1000$ for write operations (spamming), I implemented reCAPTCHA to verify that the user is not a robot. I'm using the [react-google-recaptcha](https://www.npmjs.com/package/react-google-recaptcha) package for this. I'm not going to go into details on how to set this up since it's pretty straightforward. You can check out the [documentation](https://www.npmjs.com/package/react-google-recaptcha) for more information and also the [Google's reCaptcha documentation](https://developers.google.com/recaptcha/intro) to setup the reCaptcha keys. Although reCaptcha is not 100% foolproof, it's better than nothing. Still, I hope that you guys won't spam me :v.

When all things checked out, the user can submit the comment by clicking on the **Comment** button. The `handleSubmit` function is used to handle the form submission:

```tsx
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    // verify the reCaptcha
    recaptchaRef.current?.execute();
  }

  // reCaptcha callback when the challenge is verified
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
```

The comments all have `verified` set to `false` by default. This is for moderation purposes, well by me of course :v. They will then be sent to Firestore via the `addDoc` function from the Firebase's SDK. 

#### Comment list

This is probably the most complicated part of the implementation because I have to deal with pagination, lazy loading and caching so that Firebase doesn't charge me 5000$ for read operations :v. Don't worry, I will try to explain it as simple as possible.

First, I created a new component called `CommentList.tsx` and added the following code to it:

```tsx
type Props = {
  slug: string;
}

const batch = 10;

function CommentList({ slug }: Props) {
  // other previous codes

  return (
    <div ref={ref}>
      {
        loadingComments ? (
          <div>
            <h1>Loading comments</h1><LoadingIcon />
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
          <div>
            <button onClick={loadMoreComments}>
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
```

I use [framer-motion](https://www.framer.com/motion/) for all the animations in the website, and the library comes in handy for **lazy loading** as well, with the `useInView` hook. I added the following code to the `CommentList` component:

```tsx
import { useInView } from 'framer-motion';

function CommentList({ slug }: Props) {
  // get the reference to the div holding the comments
  const ref = useRef<HTMLDivElement>(null);
  // check if the div is in view
  // once is set to true to unmount the observer after the first time it's in view
  const isInView = useInView(ref, { once: true });
  // other codes
}
```

and then I just run the logic to first load the comments when the div is in view:

```tsx
  // initial load
  useEffect(() => {
    if (isInView) {
      // get the ref to the collection
      const commentsRef = collection(db, 'blog-comments');
      // create a query to get the comments
      // firestore will prompt to create an index for this query
      // click on the link to create the index
      // I limit the query to 10 documents per batch
      const q = query(
        commentsRef,
        where('slug', '==', slug),
        where('verified', '==', true),
        orderBy('createdAt', 'desc'),
        limit(batch)
      );
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
```

The code above utilizes the `onSnapshot` function from the Firebase's SDK to listen for changes in the database in real-time. The `onSnapshot` function returns an `unsubscribe` function that I can use to unsubscribe the listener when the component unmounts to prevent memory leaks. You can learn more about real-time data fetching [here](https://firebase.google.com/docs/firestore/query-data/listen).

The `setLastVisible` function is used to store the last visible document in the list (use the last document in a batch as the start of a cursor for the next batch, as documented [here](https://firebase.google.com/docs/firestore/query-data/query-cursors)). This is used for pagination. After all the comments in a batch are loaded, users can click on the **Load more** button to load the next batch of comments.

```ts
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
      // get the next batch of comments from cache
      querySnapshot = await getDocsFromCache(q);
      console.log('from cache')
    } catch (err) {
      // if there's no cache, get the next batch of comments from the server
      querySnapshot = await getDocs(q);
      console.log('from server')
    } finally {
      const comments = querySnapshot.docs.map((doc: DocumentData) => ({
        id: doc.id,
        ...doc.data()
      }))
      setIsShowLoadMoreButton(comments.length > 0)
      if (querySnapshot.docs.length > 0) {
        // set the last visible document for the next batch
        setLastVisible(querySnapshot.docs[querySnapshot.docs.length - 1]);
      }
      // append the next batch of comments to the current comments and render them
      setComments((prev) => [...prev, ...comments]);
      setIsLoadingMore(false);
    }
  }
```

For **caching**, since I configured Firestore to persist the data locally, this enables offline support and Firestore will automatically cache the data for me. The first time I attach the snapshot listener, Firestore will access the Firestore server to download all of the results and provide me with a query snapshot (this will count as read operations). Since I'm using offline persistence, if I attach the same listener a second time, the listener will be fired immediately with the results from the cache and not from the Firestore server. If there is a change to the snapshot (created, modified or removed) then the same query will be executed via Firestore server and I will be charge for the first batch I read, but the rest will remained cached.

```ts
// firebase.ts
const db = initializeFirestore(app, {
  localCache: persistentLocalCache(),
})
```

## Conclusion

Well that's it! I hope you guys find this blog helpful. I know it's a bit long but I tried to explain everything as simple as possible. There are still a lot of things that I haven't covered in this blog, you can check out the source code [here](https://github.com/nhthieu/hieu-nguyen-website) if you want to learn more. If you have any questions or suggestions, feel free to leave a comment below. Thanks for reading and see you in the next blog!

![thankyou](https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExZTc4MGRiYTJlMGM1ZDVmYTRjOTlhZGNlNGZkNGJjYWY1MGUyODlhMiZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/ZfK4cXKJTTay1Ava29/giphy.gif "love!!")