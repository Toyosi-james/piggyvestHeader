import React from "react";

const Footer = () => {
  return (
    <>
    <div className="px-20 flex justify-between h-[50vh] text-[#122231] max-tablet:p-13 max-tablet:flex-col ">
      
        <div >
          <img className="mb-7" src="./piggyvest logo.svg" alt="" />
          <img className="w-[150px]" src="./piggy compliance.avif" alt="" />
        </div>
        <div className="flex gap-20 max-tablet:flex-col max-tablet:gap-8 max-tablet:mt-3.5">
          <div  >
            <h4 className="mb-3 font-medium">Products</h4>
            <p className="mb-3">Piggybank</p>
            <p className="mb-3">Invest</p>
            <p className="mb-3"> Safelock</p>
            <p className="mb-3"> Target Savings</p>
            <p className="mb-3"> Flex Naira</p>
            <p className="mb-3">Flex Dollar</p>
          </div>
          <div>
            <h4 className="mb-3 font-medium"> Company</h4>
            <p className="mb-3"> About</p>
            <p className="mb-3"> FAQs</p>
            <p className="mb-3">Blog</p>
          </div>
          <div>
            <h4 className="mb-3 font-medium"> Legal</h4>
            <p className="mb-3"> Terms</p>
            <p className="mb-3"> Privacy</p>
            <p className="mb-3"> Security </p>
          </div>
        </div>
      
      <section>
        <div className="flex gap-5 pl-27 mb-2 max-tablet:pl-0 max-tablet:mt-4">
        <img className="w-[20px]" src="./facebook.png" alt="" />
        <img className="w-[20px]" src="./instagram.png" alt="" />
        <img className="w-[20px]" src="./twitter.png" alt="" />
        <img className="w-[20px]" src="./tiktok.png
        " alt="" />
        <img className="w-[20px]" src="./youtube.png
        " alt="" />
        </div>
        <div className="text-end max-tablet:text-start ">
          <p className="mb-2">Tesmot house, Abdulrahman Okene close,</p> 
          <p className="mb-2">Victoria Island, Lagos,Nigeria.</p> 
          <p className="mb-2">contact@piggyVest.com</p>
          <p>+2347009339339</p>
        </div>
    </section>
    </div>
    <div className="faq h-[30vh] px-25 py-6 text-[#485260] max-tablet:h-[35vh] max-tablet:px-13 max-tablet:py-8 max-tablet:mt-[730px] "  >
              <p className="w-[600px] text-[12px] mb-7 max-tablet:w-[500px]">Piggyvest (formerly piggybank.ng) is the leading online savings & investing platform in Nigeria. For over 9 years, our customers have saved and invested billions of Naira that they would normally be tempted to spend.</p>
        <main>
          <p className="w-[600px] text-[12px] mb-5 max-tablet:w-[500px]"> PV Capital Limited is a fund manager duly licensed by the Securities and Exchange Commission (SEC) of Nigeria.</p>
        </main>
        <main>
          <p className="text-[12px] text-blue-800">2016 - 2025 PiggyTech Global Limited - RC 1405222</p>  
          </main>
    </div>
    </>
  );
};

export default Footer;
