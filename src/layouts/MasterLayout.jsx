import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";

const MasterLayout = () => {
  return (
    <>
      <NavBar />
      <div className="my-8">
        <Outlet />
      </div>
    </>
  );
};

export default MasterLayout;
