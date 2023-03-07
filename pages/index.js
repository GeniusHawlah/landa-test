import Image from "next/image";
import AllCtx from "../util-functions/allCtx";
import { useEffect } from "react";
import LeftBar from "../components/LeftBar";
import RightContainer from "../components/RightContainer";
import SubjectModal from "../components/SubjectModal";

export default function Home(props) {
  const {subjectModalClicked} = AllCtx();

  const { } = props; 

  useEffect(() => {}, []);

  return <div className=" flex font-sora ">
    <LeftBar /> <RightContainer />
   {subjectModalClicked &&  <SubjectModal/>}
  </div>;
}
