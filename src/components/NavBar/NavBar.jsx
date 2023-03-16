import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="bg-[#2E3840] w-full px-10 font-medium">
      <div className="max-w-full flex justify-between items-center">
        <p className="font-medium text-xl text-blue-500  py-2 link">BLOG</p>

        <ul className="flex gap-8 text-lg text-white">
          <li>
            <NavLink activeclassname="active" to="/" className="link">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink activeclassname="active" to="/about" className="link">
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              className={({ isActive }) => (isActive ? "active link" : "link")} // isActive -> built-in method
              to="/blog"
            >
              Blogs
            </NavLink>
          </li>
          <li>
            <NavLink activeclassname="active" to="/contact" className="link">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
