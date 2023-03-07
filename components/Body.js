import Image from "next/image";
import React, { useState } from "react";
import { MdMoreVert } from "react-icons/md";
import { SUBJECTS } from "../a-store/content-store";
import AllCtx from "../util-functions/allCtx";

function Body() {
  const { assessmentAvailable, subjectModalClicked, setSubjectModalClicked } =
    AllCtx();

  const [tabHover, setTabHover] = useState("questions");

  return (
    <div className="h-screen">
      {/* TABS  */}
      <div className="flex px-10 mt-10">
        <div
          onMouseOver={() => {
            setTabHover("questions");
          }}
          className={`${
            tabHover === "questions"
              ? " bg-[#EEF3FC] text-[#222222]"
              : "text-gray-300 bg-white"
          } px-5 py-2  cursor-pointer select-none`}
        >
          Question Bank
        </div>
        <div
          onMouseOver={() => {
            setTabHover("assessments");
          }}
          className={`${
            tabHover === "assessments"
              ? " bg-[#EEF3FC] text-[#222222]"
              : "text-gray-300 bg-white"
          }  px-5 py-2  cursor-pointer select-none`}
        >
          Assessments
        </div>
      </div>

      {/* BODY  */}
      {!assessmentAvailable && (
        <div className="flex flex-col space-y-4 justify-center items-center h-full">
          <Image
            className=""
            alt="Cap Icon"
            src="/images/cap-icon.svg"
            width={66}
            height={66}
          />
          <p>Your subject question bank is empty.</p>
          <button
            onClick={() => {
              setSubjectModalClicked(true);
            }}
            className="text-[14px] bg-pry-color text-white px-5 py-2"
          >
            Create Subject
          </button>
        </div>
      )}

      {assessmentAvailable && (
        <div className=" p-5 mx-10 mt-10 rounded-sm   border-2">
          <div className="flex ">
            <select
              className="border-[1px] w-[30%] pl-2 pr-3 text-sm py-2"
              name=""
              id=""
            >
              <option value="unilag">University of Lagos</option>
            </select>

            <div className="flex px-2 border-[1px] items-center w-[45%] ml-5 ">
              <Image
                className=""
                alt="Search Icon"
                src="/images/search-icon.svg"
                width={16}
                height={16}
              />{" "}
              <input
                className="ml-3 w-full placeholder:text-sm   focus:border-none focus:outline-none"
                type="text"
                placeholder="Search for subjects"
              />
            </div>

            <button className="bg-pry-color w-[15%] px-5 ml-5 hover:bg-blue-900 text-white text-[14px]">
              Add Subject
            </button>
          </div>

          {/* TABLE  */}
          <div className=" flex mt-7 font-bold space-x-5">
            <p className="w-[25%]">Name</p>
            <p className="w-[18%]">Questions</p>
            <p className="w-[18%]">Participants</p>
            <p className="w-[18%]">Pass</p>
            <p className="w-[18%]">Failed</p>
            <p className="w-[3%]"></p>
          </div>
          <div className="mt-5  ">
            {SUBJECTS.map((subject, i) => (
              <div key={subject.name}
                className={`flex space-x-5 border-b-2 py-2    ${
                  i % 2 !== 0 ? "bg-[#F8F9FC]" : ""
                }`}
              >
                <div className="w-[25%] flex items-center ">
                  <Image
                    className=""
                    alt="Subject Icon"
                    src="/images/subject.svg"
                    width={26}
                    height={26}
                  />{" "}
                  <p
                    className="ml-2
                  "
                  >
                    {subject.name}
                  </p>
                </div>
                <div className="w-[18%] flex items-center">
                  <p>{subject.questions}</p>
                </div>
                <div className="w-[18%] flex items-center">
                  <p>{subject.participants}</p>
                </div>
                <div className="w-[18%] flex items-center">
                  <p>{subject.pass}</p>
                </div>
                <div className="w-[18%] flex items-center">
                  <p>{subject.failed}</p>
                </div>

                <div className="w-[3%]">
                  <MdMoreVert className="cursor-pointer" />
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default Body;
