import React from "react";
import fallBack from "../../../assets/fallback.png";
import { FaApple, FaGooglePlay } from "react-icons/fa";
import Button from "../../reusable/Button";
import users from "../../../assets/users.png";
const Reviews = () => {
  return (
    <div className="mt-[200px] flex px-25 items-center gap-20 max-tablet:flex-col-reverse max-tablet:px-13 ">
      <section>
        <img className="w-[500px]" src={fallBack} alt="" />
      </section>
      <section>
        <img className="max-tablet:pl-25" src={users} alt="" />
        <h1 className="text-[40px] w-[600px] text-[#122231]   font-medium mb-8 leading-13 max-tablet:w-[500px] max-tablet:text-center max-tablet:text-[35px]">
          Join 5+ million people who save and invest with us
        </h1>
        <div className="flex gap-5 max-tablet:justify-center">
          <Button
            iconTitle={<FaApple size={30} />}
            name="Get on iphone"
            border="1px solid #dddddd"
            textColor="#122231"
            display="flex"
            align="center"
            gap="5px"
            flex="row-reverse"
          />
          <Button
            name="Get on Android"
            border="1px solid #dddddd"
            textColor="#122231"
            iconTitle={<FaGooglePlay size={30} />}
            display="flex"
            align="center"
            gap="5px"
            flex="row-reverse"
          />
        </div>
      </section>
    </div>
  );
};

export default Reviews;
