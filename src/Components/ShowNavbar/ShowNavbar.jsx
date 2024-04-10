import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const ShowNavbar = ({ children }) => {
  const location = useLocation();
  const [renderNav, setRenderNav] = useState(false);
  useEffect(() => {
    console.log(location.pathname);
    if (location.pathname === "*") {
      setRenderNav(false);
    } else {
      setRenderNav(true);
    }
  }, [location]);
  return <div>{renderNav && children}</div>;
};

export default ShowNavbar;
