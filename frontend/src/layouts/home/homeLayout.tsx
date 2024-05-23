import GridContainer from "@/containers/gridContainer/gridContainer";
import Sidebar from "../sidebar/sidebar";
import { Outlet } from "react-router-dom";
import { ChatsProvider } from "@/context/chatsCtx/chatsCtx";

// styles
import "./homeLayout.css";

const HomeLayout = () => {
  return (
    <div className="HomeLayout">
      <GridContainer className="HomeLayout__container">
        <ChatsProvider>
          <Sidebar />
          <Outlet />
        </ChatsProvider>
      </GridContainer>
    </div>
  );
};

export default HomeLayout;
