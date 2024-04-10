import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div>
      <p>404</p>
      <p>page not found</p>
      <Link to={"/"}>back to homepage</Link>
    </div>
  );
};

export default Error;
