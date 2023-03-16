import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import NotFoundImg from "../../assets/not-found.svg";

const NotFoundPage = () => {
  const [count, setCount] = useState(5);
  const navigate = useNavigate();

  const returnToIndexPage = () => {
    if (count === 0) {
      setCount((prevCount) => (prevCount = 0));
      return navigate("/");
    } else {
      setCount((prevCount) => prevCount - 1);
    }
  };

  useEffect(() => {
    const interval = setInterval(returnToIndexPage, 1000);
    return () => clearInterval(interval);
  }, [count]);
  return (
    <div className="w-full h-screen bg-gray-700 flex  justify-center flex-col items-center gap-10">
      <p className="w-14 h-14 grid place-items-center rounded-full bg-yellow-600 fontInter font-bold text-white">
        {count}
      </p>

      <img src={NotFoundImg} alt="404-not-found" width="20%" />
      <p className="text-white font-bold">
        Go back Index/Home page in {count} seconds
      </p>
      <p className="mt-5">
        <Link
          className="fontInter text-white hover:text-gray-500 transition-all"
          to="/"
        >
          Index / Home
        </Link>
      </p>
    </div>
  );
};

export default NotFoundPage;
