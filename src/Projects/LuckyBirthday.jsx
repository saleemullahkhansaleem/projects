import { useEffect, useState } from "react";
import Input from "../components/Input";

const LuckyBirthday = () => {
  const [birthday, setBirthday] = useState("");
  const [luckyNum, setLuckyNum] = useState(0);
  const [isLucky, setIsLucky] = useState(false);

  useEffect(() => {
    setIsLucky(findLuck(birthday, luckyNum));
  }, [luckyNum, birthday]);

  const findLuck = (bd, num) => {
    const date = bd.replace(/-/g, "");
    let sum = 0;
    for (let i = 0; i < date.length; i++) {
      sum += +date[i];
    }
    return sum % num === 0 ? true : false;
  };
  return (
    <form className="rounded shadow p-4 flex flex-col gap-4 bg-zinc-200 dark:bg-zinc-700 w-80">
      <h2 className="text-xl">Is your birthday lucky?</h2>
      <div className="flex">
        <Input
          className="rounded-l"
          type="text"
          name="birth_date"
          id="birth_date"
          value={birthday || ""}
          placeholder="dd - mm - yyyy"
          onChange={(e) => {
            let value = e.target.value;
            value = value.replace(/[^\d]/g, "");
            value.length > 2 &&
              (value = value.substring(0, 2) + "-" + value.substring(2));
            value.length > 5 &&
              (value = value.substring(0, 5) + "-" + value.substring(5));
            value.length > 10 && (value = value.substring(0, 10));
            setBirthday(value);
          }}
          label="Birthday"
        />
        <Input
          className="rounded-r border-l"
          type="number"
          name="lucky_num"
          id="lucky_num"
          value={luckyNum || ""}
          placeholder={0}
          onChange={(e) => setLuckyNum(e.target.value.substring(0, 1))}
          label="Lucky # ( 1 - 9 )"
        />
      </div>
      {birthday.length === 10 && luckyNum > 0 && (
        <div>
          <h3 className="text-lg text-center text-orange-500">
            {isLucky ? "Congratulations" : "Sorry to say"}
          </h3>
          <p className="text-center">
            {isLucky ? "You have Lucky Birthday" : "Your birthday isn't Lucky"}
          </p>
        </div>
      )}
    </form>
  );
};

export default LuckyBirthday;
