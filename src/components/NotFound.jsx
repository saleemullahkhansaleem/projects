import { useNavigate } from "react-router-dom";
import Button from "./Button";
import { IoIosArrowRoundBack } from "react-icons/io";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="h-80 flex flex-col items-center justify-center gap-2">
      <h1>404 NotFound</h1>
      <Button icon={<IoIosArrowRoundBack />} onClick={() => navigate(-1)}>
        Go Back
      </Button>
    </div>
  );
};

export default NotFound;
