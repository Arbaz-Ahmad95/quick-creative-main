
import HeroBanner from "./HeroBanner";
import HeroTop from "./HeroTop";
import QuickCreativeBanner from "./QuickCreativeBanner";
import ServicesTree from "./ServicesTree";

export default function Hero() {
  return (
    <>
      {/* HERO SECTION */}
         <HeroTop/>
      {/* QUICK CREATIVE SECTION */}
      <QuickCreativeBanner/>

      <ServicesTree />
      <HeroBanner/>
      
    </>
  );
}
