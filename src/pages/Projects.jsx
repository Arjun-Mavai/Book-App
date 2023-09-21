import "../styles/main.css";
// "./styles/main.css"; this was not working i used ../ it worked

const Projects = () => {
  return (
    <div className="project flex gap-4 flex-col bg-slate-950 h-screen p-4 rounded-lg ">
      <h1 className="tracking-wider leading-6  font-bold text-2xl">
        Use of TechStack in this WebApp
      </h1>
      <ul className=" rounded-lg">
        <li className="flex gap-3">
          <p className="my-paragraph">01</p>
          <span className=" my-span ">ReactJS</span>
        </li>
        <li className="flex gap-3">
          <p className="my-paragraph">02</p>
          <span className=" my-span ">React Router v6</span>
        </li>
        <li className="flex gap-3">
          <p className="my-paragraph">03</p>
          <span className=" my-span ">TanSack Query</span>
        </li>
        <li className="flex gap-3">
          <p className="my-paragraph">04</p>
          <span className=" my-span ">AntDesign</span>
        </li>
        <li className="flex gap-3">
          <p className="my-paragraph">05</p>
          <span span className=" my-span ">
            Tailwind CSS
          </span>
        </li>
      </ul>
    </div>
  );
};

export default Projects;
