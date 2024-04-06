import { Link, Outlet } from "react-router-dom";
import CashManager from "../Projects/CashManager";
import projects from "../projects";

const Projects = () => {
  return (
    <div className="w-full flex">
      <div className="md:flex flex-col bg-zinc-200 dark:bg-zinc-700 hidden">
        {projects.map((item, index) => (
          <Link
            to={item.route}
            key={index}
            className="px-4 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 "
          >
            {item.name}
          </Link>
        ))}
      </div>
      <div className="flex items-center justify-center flex-1">
        <Outlet />
      </div>
    </div>
  );
};

export default Projects;
