import { useLocation } from "react-router-dom";
import { datas } from "../../src/data";
import ListingCard from "../component/ListingCard";
import React from "react";

const Home = () => {
  const location = useLocation(); 
  const isMainPage = location.pathname === "/";
  return (
    <div className="max-w-[2520px] mx-auto xl:px-20 md:px-10 sm:px-2 px-4">
      <div className={`grid grid-cols-1 gap-8 ${isMainPage ? 'pt-[200px]' : 'pt-[100px]'} sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6`}>
        {datas.map((data) => (
          <ListingCard key={data.id} data={data} />
        ))}
      </div>
    </div>
  );
};

export default Home;
