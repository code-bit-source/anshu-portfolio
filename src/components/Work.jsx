import React from "react";

const work = () => {
  return (
    <div className="flex justify-center md:gap-25 gap-15 md:px-[10vw] md:py-[5vw] flex-wrap ">
      <div className="card">
        <h1 className="text-white font-[f1] text-2xl md:py-5  mb-3 capitalize">Matte painting</h1>
        <div className=" md:w-[32vw] md:h-[25vw] w-[80vw] h-[70vw]  rounded-2xl md:rounded-2xl overflow-hidden bg-red-400">
          <img className="w-full h-full object-cover" src="img1.png" alt="" />
        </div>
        {/* <h2 className="text-white font-[f1] text-xl font-light">
          description
        </h2> */}
      </div>
   
      <div className="card">
        <h1 className=" font-[f1] text-2xl md:py-5 capitalize mb-3 text-white">Matte painting</h1>
        <div className=" md:w-[32vw] md:h-[25vw] w-[80vw] h-[70vw]  rounded-2xl md:rounded-2xl overflow-hidden bg-red-400">
          <img className="w-full h-full object-cover" src="img2.jpg" alt="" />
        </div>
       
      </div>
   
   
      
      <div className="card">
        <h1 className=" font-[f1] text-2xl md:py-5 capitalize mb-3 text-white">Matte painting</h1>
        <div className=" md:w-[32vw] md:h-[25vw] w-[80vw] h-[70vw]  rounded-2xl bg-zinc-900">
           <video
          className="w-full h-full object-contain"
          autoPlay
          loop
          muted
          playsInline
          src="work2.mp4" 
        />
        </div>
       
      </div>


<div className="card">
  <h1 className=" font-[f1] text-2xl md:py-5 capitalize mb-3 text-white">reel - <span className="text-sm">CG render</span> </h1>
        <div className=" md:w-[32vw] md:h-[25vw] w-[80vw] h-[70vw]  rounded-2xl md:rounded-2xl overflow-hidden bg-zinc-900">
           <video
          className="w-full h-full object-contain"
          autoPlay
          loop
          muted
          playsInline
          src="work3.mp4" 
        />
        </div>
       
      </div>

      <div className="card">
        <h1 className=" font-[f1] text-2xl md:py-5 capitalize mb-3 text-white">reel - <span className="text-sm">live + AI</span> </h1>
        <div className=" md:w-[32vw] md:h-[25vw] w-[80vw] h-[70vw]  rounded-2xl md:rounded-2xl bg-zinc-900">
           <video
          className="w-full h-full object-contain"
          autoPlay
          loop
          muted
          playsInline
          src="work1.mp4" 
        />
        </div>
       
      </div>
   
     
    </div>
  );
};

export default work;
