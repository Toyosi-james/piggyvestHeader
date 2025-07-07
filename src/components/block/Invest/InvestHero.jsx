import React from "react";
import Button from "../../reusable/Button";
import { FaApple, FaGooglePlay } from "react-icons/fa";

const InvestHero = () => {
  return (
    <div className=" pt-[150px]  min-h-[85vh] flex justify-between items-center px-20 bg-[#7913e5] max-tablet:flex-col max-tablet:px-13 max-tablet:justify-center max-tablet:pt-[200px]">
      <section className="flex flex-col max-tablet:justify-center max-tablet:items-center">
        <h1 className="text-[50px] w-[750px] font-bold text-white mb-3 max-tablet:w-[400px] max-tablet:text-center">
          Invest on the go
        </h1>
        <main className="text-[17px] text-[#7913e5] bg-white w-[200px] p-2 text-center rounded-4xl mb-6 ">
          <span>Up to 35% returns</span>
        </main>
        <p className="text-white text-[23px]">
          Invest securely and confidently on the go.
        </p>
        <p className="text-white text-[23px] mb-6">
          Up to 35% returns, 6-12 month duration.
        </p>
        <main className="flex gap-3 max-tablet:items-center max-tablet:justify-center max-tablet:mb-10">
          <Button
            iconTitle={<FaApple />}
            name="Get on iphone"
            bgColor="#122231"
            textColor="white"
            display="flex"
            align="center"
            gap="5px"
            flex="row-reverse"
          />
          <Button
            name="Get on Android"
            bgColor="#122231"
            textColor="White"
            iconTitle={<FaGooglePlay />}
            display="flex"
            align="center"
            gap="5px"
            flex="row-reverse"
          />
        </main>
      </section>
      <img className="w-[450px] " src="./invest.png" alt="" />
      <section></section>
    </div>
  );
};

export default InvestHero;
