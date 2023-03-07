import Image from "next/image";
import React from "react";
import { DASHBOARD_LINKS } from "../a-store/content-store";

function LeftBar() {
  return (
    <aside className="bg-[#F6F9FD] pt-5 pl-5 pr-5 w-[20%] h-screen border-r-2 pb-20">
      {/* Logo */}
      <div className="px-2">
        <Image alt="logo" width="60" height="30" src="/images/logo.svg" />
      </div>
      {/* Links */}
      <div className="mt-12 flex flex-col justify-between h-full ">
        <div className=" space-y-3">
          {DASHBOARD_LINKS.map((item) => (
            <div key={item.name}
              className={`${
                item.name === "Assessment" ? "text-pry-color" : ""
              } flex  py-1 px-2 hover:text-pry-color hover:bg-[#DDE7F8] cursor-pointer`}
            >
              <div className="mr-4">
                <Image
                  className=""
                  alt={`${item.icon}-icon`}
                  src={`${item.icon}`}
                  width={16}
                  height={20}
                />{" "}
              </div>

              <p>{item.name}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-between mb-5 cursor-pointer px-2">
          <p>Logout</p>{" "}
          <div>
            {" "}
            <Image
              className=""
              alt="Logout Icon"
              src="/images/logout-icon.svg"
              width={16}
              height={20}
            />{" "}
          </div>
        </div>
      </div>
    </aside>
  );
}

export default LeftBar;
