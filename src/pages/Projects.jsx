import { Link } from "react-router-dom";
import CashManager from "../Projects/CashManager";
import projects from "../projects";

const Projects = () => {
  return (
    <div className="w-full flex">
      <div className="flex flex-col bg-zinc-700">
        {projects.map((item, index) => (
          <Link
            to=""
            key={index}
            className="px-4 py-2 bg-zinc-700 hover:bg-zinc-800 "
          >
            {item.name}
          </Link>
        ))}
      </div>
      <div className="flex items-center justify-center flex-1">
        <CashManager />
      </div>
    </div>
  );
};

export default Projects;
