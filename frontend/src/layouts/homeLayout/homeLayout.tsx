import useWindowSize from "@/hooks/useWindowSize";

// components
import Container from "@/containers/container/container";
import Header from "@/layouts/header/header";
import HeaderMobile from "@/layouts/headerMobile/headerMobile";
import Sidebar from "@/layouts/sidebar/sidebar";
import ChatBox from "./chatBox/chatBox";
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
            <div className="HomeLayout__box">
              {width > 1023 && <Header />}
              {width < 1024 && <HeaderMobile />}
              <main className="HomeLayout__main">
                <div className="HomeLayout__content">
                  <Outlet />
                </div>
                <ChatBox />
              </main>
            </div>
          </FocusTextAreaCtxProvider>
        </ChatsProvider>
      </Container>
    </div>
  );
};

export default HomeLayout;
