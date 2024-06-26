import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { CiDark, CiLight } from "react-icons/ci";
import { IoMdMenu } from "react-icons/io";
import Container from "./Container";
import projects from "../projects";

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
      name: "Projects",
      url: "/projects",
      subLinks: projects,
    },
    {
      name: "Contact",
      url: "/contact",
    },
  ];

  return (
    <div className="bg-zinc-200 dark:bg-zinc-700">
      <Container className="w-full flex flex-wrap items-center justify-between gap-2 px-2 md:px-4 relative">
        <div
          ref={menuRef}
          className="block md:hidden text-3xl"
          onClick={() => setShowMenu((prv) => !prv)}
        >
          <IoMdMenu />
        </div>
        <Link
          to="/"
          className="uppercase text-xl text-zinc-500 flex items-center gap-2"
        >
          <img
            src="../logo-light.webp"
            alt="Saleem Logo"
            width="25px"
            className="hidden dark:block"
          />
          <img
            src="../logo-dark.webp"
            alt="Saleem Logo"
            width="25px"
            className="dark:hidden block"
          />
          <h1>Saleem Projects</h1>
        </Link>
        <nav
          ref={menuRef}
          className={`absolute md:static top-8 flex-col py-2 md:py-0 ${
            showMenu ? "flex" : "hidden"
          } md:flex md:flex-row items-center bg-zinc-200 dark:bg-zinc-700 z-10 shadow md:shadow-none`}
        >
          {navLinks.map((link, i) =>
            !link?.subLinks ? (
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
                <div className="px-4 py-2 text-sm relative">{link.name}</div>
              </NavLink>
            ) : (
              <div
                key={i}
                className="group bg-zinc-200 dark:bg-zinc-700 w-full md:w-auto relative" //  "group bg-zinc-100 dark:bg-zinc-800 w-full md:w-auto"
                to={link.url}
                onClick={() => setShowMenu(false)}
              >
                <div className="px-4 py-2 text-sm">{link.name}</div>
                <div className="absolute top-8 left-0 bg-zinc-700 hidden group-hover:block hover:block">
                  {link?.subLinks &&
                    link?.subLinks.map((subLink, ind) => (
                      <NavLink
                        key={ind}
                        className={({ isActive }) =>
                          isActive
                            ? "bg-zinc-100 dark:bg-zinc-800 w-full md:w-auto"
                            : "bg-zinc-200 dark:bg-zinc-700 w-full md:w-auto"
                        }
                        to={subLink.route}
                        onClick={() => setShowMenu(false)}
                      >
                        <div className="px-4 py-2 text-sm relative whitespace-nowrap">
                          {subLink.name}
                        </div>
                      </NavLink>
                    ))}
                </div>
              </div>
            )
          )}
        </nav>
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
      </Container>
    </div>
  );
};

export default Header;
