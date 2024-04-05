import React from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { CiDark, CiLight } from "react-icons/ci";

const Header = ({ setmode, mode }) => {
  const param = useLocation();
  //   console.log(param);
  const navLinks = [
    {
      name: "Home",
      url: "/",
    },
    {
      name: "Cash Manager",
      url: "/cash-manager",
    },
    {
      name: "Lucky Birthday",
      url: "/lucky-birthday",
    },
    {
      name: "Contact",
      url: "/contact",
    },
  ];

  return (
    <nav className="w-full flex items-center justify-between gap-2 bg-zinc-200 dark:bg-zinc-700 px-8">
      <Link to="/" className="uppercase text-xl text-zinc-500">
        Saleem Projects
      </Link>
      <div className="flex items-center">
        {navLinks.map((link, i) => (
          <NavLink
            key={i}
            className={({ isActive }) =>
              isActive
                ? "bg-zinc-100 dark:bg-zinc-800"
                : "bg-zinc-200 dark:bg-zinc-700 "
            }
            to={link.url}
          >
            <div className="px-4 py-2 text-sm">{link.name}</div>
          </NavLink>
        ))}
      </div>
      <div
        className="text-sm cursor-pointer flex gap-2 dark:bg-zinc-100 bg-zinc-800 p-[1px] rounded-full"
        onClick={() => setmode((prv) => !prv)}
      >
        <div className="bg-zinc-100 text-black rounded-full p-[1px]">
          <CiLight />
        </div>
        <div className="bg-zinc-800 text-white rounded-full p-[1px]">
          <CiDark />
        </div>
      </div>
    </nav>
  );
};

export default Header;
