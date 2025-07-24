import React, { useRef } from "react";
import Background from "./components/Background";
import Work from "./components/Work";
import Service from "./components/Service";
import { Link } from "react-scroll";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const App = () => {
 const driveLink = "https://drive.google.com/drive/folders/12BQz32SZl1YkW5ZSzAPLGlHURhUxYN2E";

  const OpenYouTube = () => {
  
    window.open('https://www.youtube.com/@mranshukumar07/shorts', '_blank');
  };
  const Opencv = () => {
  
    window.open('https://drive.google.com/drive/folders/12BQz32SZl1YkW5ZSzAPLGlHURhUxYN2E', '_blank');
  };
  const Openprject = () => {
  
    window.open('https://drive.google.com/drive/folders/12BQz32SZl1YkW5ZSzAPLGlHURhUxYN2E', '_blank');
  };

  const handleEmailClick = () => {
    const email = "mranshukumar07@gmail.com";
    console.log(email);
    
    const subject = encodeURIComponent("Hiring Update");
    const body = encodeURIComponent("Congratulations! You are hired for the position.");

    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  
  const handleClick = () => {
    window.open(driveLink, "_blank");
  };


  return (
    <div id="top"  className=" overflow-x-hidden top relative z-10 ">
      <div className=" w-screen h-screen top-0 bg-zinc-400 absolute md:hidden hidden justify-center z-20 items-center">
        <h1 className="text-2xl font-bold font-[f1]"> VFX STUDIOS. </h1>
      </div>

      <Background />

      {/* work section  */}
      <div
        id="work"
        className="work relative z-11 w-full min-h-screen bg-zinc-950"
      >
        <h1 className=" text-zinc-100 md:text-[5vw] font-semibold md:py-18 md:px-[10vw] text-5xl px-5 py-10">
          Work
        </h1>
        <div className="text-white md:flex flex-wrap justify-between md:px-[10vw] p-5 items-center font-[f1] ">
          <p className=" md:w-[55vw] font-light md:text-[1.5vw] text-orange-400 text-xl ">
           Skilled in matte painting for film and video production, creating photorealistic digital environments, set extensions, and background replacements that blend seamlessly into live-action footage.
          </p>
          <h1 onClick={handleClick} className=" md:text-[2vw] cursor-pointer text-xl  border-b-1 border-b-orange-500 w-fit mt-5 mb-10 ">
            See all projects{" "}
          </h1>
        </div>

        <Work />
      </div>

      {/* service section  */}
      <div
        id="service"
        className="service relative z-11 w-full h-[800px] bg-zinc-950"
      >
        <h1 className=" text-zinc-100 md:text-[5vw] font-semibold md:py-18 md:px-[10vw] text-5xl px-5 py-10 ">
          Service
        </h1>
        <div className="text-white flex flex-wrap justify-between md:px-[10vw]  items-center font-[f1] ">
          <p className="md:w-[55vw] font-light text-xl px-5 capitalize text-orange-400 md:text-[1.5vw]">
           I provide Rotoscoping , Paint Prep , chroma removing , matchmove , video editing , motion graphics and compositing.
          </p>
          {/* <h1 className=" md:text-[2vw] border-b-1 mt-5 border-b-orange-500 w-fit text-md ml-5 ">
            See my services{" "}
          </h1> */}
        </div>
         <h1 className=" text-zinc-100 md:text-[5vw] font-semibold md:py-18 md:px-[10vw] text-5xl px-5  py-10 ">
          Software <span className=" font-light">Knowledge</span>
        </h1>
        <p className="uppercase text-2xl px-5 md:px-32 w-full flex justify-center text-orange-400 font-light"> photoshop    |  after effects  |  premiere pro  |  Nuke  |  Mocha pro  |  Silhouette  |  Fusion  |  3d equilizer  |  Pftrack  |  blender  |  fcp </p>

        {/* <Service /> */}
      </div>

      {/* about section  */}
      <div
        id="about"
        className="about relative z-11 w-full min-h-fit md:flex md:py-20 border-y-1 border-y-zinc-300 justify-between bg-zinc-950"
      >
        <h1 className=" text-zinc-200 text-5xl py-8 px-5 leading-tight tracking-tighter md:text-[5vw] font-semibold md:mt-[-2vw] md:px-[10vw] ">
          Together,
          <br />
          we can...
        </h1>

        <div className="text-white md:flex p-5 md:gap-15 md:text-2xl md:w-250 md:mr-35  justify-between font-[f1] ">
          <div className="  text-orange-400 ">
            <h1 className="md:mb-8 py-2 ">
              - Establish a creative partnership for all your visual effects needs
            </h1>
            <h1 className="py-2">- Bring your imagination to life with real-world, high-impact effects</h1>
          </div>
          <div className="  text-orange-400 py-2 ">
            <h1 className="md:mb-8 py-2">
              - Transform your content with stunning and modern VFX visuals
            </h1>
            <h1 className="py-2">
              - Understand audience perception better and enhance visual storytelling
            </h1>
          </div>
        </div>

        {/* <div className="md:mb-10 md:py-20 md:flex  justify-between md:absolute md:bottom-[1%] md:w-370 md:h-160 md:ml-50 border-t-1 border-t-zinc-500 border-b-2 border-b-zinc-400">
          <div className=" leading-tight md:tracking-tighter md:text-3xl text-white font-light md:w-230">
            <p className=" p-5 text-xl md:text-2xl ">
              “I’ve had the privilege of working with Victor Berbel for over
              five years, collaborating on the design and delivery of digital
              experiences that support both internal teams and Savills clients.
              Victor brings a rare mix of creativity, precision, and empathy to
              every project—always leading with a human-centered, user-first
              mindset.”
            </p>

            <div className="flex md:py-10 p-5  w-fit">
              <div className="w-15 h-15 bg-red-700 rounded-xl"> </div>
              <div className=" px-5 ">
                <h1 className="text-[20px] mb-3 leading-none tracking-normal font-semibold capitalize ">
                  name
                </h1>
                <h2 className="md:text-[20px] text-md leading-none tracking-normal">
                  Lorem ipsum dolor sit amet consectetur.
                </h2>
              </div>
            </div>
          </div>

          <div className=" "> 
            <div className=" md:w-100 md:h-60 w-full h-60 rounded-4xl mt-20 mb-10 bg-red-700"></div>
            <h1 className="text-white font-[f1] md:py-3  w-fit text-3xl ml-5 py-3 mb-8 border-b-1 border-b-orange-500">
              {" "}
              see all case study
            </h1>
          </div>
        </div> */}
      </div>




      {/* contact page  */}
      <div id="contact" className="contact w-full md:h-160 h-90 bg-transparent "></div>

      <div className=" fixed flex-wrap flex md:px-50 bottom-0 z-8 w-full md:h-160 h-[400px] bg-black p-5 ">
        <div className="md:w-[50%] h-full ">
          <h1 className=" md:text-4xl text-2xl md:mt-20 mt-8 py-5 leading-0.5 text-zinc-400 font-semibold lowercase">
            lets work Together
          </h1>
          <h1 onClick={handleEmailClick} className="md:text-5xl text-2xl  text-orange-600 border-b-1 w-fit py-2 md:py-7 border-b-orange-300">
            mranshukumar07@gmail.com{" "}
          </h1>
          <h1 className="text-white font-light tracking-normal md:py-18 hidden md:block py-3 text-xl">
            {" "}
            {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
            blanditiis. */}
          </h1>
           <div className="md:w-[50%] md:hidden  text-xl font-light font-[f1] mt-10 md:justify-end text-white h-full flex gap-15  ">
          
          <div>
            <h1 className="text-zinc-500 leading-tight">Social</h1>
            <h1>linked in</h1>
            <h1>instagram</h1>
            <h1 onClick={OpenYouTube} >youtube</h1>
          </div>
          <div className="py-5">
            <h1 onClick={Opencv} >read resume</h1>
            <h1 onClick={Openprject}>projects</h1>
          </div>
        </div>
          
        </div>
        <div className="md:w-[50%]  text-xl font-light font-[f1] py-30 md:justify-end text-white h-full flex gap-15  ">
          
          <div>
            <h1 className="text-zinc-500 leading-tight">Social</h1>
            <h1>linked in</h1>
            <h1>instagram</h1>
            <h1 onClick={OpenYouTube} >youtube</h1>
          </div>
          <div className="py-5">
            <h1 onClick={Opencv} >read resume</h1>
            <h1 onClick={Openprject}>projects</h1>
          </div>
        </div>
        <div className="absolute bottom-0 bg-zinc-900 text-orange-500 px-5 py-3 text-2xl rounded-4xl text-center lowercase cursor-pointer mb-30 ml-160 ">
          <Link to="top" smooth={true} offset={-50} duration={2000}>
            Take me on top
          </Link>
        </div>
      </div>
    </div>
  );
};

export default App;
