"use client";

import {
  EnvironmentFilled,
  FacebookFilled,
  InstagramFilled,
} from "@ant-design/icons";
import Link from "next/link";
import React from "react";

const Home = () => {
  return (
    <div>
      <div className="bg-green-900">
        <div className="flex justify-between items-center max-w-[1480px] px-4 py-3 mx-auto ">
          <div>
            <EnvironmentFilled style={{ fontSize: 16, color: "white" }} />
            <span className=" text-base text-white ml-2">Location</span>
          </div>
          <div className="flex gap-4">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookFilled style={{ fontSize: 18, color: "white" }} />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramFilled style={{ fontSize: 18, color: "white" }} />
            </a>
          </div>
        </div>
      </div>
      <div>
        <p>Welcome to the Home page</p>
      </div>
    </div>
  );
};

export default Home;
