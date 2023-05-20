// import { Timestamp } from "firebase/firestore";

interface PostData {
  data: {
    title: string;
    description?: string;
    slug: string;
    date: string;
  };
  content: string;
}

interface ProfileData {
  skills: [
    {
      name: string;
      proficiency?: number;
      link: string;
      image: string;
    }
  ]
}