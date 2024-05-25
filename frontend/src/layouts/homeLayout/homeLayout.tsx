import useWindowSize from "@/hooks/useWindowSize";

// components
import Container from "@/containers/container/container";
import Sidebar from "@/layouts/sidebar/sidebar";
import { Outlet } from "react-router-dom";

// context providers
import { ChatsProvider } from "@/context/chatsCtx/chatsCtx";
import { FocusTextAreaCtxProvider } from "@/context/focusTextAreaCtx/focusTextAreaCtx";

// styles
import "./homeLayout.scss";

const HomeLayout = () => {
  const { width } = useWindowSize();

  return (
    <div className="HomeLayout">
      <Container className="HomeLayout__container" full>
        <ChatsProvider>
          <FocusTextAreaCtxProvider>
            {width > 1023 && <Sidebar />}
            <Outlet />
          </FocusTextAreaCtxProvider>
        </ChatsProvider>
      </Container>
    </div>
  );
};

export default HomeLayout;
