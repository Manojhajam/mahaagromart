"use client";

import Banner, { Categories } from "./Banner";
import DealOfTheWeek from "./DealoftheWeek";

const Home = () => {
  return (
    <div>
      <Banner />
      <Categories />
      <DealOfTheWeek />
    </div>
  );
};

export default Home;
