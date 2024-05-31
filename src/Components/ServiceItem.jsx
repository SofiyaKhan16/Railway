import React from "react";

const ServiceItem = ({ img, index, subject, description, id }) => {
  return (
    <div
      id={id}
      className={`w-full h-[450px]   ${
        index == 1 ? "" : "flex-row-reverse"
      }  justify-center items-center -my-10 gap-2 flex`}
    >
      <div className="w-[49%]">
        <img
          src={img}
          className="w-full h-[270px] object-fill border rounded-2xl"
          alt=""
        />
      </div>
      <div className="w-[49%] flex flex-col mx-12 gap-1">
        <h2 className="font-bold w-full text-blue-950 text-[28px] ">{subject}</h2>
        <div className="text-[20px]">{description}</div>
      </div>
    </div>
  );
};

export default ServiceItem;
