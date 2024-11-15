import React from "react";
import "./Featured.css";
import { Link } from "react-router-dom";

export default function Featured() {
  return (
    <div data-scroll data-scroll-section  data-scroll-speed="-.1"  className="w-full py-20 px-8 bg-zinc-900">
      <div className="w-full  border-b-[1px] border-zinc-700 pb-10 ">
        <h1 className="text-[6vw] tracking-tight">Featured projects</h1>
      </div>

      <div className="cards w-full flex justify-between items-center gap-7 mt-10 relative">

        <div className="left-container card-parent w-1/2">
        <Link to='https://movix-lyart-five.vercel.app/' target="_blank">
          <li>Movix</li></Link>
          <div className="card_container w-full lg:h-[75vh] rounded-lg hover:scale-95 ease-in duration-500 relative mt-2 ">
            
            <div className="card w-full h-full overflow-hidden rounded-lg ">
            <Link to='https://github.com/skabusaeed1/movix' target="_blank">
              <img
                src="https://media.istockphoto.com/id/458971457/photo/film-releases.jpg?s=612x612&w=is&k=20&c=BIezo904NdxQOqEvqig--tmKsirDWvTkbHKOxUAvBDs="
                alt=""
                className="w-full h-full bg-cover"
              /></Link>
            </div>
            <h1 className="text-[#9fb552] text-[5vw] head absolute -right-10 top-1/2 -translate-y-[50%] z-[9] font-black tracking-tighter">
              {
                "Movix".split().map((item, i) => (
                    <mospan  key={i}>{item}</mospan>
                ))
              }
            </h1>
          </div>
        </div>

        <div className="right-container card-parent w-1/2">
        <Link to='https://e-kart-sand.vercel.app/' target="_blank">
          <li>E-Kart</li></Link>
          <div className=" card_container w-full lg:h-[75vh] rounded-lg  hover:scale-95 ease-in duration-500 relative mt-2">
            <div className="card w-full h-full overflow-hidden rounded-lg ">
            <Link to='https://github.com/skabusaeed1/e-kart' target="_blank">
              <img
                src="https://cdn.pixabay.com/photo/2021/12/27/19/28/e-commerce-6898102_640.png"
                alt=""
                className="w-full h-full bg-cover"
              /></Link>
            </div>
            <h1 className="text-[#9fb552] text-[5vw] head absolute -left-10 top-1/2 -translate-y-[50%] font-black tracking-tighter">
              
              {
                "E-Kart".split().map((item, i) => (
                    <span key={i}>{item}</span>
                ))
              }
            </h1>
          </div>
        </div>

      </div>
    </div>
  );
}
