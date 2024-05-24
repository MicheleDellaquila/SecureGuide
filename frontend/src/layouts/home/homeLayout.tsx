// components
import Container from "@/containers/container/container";
import Sidebar from "../sidebar/sidebar";
import { Outlet } from "react-router-dom";

// context providers
import { ChatsProvider } from "@/context/chatsCtx/chatsCtx";
import { FocusTextAreaCtxProvider } from "@/context/focusTextAreaCtx/focusTextAreaCtx";

// styles
import "./homeLayout.scss";

const HomeLayout = () => {
  

  return (
    <div className="HomeLayout">
      <Container className="HomeLayout__container" full>
        <ChatsProvider>
          <FocusTextAreaCtxProvider>
            <Sidebar />
            <Outlet />
          </FocusTextAreaCtxProvider>
        </ChatsProvider>
      </Container>
    </div>
  );
};

export default HomeLayout;
