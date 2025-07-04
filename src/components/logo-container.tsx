import { Link } from "react-router-dom";

export const LogoContainer = () => {
  return (
    <Link to={"/"}>
      {/* <img
        src="/svg/logo.svg"
        alt="Logo"
        className="min-w-10 min-h-10 object-contain"
      /> */}

      <span className="text-xl font-bold text-primary mr-20">IntervieuAi</span>
      
    </Link>
  );
};
