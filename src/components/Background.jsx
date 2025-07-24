import React from "react";
import Navbar from "./Navbar";

const Background = () => {
  const driveLink = "https://drive.google.com/file/d/1xYdf2PzN5GV1aA1K2ZujlkHoJ2Iar3e1/view?t=8";
  
  const handleClick = () => {
    window.open(driveLink, "_blank");
  };
  
 const driveLink11 = "https://drive.google.com/drive/folders/1Maa8VonVbHYDzUXqD9xBLRj2YHoboSZc";
  const handleClick1 = () => {
    window.open(driveLink11, "_blank");
  };

  return (
    <div className="w-screen md:overflow-hidden relative z-10 min-h-screen overflow-x-hidden">
      {/* Background Image */}
      <div className="w-full h-full absolute top-0 bg-black z-[-1]">
        <img className="opacity-40 shadow-2xl shadow-black" src="./src/assets/image2.jpg" alt="" />
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Heading Section */}
      <div className="px-5 py-20 leading-tight z-10 text-white">
        <div className="text-[8vw] md:px-10">
          <h1 className="tracking-tighter text-6xl leading-tight md:text-9xl">
            Independent <span className="bg-gray-800 px-3 py-2 text-4xl md:text-9xl rounded-2xl">VFX</span>
          </h1>
          <h1 className="tracking-tighter text-6xl leading-tight md:text-9xl">Artist</h1>
        </div>

        {/* Description */}
        <div className="font-[f1] md:px-10 mt-5 md:text-[1.5vw] md:w-[48vw] text-xl text-orange-400 font-light">
          <p>
            <span className="uppercase font-bold text-xl">Hi, I'm Anshu.</span> <br /> Creative VFX Compositing Artist with hands-on experience in rotoscoping, paint prep, matchmove,
            video editing , motion graphics and compositing. Known for a strong eye for detail and delivering clean, high-quality visuals.
            Highly detail-oriented, Passionate about visual
            storytelling and continuously growing within the VFX industry.
          </p>
        </div>
      </div>

      {/* First Low-Quality Video Section */}
      <div className="md:w-[94%] md:h-[50vw] h-50 px-3 mb-20 overflow-hidden md:mx-auto md:rounded-3xl border md:mt-10">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          src="/src/assets/video1.mp4" // 🔻 Low-quality version
        />
      </div>

      {/* Button for 1st Drive Link */}
      <div
        onClick={handleClick}
        className="rounded-3xl mt-5 lowercase text-2xl flex justify-center w-fit text-orange-500 text-center m-auto cursor-pointer px-4 py-2 bg-zinc-800 mb-15"
      >
        Open
      </div>

      {/* Award Section */}
      <div className="px-5 py-20 leading-tight z-10 text-white">
        <div className="text-[8vw] md:px-10">
          <h1 className="tracking-tighter text-4xl leading-tight md:text-9xl capitalize ">Award winning</h1>
          <h1 className="tracking-tighter text-6xl leading-tight capitalize md:text-7xl font-light">vFX short film</h1>
        </div>

        <div className="font-[f1] md:px-10 text-orange-400 mt-5 md:text-[1.2vw] md:w-[48vw] text-xl font-light">
          <p>
            DCGA Bronze Award winner with experience as a Team Lead and Compositing Artist, Video Editing, delivering high-quality visuals
            through strong leadership and creative expertise.
          </p>
        </div>
      </div>

      {/* Second Low-Quality Video Section */}
      <div className="md:w-[94%] md:h-[50vw] h-50 px-3 mb-20 overflow-hidden md:mx-auto md:rounded-3xl border md:mt-10">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
          src="/src/assets/video2.mp4" // 🔻 Low-quality version
        />
      </div>

      {/* Button for 2nd Drive Link */}
      <div
        onClick={handleClick1}
        className="rounded-3xl mt-5 lowercase text-2xl flex justify-center w-fit text-orange-500 text-center m-auto cursor-pointer px-4 py-2 bg-zinc-800 mb-15"
      >
        Open
      </div>
    </div>
  );
};

export default Background;
