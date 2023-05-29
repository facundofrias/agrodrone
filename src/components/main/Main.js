import Carousel from "../main-page/carousel/Carousel";
import News from "../main-page/news/News";
import Newsletter from "../main-page/newsletter/Newsletter";
import ProductsList from "../main-page/products-list/ProductsList";
import AdvantagesSection from "./advantages-section/AdvantagesSection";

const Main = () => {
  return (
    <main>
      <AdvantagesSection />
      <ProductsList />
      <Carousel />
      <News />
      <Newsletter />
    </main>
  );
}

export default Main;