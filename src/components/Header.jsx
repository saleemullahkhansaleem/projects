import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
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
    <nav className="w-full flex items-center justify-center gap-2 bg-zinc-700">
      {navLinks.map((link, i) => (
        <Link key={i} className="p-4 hover:bg-zinc-800" to={link.url}>
          {link.name}
        </Link>
      ))}
    </nav>
  );
};

export default Header;
