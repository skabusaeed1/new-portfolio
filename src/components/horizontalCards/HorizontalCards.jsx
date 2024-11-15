import React from "react";
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import './horizontalCards.css';

export default function HorizontalCard() {
  return (
    <div className="horizontalCard my-20">
      <div className="cardContainer flex flex-nowrap w-full h-[65vh]">
        <div className="leftImg w-[50%] border-1">
          <img
            src="https://media.istockphoto.com/id/458971457/photo/film-releases.jpg?s=612x612&w=is&k=20&c=BIezo904NdxQOqEvqig--tmKsirDWvTkbHKOxUAvBDs="
            alt="video stream app hero image"
            className="object-cover h-[100%] w-full"
          />
        </div>
        <div className="rightTxt w-[50%] flex justify-center items-center flex-col p-5 text-gray-600 px-10 text-justify">
          <h3 className="text-center text-3xl font-bold pb-5">
            Movix - Video Streaming
          </h3>
          <p className="py-2 text-[0.9rem]">
            Explore our cutting-edge streaming platform! Enjoy seamless
            entertainment with ReactJS and Redux. Dive into movies, shows, and
            live events on any device. Experience lightning-fast rendering and
            personalized journeys. Welcome to your new entertainment hub! Tools:
            ReactJS, Redux, JavaScript, HTML, sass, CSS
          </p>
          <Link
            href="https://github.com/skabusaeed1/movix"
            target="_blank"
            className="text-gray-600 underline"><span>View Source Code</span></Link>
          <Link
            href="https://movix-lyart-five.vercel.app/"
            target="_blank"
            className="text-gray-600">
            <Button className="bg-gray-600 text-white mt-8" radius="full">Know More</Button>
          </Link>
        </div>
      </div>

      <div className="cardContainer flex flex-nowrap w-full h-[65vh] box-rev">
        <div className="rightTxt w-[50%] flex justify-center items-center flex-col p-5 text-gray-600 px-10 text-justify">
          <h3 className="text-center text-3xl font-bold">E - Kart</h3>
          <p className="py-2">
            Meet E-Kart: ReactJS-powered e-commerce at its best! Explore
            products, add to cart, and enjoy seamless checkout. Manage
            effortlessly with a user friendly admin dashboard. Secure payments
            via Razorpay and reliable storage with Firebase. Shop with
            confidence, sell with ease., Tools: ReactJS, Redux, Firebase,
            context API, JavaScript, Tailwind CSS, HTML, CSS
          </p>
          <Link href="https://github.com/skabusaeed1/e-kart"
            target="_blank"
            className="text-gray-600 underline"><span>View Source Code</span></Link>
          <Link
            href="https://e-kart-sand.vercel.app/"
            target="_blank"
            className="text-white"
          >
            <Button className="bg-gray-600 text-white mt-8" radius="full">
              Know More
            </Button>
          </Link>
        </div>

        <div className="leftImg w-[50%] border-1">
          <img
            src="https://cdn.pixabay.com/photo/2021/12/27/19/28/e-commerce-6898102_640.png"
            alt="e-commerce horo image"
            className="object-cover h-[100%]  w-full"
          />
        </div>
      </div>
      {/* <div className="cardContainer flex flex-nowrap w-full h-[65vh]">
        <div className="leftImg w-[50%] border-1">
          <img
            src="https://my-portfolio-beta-one-45.vercel.app/static/media/techBlog_cover.ba34f8870f74bef78cda.webp"
            alt="video stream app hero image"
            className="object-cover h-[100%] w-full"
          />
        </div>
        <div className="rightTxt w-[50%] flex justify-center items-center flex-col p-5 text-gray-600 px-10 text-justify">
          <h3 className="text-center text-3xl font-bold pb-5">Lorem Ipsum</h3>
          <p className="py-2 text-[0.9rem]">
            Welcome to TechBlog , your go-to for tech enthusiasts! Powered by
            ReactJS, Redux, Firebase, Node.js, Express.js, and MongoDB for
            seamless authentication, data management, and storage. Explore a
            world of tech insights, share expertise, and engage with comments
            and likes. Find solutions effortlessly with advanced filtering. Join
            us now and dive into the tech landscape! Tools: ReactJS, Redux,
            JavaScript, HTML, CSS, Firebase, Node Js, Express Js, MongoDB
          </p>
          <Link href="https://github.com/abhishekSonawane97/mern-blog"
            target="_blank"
            className="text-gray-600 underline"><span>View Source Code</span></Link>
          <Link href="https://mern-blog-33ns.onrender.com/"
            target="_blank"
            className="text-white"><Button className="bg-gray-600 text-white mt-8" radius="full">Know More</Button></Link>
        </div>
      </div> */}
    </div>
  );
}
