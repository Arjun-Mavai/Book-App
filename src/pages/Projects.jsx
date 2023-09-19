import "../styles/main.css";
// "./styles/main.css"; this was not working i used ../ it worked

const Projects = () => {
  return (
    <div className="project flex gap-4 flex-col">
      <h1 className="tracking-wider font-bold text-2xl">
        Use of TechStack in this WebApp
      </h1>
      <ul className="">
        <li className="flex gap-3">
          <p>01</p>
          <span className=" ">ReactJS</span>
        </li>
        <li className="flex gap-3">
          <p>02</p>
          <span>React Router v6</span>
        </li>
        <li className="flex gap-3">
          <p>03</p>
          <span>TanSack Query</span>
        </li>
        <li className="flex gap-3">
          <p>04</p>
          <span>AntDesign</span>
        </li>
        <li className="flex gap-3">
          <p>05</p>
          <span>Tailwind CSS</span>
        </li>
      </ul>
    </div>
  );
};

export default Projects;
