import { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import "../styles/main.css";

const Sidebar = () => {
  const [menu, setMenu] = useState(false);

  const handleChange = () => {
    setMenu(!menu);
  };

  return (
    <div className=" ">
      <div className="container flex flex-row justify-between p-5 md:px-32  shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
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

        <div className="title font-semibold text-2xl p-1 cursor-pointer ">
          Arjun.
        </div>

        <nav className="hidden  md:flex gap-5 font-medium p-1 cursor-pointer ">
          {[
            ["Home", "/"],
            ["Books", "/books"],
            ["Authors", "/authors"],
            ["Not Found", "*"], // updated from reports to "*" to take all paths
            ["About Project", "/projects"],
            ["Carousel", "/slide"],
          ].map(([title, url], id) => (
            // earlier i was using id in ([title ,url, id,])
            <div className="link " key={id}>
              <Link key={id} to={url} className="   ">
                {title}
              </Link>
            </div>
          ))}
        </nav>
        <div className="flex md:hidden " onClick={handleChange}>
          <div className="p-2">
            <AiOutlineMenu size={32} />
          </div>
          <div
            className={`mobileMenu ${
              menu ? "translate-x-0" : " -translate-x-full"
            } md:hidden flex flex-col absolute bg-slate-900 left-0 top-20 font-medium text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}
          >
            <nav className="  md:flex gap-5 font-medium p-1 cursor-pointer ">
              {[
                ["Home", "/"],
                ["Books", "/books"],
                ["Authors", "/authors"],
                ["Not Found", "*"], // updated from reports to "*" to take all paths
                ["About Project", "/projects"],
                ["Carousel", "/slide"],
              ].map(([title, url], id) => (
                // earlier i was using id in ([title ,url, id,])
                <div className="link " key={id}>
                  <Link key={id} to={url} className="   ">
                    {title}
                  </Link>
                </div>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

// nav class before
// flex sm:justify-center space-x-4
// w-32 solved the problem button width fixed width rather than w-full and other methods
// aboutproject instead of about project with space behaves differently
