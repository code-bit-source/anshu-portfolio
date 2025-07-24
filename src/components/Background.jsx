import React from "react";
import Navbar from "./Navbar";

const Background = () => {
  const driveLinks = [
    {
      label: "Open",
      url: "https://drive.google.com/file/d/1xYdf2PzN5GV1aA1K2ZujlkHoJ2Iar3e1/view?t=8",
    },
    {
      label: "Open",
      url: "https://drive.google.com/drive/folders/1Maa8VonVbHYDzUXqD9xBLRj2YHoboSZc",
    },
  ];

  const openLink = (url) => {
    window.open(url, "_blank");
  };

  return (
    <div className="w-screen md:overflow-hidden relative z-10 min-h-screen overflow-x-hidden">
      
      {/* 🔳 Background Image Layer */}
      <div className="w-full h-full absolute top-0 bg-black z-[-1]">
        <img
          className="opacity-40 shadow-2xl shadow-black w-full h-full object-cover"
          src="image2.jpg"
          alt="Background"
        />
      </div>

      {/* 🔳 Navbar */}
      <Navbar />

      {/* 🔳 Intro Section */}
      <div className="px-5 py-20 leading-tight z-10 text-white">
        <div className="text-[8vw] md:px-10">
          <h1 className="tracking-tighter text-6xl leading-tight md:text-9xl">
            Independent{" "}
            <span className="bg-gray-800 px-3 py-2 text-4xl md:text-9xl rounded-2xl">
              VFX
            </span>
          </h1>
          <h1 className="tracking-tighter text-6xl leading-tight md:text-9xl">
            Artist
          </h1>
        </div>

        {/* 🔳 Description */}
        <div className="font-[f1] md:px-10 mt-5 md:text-[1.5vw] md:w-[48vw] text-xl text-orange-400 font-light">
          <p>
            <span className="uppercase font-bold text-xl">Hi, I'm Anshu.</span>
            <br />
            Creative VFX Compositing Artist with hands-on experience in
            rotoscoping, paint prep, matchmove, video editing, motion graphics,
            and compositing. Known for a strong eye for detail and delivering
            clean, high-quality visuals. Passionate about visual storytelling
            and continuously growing within the VFX industry.
          </p>
        </div>
      </div>

      {/* 🔳 First Video */}
      <div className="md:w-[94%] md:h-[50vw] h-50 px-3 mb-20 overflow-hidden md:mx-auto md:rounded-3xl border md:mt-10">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          src="/video1.mp4"
        />
      </div>

      {/* 🔳 First Button */}
      <button
        onClick={() => openLink(driveLinks[0].url)}
        className="rounded-3xl mt-5 lowercase text-2xl flex justify-center w-fit text-orange-500 text-center m-auto cursor-pointer px-4 py-2 bg-zinc-800 mb-15"
      >
        {driveLinks[0].label}
      </button>

      {/* 🔳 Award Section */}
      <div className="px-5 py-20 leading-tight z-10 text-white">
        <div className="text-[8vw] md:px-10">
          <h1 className="tracking-tighter text-4xl leading-tight md:text-9xl capitalize">
            Award winning
          </h1>
          <h1 className="tracking-tighter text-6xl leading-tight capitalize md:text-7xl font-light">
            VFX short film
          </h1>
        </div>

        <div className="font-[f1] md:px-10 text-orange-400 mt-5 md:text-[1.2vw] md:w-[48vw] text-xl font-light">
          <p>
            DCGA Bronze Award winner with experience as a Team Lead and
            Compositing Artist, delivering high-quality visuals through strong
            leadership and creative expertise.
          </p>
        </div>
      </div>

      {/* 🔳 Second Video */}
      <div className="md:w-[94%] md:h-[50vw] h-50 px-3 mb-20 overflow-hidden md:mx-auto md:rounded-3xl border md:mt-10">
        <video
          className="w-full h-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          src="/video2.mp4"
        />
      </div>

      {/* 🔳 Second Button */}
      <button
        onClick={() => openLink(driveLinks[1].url)}
        className="rounded-3xl mt-5 lowercase text-2xl flex justify-center w-fit text-orange-500 text-center m-auto cursor-pointer px-4 py-2 bg-zinc-800 mb-15"
      >
        {driveLinks[1].label}
      </button>
    </div>
  );
};

export default Background;
