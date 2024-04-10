import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="flex flex-col items-center gap-8">
      <img src="/assets/404.svg" alt="404-error" className="w-3/5" />
      <Link className="bg-gray-400 rounded-md px-4 py-2" to={"/"}>
        Home
      </Link>
    </div>
  );
};

export default Error;
