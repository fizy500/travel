import React from "react";
// import Image from "../Assets/Rectangle.png";
import Location from "../Assets/location.svg";

export default function CardDetails(props) {
  return (
    <div className="flex items-center space-x-4 mb-7 w-full">
      <img src={props.imageUrl} alt=""  className="w-[130px] h-[168px] rounded object-cover"/>
      <div>
        <div className="flex space-x-4">
          <div className="flex space-x-1">
            <img src={Location} alt="" />
            <p className="uppercase text-[10.24px] font-normal text-[#2B283A] ">
              {props.location}
            </p>
          </div>
          <a
            className="font-normal text-[#918E9B] text-[10.24px] border-b border-solid border-[#918E9B]"
            href={props.googleMapsUrl}
          >
            View on Google Maps
          </a>
        </div>
        <h2 className="font-bold text-[25px] text-[#2B283A] mb-3">
          {props.title}
        </h2>
        <p className="text-[10.24px] font-bold text-[#2B283A] mb-2">
          <span>{props.startDate}</span>-<span>{props.endDate}</span>
        </p>
        <p className="text-[#2B283A] text-[10.24px] font-normal w-[326px] pr-6">
          {props.description}
        </p>
      </div>
    </div>
  );
}
