import React from "react";

const Work = () => {
  return (
    <div className="flex justify-center md:gap-25 gap-15 md:px-[10vw] md:py-[5vw] flex-wrap">
      
      {/* Image Card 1 */}
      <div className="card">
        <h1 className="text-white font-[f1] text-2xl md:py-5 mb-3 capitalize">Matte painting</h1>
        <div className="md:w-[32vw] md:h-[25vw] w-[80vw] h-[70vw] rounded-2xl overflow-hidden bg-red-400">
          <img className="w-full h-full object-cover" src="img1.png" alt="matte painting 1" />
        </div>
      </div>

      {/* Image Card 2 */}
      <div className="card">
        <h1 className="font-[f1] text-2xl md:py-5 capitalize mb-3 text-white">Matte painting</h1>
        <div className="md:w-[32vw] md:h-[25vw] w-[80vw] h-[70vw] rounded-2xl overflow-hidden bg-red-400">
          <img className="w-full h-full object-cover" src="img2.jpg" alt="matte painting 2" />
        </div>
      </div>

      {/* Video Card 1 */}
      <div className="card">
        <h1 className="font-[f1] text-2xl md:py-5 capitalize mb-3 text-white">Matte painting</h1>
        <div className="md:w-[32vw] md:h-[25vw] w-[80vw] h-[70vw] rounded-2xl overflow-hidden bg-zinc-900">
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

      {/* Video Card 2 */}
      <div className="card">
        <h1 className="font-[f1] text-2xl md:py-5 capitalize mb-3 text-white">
          reel - <span className="text-sm">CG render</span>
        </h1>
        <div className="md:w-[32vw] md:h-[25vw] w-[80vw] h-[70vw] rounded-2xl overflow-hidden bg-zinc-900">
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

      {/* Video Card 3 */}
      <div className="card">
        <h1 className="font-[f1] text-2xl md:py-5 capitalize mb-3 text-white">
          reel - <span className="text-sm">live + AI</span>
        </h1>
        <div className="md:w-[32vw] md:h-[25vw] w-[80vw] h-[70vw] rounded-2xl overflow-hidden bg-zinc-900">
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

export default Work;
