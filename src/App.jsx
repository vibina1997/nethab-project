import "./App.css";
import CategoryMenu from "./assets/Homepage/Components/CategoryMenu";
import Navbar from "./assets/Homepage/Components/Navbar";
import BannerSlider from "./assets/Homepage/BannerSlider";
import PopularSection from "./assets/Homepage/Components/PopularSection";
import HighlightSection from "./assets/Homepage/Components/HighlightSection";
import CollectionsSection from "./assets/Homepage/Components/CollectionsSection";
import HeroBanner from "./assets/Homepage/Components/HeroBanner";
import NeedsSelection from "./assets/Homepage/Components/NeedsSelection";
import SkinAnalysisBanner from "./assets/Homepage/Components/SkinAnalysisBanner";
import VideoBanner from "./assets/Homepage/Components/VideoBanner";
import ProductVideoSection from "./assets/Homepage/Components/ProductVideoSection";
import SliderSection from "./assets/Homepage/Components/SliderSection";
import BestSellers from "./assets/Homepage/Components/BestSellers";
import SummerCare from "./assets/Homepage/Components/SummerCare";
import Ingredients from "./assets/Homepage/Components/Ingredients";

function App() {
  return (
    <div>
      <Navbar />
      <CategoryMenu />
      <BannerSlider />
      <PopularSection />
      <HighlightSection />  
      <CollectionsSection />  
      <HeroBanner />
      <NeedsSelection />
      <SkinAnalysisBanner />
      <VideoBanner />
      <ProductVideoSection />
      <SliderSection />
      <BestSellers /> 
      <SummerCare />
   <Ingredients />
    </div>
  );
}

export default App;