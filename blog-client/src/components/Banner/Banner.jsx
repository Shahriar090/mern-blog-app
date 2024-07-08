import { Button } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import bannerImg from "../../assets/blog-banner-2.png";

const Banner = () => {
  return (
    <section>
      <div
        className="relative w-full max-w-screen-2xl mx-auto h-[600px] bg-cover bg-no-repeat bg-center mt-14"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <div className="overlay  absolute inset-0 bg-black bg-opacity-80"></div>
        <div className="texts z-50 absolute top-[40%] md:left-[30%] transform translate(-50%, -50%) flex flex-col gap-4 px-2 sm:px-0">
          <h1 className="text-white text-3xl md:text-5xl text-center">
            Welcome To{" "}
            <span className="bg-gradient-to-r from-purple-700 to-pink-700 bg-clip-text text-transparent">
              Wandar Words
            </span>
          </h1>
          <p className="text-gray-300 text-sm sm:text-lg max-w-xl text-center">
            Here you'll find a variety of articles and tutorials on topics such
            as web development, software engineering, and programming languages.
          </p>
          <div className="flex justify-center ">
            <Link to="/search">
              <Button gradientDuoTone="purpleToPink"> View all posts</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
