import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";

import secureLocalStorage from "react-secure-storage";

import AllCtx from "../util-functions/allCtx";
import Link from "next/link";


function Navbar() {
  const {

  } = AllCtx();

  const router = useRouter();

  const [dropdownClicked, setDropdownClicked] = useState(false);


  return (
    <div className="flex justify-between items-center px-10 pt-5 border-b-2 pb-4 border-gray-50">
    <p className="font-bold">Assessments</p>
    <div
      onClick={() => {
        setDropdownClicked(!dropdownClicked);
      }}
      className="flex space-x-3 cursor-pointer relative w-1/2 justify-end"
    >
      <div>
        {" "}
        <Image
          className=""
          alt="Profile Icon"
          src="/images/profile-icon.png"
          width={20}
          height={20}
        />{" "}
      </div>

      <div>
        <Image
          className=""
          alt="Dropdown Icon"
          src="/images/dropdown-icon.svg"
          width={10}
          height={16}
        />
      </div>

      {dropdownClicked && (
        <div className="absolute mt-6 bg-gray-50  ">
          <div className="py-3 px-5 border-b-2 hover:bg-white border-gray-100">
            <p>View Questions</p>
          </div>
          <div className="py-3 px-5 border-b-2 hover:bg-white border-gray-100">
            <p>Add Question</p>
          </div>
          <div className="py-3 px-5 border-b-2 hover:bg-white border-gray-100">
            <p> Delete</p>
          </div>
        </div>
      )}
    </div>
  </div>
  );
}

export default Navbar;
