import Accessories from "../components/Accessories";
import Featured_products from "../components/Featured_products";
import Hero_section from "../components/Hero_section";
import New_arrival from "../components/New_arrival";
import Special_offer from "../components/Special _offer";
import Testimonials from "../components/Testimonials";

export default function Home() {
  return (
    <>
      <Hero_section/>
      <Featured_products/>
      <Accessories/>
      <New_arrival/>
      <Special_offer/>
      <Testimonials/>
    </>
  );
}
