import { useLocation, useNavigate } from "react-router-dom";

const Button = () => {
  const navigate = useNavigate();

  const { pathname } = useLocation();

  const handleMoreContact = () => {
    navigate(`/contact/`);
  };

  return (
    <div>
      <button onClick={handleMoreContact}>Contact</button>
      <p>Path : {pathname}</p>
    </div>
  );
};

export default Button;
