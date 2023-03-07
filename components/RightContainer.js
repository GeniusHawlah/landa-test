import Image from "next/image";
import React, { useState } from "react";
import Body from "./Body";
import Navbar from "./Navbar";

function RightContainer() {


  return (
    <section className="w-[80%] ">
      <Navbar />
      <Body/>
    </section>
  );
}

export default RightContainer;
