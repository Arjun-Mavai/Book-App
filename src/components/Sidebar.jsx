import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside>
      <nav>
        <ul>
          <li className="flex gap-5">
            <Link to="/">Home</Link>
            <Link to="/books">Books</Link>
            <Link to="/authors">Authors</Link>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
