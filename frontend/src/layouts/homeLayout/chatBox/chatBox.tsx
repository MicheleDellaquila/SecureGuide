import useMessage from "./hook/useMessage";

// components
import Form from "@/components/ui/form/form";
import ChatForm from "@/components/chatForm/chatForm";

// styles
import "./chatBox.scss";

const ChatBox = () => {
  const { message, setMessage, sendMessage } = useMessage();
  const isBtnDisabled = message === "";

  return (
    <div className="ChatBox">
      <Form formValues={{ message }} onSubmitForm={sendMessage}>
        <ChatForm isDisable={isBtnDisabled} setMessage={setMessage} />
      </Form>
      <p className="ChatBox__text">
        SecureGuide può commettere errori. Considera di verificare le informazioni importanti.
      </p>
    </div>
  );
};

export default ChatBox;
