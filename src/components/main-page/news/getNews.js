import { db } from "../../FirebaseAgrodrone/database";
import { getDocs, collection } from "firebase/firestore";

export const getNews = async () => {
  const newsCollection = collection(db, "news");
  const newsDocsRef = await getDocs(newsCollection);
  const newDocs = newsDocsRef.docs;
  const news = newDocs.map((doc) => {
    return { ...doc.data(), id: doc.id};
  })
  return news;
}