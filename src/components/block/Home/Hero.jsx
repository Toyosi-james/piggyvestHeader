import React from "react";
import { IoFlowerSharp } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";
import Button from "../../reusable/Button";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import heroImage from "../../../assets/piggy screenshot.png";

const Hero = () => {
  return (
    <div className="min-h-[85vh]">
      <div className="max-w-[1280px] h-full px-16 mx-auto flex justify-between items-center pt-[150px] max-tablet:flex-col ">
        <section className="max-w-[400px] max-tablet:flex-col max-tablet:items-center max-tablet:text-center max-tablet:max-w-[350px] max-tablet:mb-6 max-tablet:justify-center  ">
          <main className="flex w-[350px] bg-[#0089ff] h-12 items-center gap-2 rounded-3xl text-white font-bold px-1 mb-6 mt-12 hover:bg-[#122231] cursor-pointer max-tablet:justify-center ">
            <IoFlowerSharp  size={30} color="#fce104" />
            <span>The 2024 PiggyVest Savings Report</span>
            <MdKeyboardArrowRight size={30} color="lightblue"/>
          </main>
          <h1 className="font-bold text-[45px] leading-12 mb-6 text-[#122231]  ">The Better Way to Save & Invest</h1>
          <p className="text-[19px] mb-5 text-[#485260] ">
            Piggyvest helps over 5 million customers achieve their financial
            goals by helping them save and invest with ease.{" "}
          </p>
          <main className="flex gap-3 max-tablet:items-center max-tablet:justify-center">
            <Button
              iconTitle={<FaApple  />}
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
        <section className="max-w-[600px] max-tablet:mt-10 overflow-hidden w-fit">
          <img className="w-full bounce-slow " src={heroImage} alt="" />
        </section>
      </div>
    </div>
  );
};

export default Hero;
