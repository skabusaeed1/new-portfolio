import React, { useEffect, useState } from "react";

export default function Eyes() {

    const [ rotate, setRotate ] = useState(0);


    useEffect(()=>{

        window.addEventListener("mousemove", (e) => {
            let mouseX = e.clientX;
            let mouseY = e.clientY;

            let deltaX = mouseX - (window.innerWidth/2) ;
            let deltaY = mouseY - (window.innerHeight/2) ;

            let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
            setRotate(angle - 180);
            // console.log('rotate ', rotate );
        })
    })




  return (
    <div className="eyes w-full h-screen overflow-hidden bg-zinc-900">
      <div data-scroll data-scroll-section data-scroll-speed="-.7" className="w-full h-full bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-1440x921.jpg')] relative">
        <div className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] flex gap-4">

          <div className="w-[15vw] h-[15vw] bg-zinc-100 rounded-full flex items-center justify-center ">
            <div className="w-2/3 h-2/3 rounded-full bg-zinc-900 relative">
                <div style={{ transform : `translate(-50%, -50%) rotate(${rotate}deg)`}} className="line w-full h-5 absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%]">

              <div className="w-5 h-5 rounded-full bg-zinc-100"></div>
            </div>
                </div>
          </div>

          <div className="w-[15vw] h-[15vw] bg-zinc-100 rounded-full flex items-center justify-center">
            <div className="w-2/3 h-2/3 rounded-full bg-zinc-900 relative">
            <div  style={{ transform : `translate(-50%, -50%) rotate(${rotate}deg)`}} className="line w-full h-5 absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%]">

              <div className="w-5 h-5 rounded-full bg-zinc-100"></div>
            </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
