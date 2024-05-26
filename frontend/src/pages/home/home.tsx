import type { FetcherSubmitFunction } from "react-router-dom";
import useMessage from "../../layouts/homeLayout/chatBox/hook/useMessage";

// components
import ChatForm from "../../components/chatForm/chatForm";
import SidebarMenu from "@/layouts/headerMobile/sidebarMenu/sidebarMenu";
import AddChat from "@/components/addChat/addChat";
import Form from "@/components/ui/form/form";

// styles
import "./home.scss";

export const Home = () => {
  const { message } = useMessage();

  return (
    <div className="Home">
      <div className="Home__box">
        <div className="Home__header">
          <div className="Home__content">
            <SidebarMenu />
            <AddChat className="Home__addChat" />
          </div>
        </div>
      </div>
      <div className="Home__box-2">
        <div className="Home__wrapper">
          <Form
            formValues={{ message }}
            onSubmitForm={function (data: object, fetcherSubmit: FetcherSubmitFunction): void {
              throw new Error("Function not implemented.");
            }}
          >
            <ChatForm isDisable={message === ""} />
          </Form>
          <p className="Home__text">
            SecureGuide può commettere errori. Considera di verificare le informazioni importanti.
          </p>
        </div>
      </div>
    </div>
  );
};
