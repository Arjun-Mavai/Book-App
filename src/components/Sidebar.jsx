import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside>
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

      <nav className="flex flex-col gap-6 h-full sm:flex-col md:flex-col ">
        {[
          ["Home", "/"],
          ["Books", "/books"],
          ["Authors", "/authors"],
          ["Not Found", "*"], // updated from reports to "*" to take all paths
          ["About Project", "/projects"],
        ].map(([title, url], id) => (
          // earlier i was using id in ([title ,url, id,])
          <div className="link " key={id}>
            <Link
              key={id}
              to={url}
              className=" w-24  sm:px-2 md:px-2
               flex flex-grow-0    bg-blue-500 hover:bg-blue-600 hover:text-black border-2 py-2 px-4 h-fit rounded-lg shadow-lg ml-1 font-bold "
            >
              {title}
            </Link>
          </div>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;

// nav class before
// flex sm:justify-center space-x-4
// w-32 solved the problem button width fixed width rather than w-full and other methods
// aboutproject instead of about project with space behaves differently
