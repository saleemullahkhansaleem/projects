import Button from "./Button";
import EmbeddedWebsite from "./EmbeddedWebsite";
import { MdWeb } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

const ProjectBox = ({ url, gitUrl, title, description, reverse }) => {
  return (
    <div
      className={`p-4 flex flex-col md:flex-row ${
        reverse && "md:flex-row-reverse"
      }`}
    >
      <EmbeddedWebsite
        className="w-full lg:w-1/2"
        title={title}
        src={url}
        height="400"
        width="100%"
      />
      <div className="w-full lg:w-1/2 py-2 px-8 flex flex-col justify-between gap-4">
        <div className="">
          <h2 className="text-xl">{title}</h2>
          <p className="text-zinc-500 py-2">{description}</p>
        </div>
        <div className="flex gap-2 justify-end">
          {url && <Button link={url} text="View Live" icon={<MdWeb />} />}
          {gitUrl && (
            <Button link={gitUrl} text="View Code" icon={<FaGithub />} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectBox;
