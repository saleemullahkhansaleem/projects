import { Link } from "react-router-dom";

const Button = ({ icon, children, link, onClick }) => {
  return (
    <>
      {link ? (
        <Link
          onClick={onClick}
          to={link}
          className="dark:bg-zinc-700 bg-zinc-200 px-4 py-2 rounded hover:bg-zinc-300 dark:hover:bg-zinc-900 flex items-center gap-2"
          type="button"
        >
          <span className="text-lg">{icon}</span>
          <span className="text-sm">{children}</span>
        </Link>
      ) : (
        <button
          onClick={onClick}
          className="dark:bg-zinc-700 bg-zinc-200 px-4 py-2 rounded hover:bg-zinc-300 dark:hover:bg-zinc-900 flex items-center gap-2"
          type="button"
        >
          {icon && <span className="text-lg">{icon}</span>}
          <span className="text-sm">{children}</span>
        </button>
      )}
    </>
  );
};

export default Button;
