"use client";

import Banner, { Categories } from "./Banner";
import DealOfTheWeek from "./DealoftheWeek";
import FruitProduct from "./FruitProduct";

const Home = () => {
  return (
    <div>
      <Banner />
      <Categories />
      <DealOfTheWeek />
      <FruitProduct />
    </div>
  );
};

export default Home;
