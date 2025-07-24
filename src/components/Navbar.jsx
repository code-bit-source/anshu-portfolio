import React from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const handleReload = () => {
    window.location.reload(); // This will reload the current page
  };

 const hire = () => {
    const subject = encodeURIComponent("Hiring Update");
    const body = encodeURIComponent("You are hired");
    window.location.href = `mailto:mranshukumar07@gmail.com?subject=${subject}&body=${body}`;
  };

  
  return (
    <div className="flex  w-screen z-10 justify-between font-[f1] md:px-20 px-8 py-10 text-2xl text-white">
      <div className="logo cursor-pointer flex justify-between w-full items-center">
        <h1   onClick={handleReload}>Portfolio.</h1>
        <h1 onClick={hire} className=" py-2 px-5 bg-black rounded-4xl text-sm md:mr-7 md:mt-[-2px] outline-zinc-600 outline-1"> Hire me</h1>
      </div>
      <div>
        <ul className="content md:flex hidden gap-8 text-xl outline-none  text-zinc-300 cursor-pointer">
          <li>
            <Link to="service" smooth={true} offset={-50} duration={2000}>
              Service
            </Link>
          </li>
          <li>
            <Link to="work" smooth={true} offset={-50} duration={1000}>
              Work
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} offset={-50} duration={2000}>
              About
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} offset={-50} duration={2000}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
