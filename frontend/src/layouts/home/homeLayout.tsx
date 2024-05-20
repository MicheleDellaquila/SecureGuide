import GridContainer from "@/containers/gridContainer/gridContainer";
import Sidebar from "../sidebar/sidebar";
import { Outlet } from "react-router-dom";

// styles
import "./homeLayout.css";

const HomeLayout = () => {
  return (
    <div className="HomeLayout">
      <GridContainer className="HomeLayout__container">
        <Sidebar />
        <Outlet />
      </GridContainer>
    </div>
  );
};

export default HomeLayout;
