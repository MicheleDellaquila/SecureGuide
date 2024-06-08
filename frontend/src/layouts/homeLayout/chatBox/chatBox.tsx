import useMessage from "./hook/useMessage";

// components
import Form from "@/components/ui/form/form";
import ChatForm from "@/components/chatForm/chatForm";

// styles
import "./chatBox.scss";

const ChatBox = () => {
  const { message, sendMessage } = useMessage();

  return (
    <div className="ChatBox">
      <Form key="chat-box" formValues={{ message }} onSubmitForm={sendMessage}>
        <ChatForm />
      </Form>
      <p className="ChatBox__text">
        SecureGuide può commettere errori. Considera di verificare le informazioni importanti.
      </p>
    </div>
  );
};

export default ChatBox;
