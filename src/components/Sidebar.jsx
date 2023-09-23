import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { TypeAnimation } from "react-type-animation";

import "../styles/main.css";

const Sidebar = () => {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  return (
    <div className=" bg-slate-950 max-h-full">
      <div className=" mb-4 container flex flex-row justify-between p-5 md:px-32  shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
        {/* <ul>
          <li className="flex flex-col gap-5 h-screen sm:flex-col md:flex-col">
            <Link
              to="/"
              className="bg-blue-500 hover:bg-blue-600 hover:text-black border-2 py-2 px-4 h-fit rounded-lg shadow-lg ml-1 font-bold "
            >
              Home
            </Link>
            <Link
              to="/books"
              className="bg-blue-500 hover:bg-blue-600 hover:text-black border-2 py-2 px-4 h-fit rounded-lg shadow-lg ml-1 font-bold "
            >
              Books
            </Link>
            <Link
              to="/authors"
              className="bg-blue-500 hover:bg-blue-600 hover:text-black border-2 py-2 px-4 h-fit rounded-lg shadow-lg ml-1 font-bold "
            >
              Authors
            </Link>
            <Link
              to="/not"
              className="bg-blue-500 hover:bg-blue-600 hover:text-black border-2 py-2 px-4 h-fit rounded-lg shadow-lg ml-1 font-bold "
            >
              Not Found
            </Link>
            <Link
              to="/projects"
              className="bg-blue-500 hover:bg-blue-600 hover:text-black border-2 py-2 px-4 h-fit rounded-lg shadow-lg ml-1 font-bold "
            >
              About Project
            </Link>
          </li>
        </ul> */}

        <div className="title font-semibold text-2xl p-1 cursor-pointer tracking-wide  ">
          Arjun.
        </div>

        <nav className="hidden border border-transparent  md:flex gap-5 font-medium p-1 cursor-pointer ">
          {[
            ["Home", "/"],
            ["Books", "/books"],
            ["Authors", "/authors"],
            ["Not Found", "*"], // updated from reports to "*" to take all paths
            ["About Project", "/projects"],
            ["Carousel", "/slide"],
            ["Quiz", "/quiz"],
            ["Reminder", "/remind"],
          ].map(([title, url], id) => (
            // earlier i was using id in ([title ,url, id,])
            <div
              className="text-gradient uppercase    link leading-10 tracking-wide   rounded-lg "
              key={id}
            >
              <Link key={id} to={url} className="   ">
                {title}
              </Link>
            </div>
          ))}
        </nav>
        <div className="flex md:hidden z-50 " onClick={handleChange}>
          <div className="p-2">
            {!menu ? <AiOutlineMenu size={32} /> : <AiOutlineClose size={32} />}
            {/* intially menu false so showing close icon so i did !menu toggled it */}
          </div>
          <div
            className={`mobileMenu ${
              menu ? "translate-x-0" : " -translate-x-full"
            } md:hidden flex flex-col absolute bg-slate-900 left-0 top-20 font-medium text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
          >
            <nav className="  md:flex gap-5 font-medium p-1 cursor-pointer leading-6 tracking-widest ">
              {[
                ["Home", "/"],
                ["Books", "/books"],
                ["Authors", "/authors"],
                ["Not Found", "*"], // updated from reports to "*" to take all paths
                ["About Project", "/projects"],
                ["Carousel", "/slide"],
                ["Quiz", "/quiz"],
                ["Reminder", "/remind"],
              ].map(([title, url], id) => (
                // earlier i was using id in ([title ,url, id,])
                <div className="link leading-10  " key={id}>
                  <Link key={id} to={url} className="   ">
                    {title}
                  </Link>
                </div>
              ))}
            </nav>
          </div>
        </div>
      </div>
      <span className="text-3xl font-semibold mb-1">Hi I'm Arjun Gurjar </span>{" "}
      <br />
      <TypeAnimation
        sequence={[
          // Same substring at the start will only be typed out once, initially
          "FRONTEND DEVELOPER",
          1000, // wait 1s before replacing "Mice" with "Hamsters"
          "WEB DESIGNER",
          1000,
          "QUORA WRITER",
          1000,
          "AVID READER",
          1000,
        ]}
        wrapper="span"
        speed={50}
        className=" text-3xl font-semibold bg-gradient-to-r inline-block from-[#ff7170] to-[#ffe57f] bg-clip-text text-transparent "
        // style={{ fontSize: "2em", display: "inline-block" }}
        repeat={Infinity}
      />
    </div>
  );
};

export default Sidebar;

// nav class before
// flex sm:justify-center space-x-4
// w-32 solved the problem button width fixed width rather than w-full and other methods
// aboutproject instead of about project with space behaves differently
