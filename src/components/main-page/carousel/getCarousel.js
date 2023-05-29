import { db } from "../../FirebaseAgrodrone/database";
import { getDocs, collection } from "firebase/firestore";

export const getCarousel = async () => {
  const carouselCollection = collection(db, "carousel");
  const carouselDocsRef = await getDocs(carouselCollection);
  const carouselDocs = carouselDocsRef.docs;
  const carousel = carouselDocs.map((doc) => {
    return { ...doc.data(), id: doc.id};
  })
  return carousel;
}