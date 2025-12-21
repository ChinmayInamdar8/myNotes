import Footer from "./components/common/Footer";
import Header from "./components/common/Header";
import Hero from "./components/mainPage/Hero";
import InfoCards from "./components/mainPage/InfoCards";
import InfoComopnent from "./components/mainPage/InfoComponent";
import Pricing from "./components/mainPage/Pricing";
import MainPageMarginRapper from "./components/marginRappers/MainPageMarginRapper";

export default function Home() {
  return (
    <div>
      <Header/>
      <Hero/>
      <MainPageMarginRapper>
        <InfoComopnent/>
        <Pricing/>
      </MainPageMarginRapper>
      <Footer/>
    </div>
  );
}
