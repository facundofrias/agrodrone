import Carousel from "../main-page/carousel/Carousel";
import ProductsList from "../main-page/products-list/ProductsList";
import AdvantagesSection from "./advantages-section/AdvantagesSection";

const Main = () => {
  return (
    <main>
      <AdvantagesSection />
      <ProductsList />
      <Carousel />
    </main>
  );
}

export default Main;