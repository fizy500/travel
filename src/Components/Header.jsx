import React from "react";
import Logo from "../Assets/logo.svg";
export default function Header() {
  return (
    <header className="w-full bg-red-500 flex justify-center items-center top-0 left-0 fixed py-5 px-20   shadow-xl">
      <div className="flex space-x-2 ">
        <img src={Logo} alt="" />
        <h2 className="text-white text-[14.46px]  font-medium">
          my travel journal.
        </h2>
      </div>
    </header>
  );
}
