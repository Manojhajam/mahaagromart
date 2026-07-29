"use client";

import Banner, { Categories } from "./Banner";
import DealOfTheWeek from "./DealoftheWeek";
import ProductShowcase from "./ProductShowcase";

const Home = () => {
  return (
    <div>
      <Banner />
      <Categories />
      <DealOfTheWeek />
      <ProductShowcase />
    </div>
  );
};

export default Home;
