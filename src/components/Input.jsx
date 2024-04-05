const Input = ({
  onChange,
  placeholder = "",
  className = "",
  value = "",
  type = "text",
  name = "",
  id = "",
  label = "Enter Value",
}) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-sm text-zinc-500" htmlFor={name}>
        {label}
      </label>
      <input
        className={`w-full bg-zinc-100 dark:bg-zinc-800 outline-none py-2 px-4 border-zinc-200 dark:border-zinc-700 ${className}`}
        type={type}
        name={name}
        id={id}
        value={value || ""}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
