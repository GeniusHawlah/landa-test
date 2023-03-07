import React from "react";
import AllCtx from "../util-functions/allCtx";

function SubjectModal() {
  const {
    setAssessmentAvailable,
    subjectModalClicked,
    setSubjectModalClicked,
  } = AllCtx();

  return (
    <div
      onClick={() => {
        setSubjectModalClicked(false);
      }}
      className="w-screen h-screen bg-slate-50 bg-opacity-80  absolute flex justify-center"
    >
      <div
        onClick={(e) => {
          e.stopPropagation();
        }}
        className="shadow-sm  w-1/2 bg-white relative"
      >
        <div className=" shadow-sm py-5 font-bold px-5">Create Subject</div>

        <div className="px-5 mt-10  h-full">
          <div>
            <p>Institution</p>
            <select className="w-full mt-3 border-2 px-2 py-2" name="" id="">
              <option value="">Select</option>
              <option value="unilag">University of Lagos</option>
            </select>
          </div>

          <div className="mt-10">
            <p>Subject</p>
            <input
              className="w-full mt-3 border-2 px-2 py-2"
              type="text"
              placeholder="Enter Subject"
            />
          </div>

          <div className="border-dashed w-full border-2 mt-10 text-center text-pry-color py-3 border-pry-color cursor-pointer flex justify-center items-center">
            <span className="text-3xl mr-3">+</span> Add Subject
          </div>

          <div className="absolute bottom-0 mb-10">
            <button
              onClick={() => {
                setSubjectModalClicked(false);
                setAssessmentAvailable(true);
              }}
              className="bg-pry-color text-white px-7 py-3 text-[14px] hover:bg-blue-900"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SubjectModal;
