import { Link, NavLink } from "react-router-dom";
import './Navbar.css'


function changeActive() {
}
export default function Navbar() {
    changeActive();

    return (
      <nav className="bg-[#2C3E50] z-50 flex justify-between items-center py-3 container fixed top-0 left-0 right-0">
        <div>
          <h1 className="text-white p-2 mx-12 font-extrabold text-3xl">
            <Link to="startFramework">START FRAMEWORK</Link>
          </h1>
        </div>
        <div className=" mx-8">
          <ul className="text-white flex ">
            <li className="  text-lg  ">
              <NavLink
                className="p-2 rounded-lg"
                style={({ isActive }) => {
                  return { background: isActive ? "#1ABC9C" : "" };
                }}
                to="about"
              >
                About
              </NavLink>
            </li>
            <li className=" text-lg ">
              <NavLink
                className="p-2 rounded-lg"
                style={({ isActive }) => {
                  return { background: isActive ? "#1ABC9C" : "" };
                }}
                to="portfolio"
              >
                Portfolio
              </NavLink>
            </li>
            <li className=" text-lg ">
              <NavLink
                className="p-2 rounded-lg"
                style={({ isActive }) => {
                  return { background: isActive ? "#1ABC9C" : "" };
                }}
                to="contact"
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    );
}


