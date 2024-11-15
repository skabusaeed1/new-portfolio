import React from "react";
import {Button} from "@nextui-org/button";

export default function Intro({ introData }) {
  return (
    <div className="flex justify-center items-center flex-col p-5 text-gray-600">
      <h1 className="text-3xl font-bold p-5">{ introData?.heading }</h1>
      <p className="px-10 py-2">{ introData?.content } </p>

      {/* <Button className="bg-gray-600 text-white mt-8" radius="full">Button</Button> */}
    </div>
  );
}
