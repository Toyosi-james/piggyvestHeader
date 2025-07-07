import React from "react";
import { BsArrowReturnRight } from "react-icons/bs";
import tSavings from "../../../assets/targetsavings.avif";
import safeLock from "../../../assets/safelock.png";
import piggBank from "../../../assets/Piggybank.png";
import houseMoney from "../../../assets/housemoney.png";
import flexNaira from "../../../assets/flex naira.avif";
import flexDollar from "../../../assets/flex dollar.avif";
import { useState } from "react";

const Savings = () => {
  const [activeHoverItem, setActiveHoverItem] = useState(-1);
  const piggy = [
    {
      title: "Automated Saving",
      info: "Build a dedicated savings faster on your terms, automatically or manually.",
      btnTitle: "piggy bank",
      color: "#003399",
      image: piggBank,
      hoverBg: "#0f60d6",
    },
    {
      title: "Fixed Savings",
      info: "Lock Money away for a fixed duration without having access to it until maturity.",
      btnTitle: "safe Lock",
      color: "#3296ff",
      image: safeLock,
      hoverBg: "#2295f2",
    },
    {
      title: "Goal-oriented Savings",
      info: "Reach all your savings goals faster, Save towards multiple goals on your own or with a group",
      btnTitle: "Target Savings",
      color: "#069b40",
      image: tSavings,
      height: "210px",
      hoverBg: "#069b40",
    },
    {
      title: "Flex Naira",
      info: "Save,transfer,manage,organise and withdraw your money at anytime.",
      btnTitle: "Flex Naira",
      color: "#e5288e",
      image: flexNaira,
      hoverBg: "#e5489b",
    },
    {
      title: "Flex Dollar",
      info: "Save and grow your money in foreign currencies such as Dollars",
      btnTitle: "Flex Dollar",
      color: "#0c1825",
      image: flexDollar,
      hoverBg: "#0c1825",
    },
    {
      title: "House Money",
      info: "Plan for your rent and household expenses",
      btnTitle: "House Money",
      color: "#ff783c",
      image: houseMoney,
      height: "270px",
      hoverBg: "#ff783c",
    },
  ];
  return (
    <div className="my-12 flex flex-col items-center">
      <section className="text-center max-tablet:px-20 ">
        <h1 className="text-5xl font-bold m-6 text-[#122231] ">
          Many Ways to build your savings
        </h1>
        <p className="text-2xl mb-14 text-[#122231]">
          Earn 12%-20% when you save with any of these Piggyvest plans.{" "}
        </p>
      </section>
      <section className="flex justify-center wrap items-center max-w-[1200px] flex-wrap ">
        {piggy?.map((data, i) => (
          <main
            style={{
              backgroundColor: activeHoverItem !== i ? "#fff" : data.hoverBg,
            }}
            onMouseOver={() => setActiveHoverItem(i)}
            onMouseLeave={() => setActiveHoverItem(-1)}
            className={` ${activeHoverItem === i ? "activebg":""} prop-card  h-[400px] w-[500px] m-9 p-10 rounded-4xl`}
            key={i}
          >
            <h1
              className="text-4xl font-bold mb-5"
              style={{ color: `${data.color}` }}
            >
              {data.title}
            </h1>
            <p className="hover:text-white text-[20px] text-[#101318] w-[400px] ">
              {data.info}
            </p>
            {/* <img src={data.image} alt="" /> */}
            <div
              className="flex  justify-between text-[20px]  "
              style={{ color: `${data.color}` }}
            >
              <div className="flex items-center gap-3.5 min-h-60 ">
                <BsArrowReturnRight size={25} />
                <p>{data.btnTitle} </p>
              </div>
              <img
                style={{ height: `${data.height}`  } }
                className="w-[240px] min-h-0   "
                src={data.image}
                alt=""
              />
            </div>
          </main>
        ))}
      </section>
    </div>
  );
};

export default Savings;
