import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { CiDark, CiLight } from "react-icons/ci";
import { IoMdMenu } from "react-icons/io";

const Header = ({ setmode, mode }) => {
  const [showMenu, setShowMenu] = useState(false);

  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

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
    <nav className="w-full flex flex-wrap items-center justify-between gap-2 bg-zinc-200 dark:bg-zinc-700 px-2 md:px-4 relative">
      <div
        className="block md:hidden"
        onClick={() => setShowMenu((prv) => !prv)}
      >
        <IoMdMenu />
      </div>
      <Link to="/" className="uppercase text-xl text-zinc-500">
        Saleem Projects
      </Link>
      <div
        ref={menuRef}
        className={`absolute md:static top-8 flex-col py-2 md:py-0 ${
          showMenu ? "flex" : "hidden"
        } md:flex md:flex-row items-center bg-zinc-700 z-10 shadow`}
      >
        {navLinks.map((link, i) => (
          <NavLink
            key={i}
            className={({ isActive }) =>
              isActive
                ? "bg-zinc-100 dark:bg-zinc-800 w-full md:w-auto"
                : "bg-zinc-200 dark:bg-zinc-700 w-full md:w-auto"
            }
            to={link.url}
            onClick={() => setShowMenu(false)}
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
