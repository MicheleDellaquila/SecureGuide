import type { FetcherSubmitFunction } from "react-router-dom";
import useFocusTextAreaCtx from "@/context/focusTextAreaCtx/useFocusTextAreaCtx";

// components
import Form from "../ui/form/form";
import Textarea from "../ui/textarea/textarea";

// styles
import "./chatForm.css";

const ChatForm = () => {
  const { refTextArea } = useFocusTextAreaCtx();

  return (
    <div className="ChatForm">
      {/* SONAR */}
      <Form
        className="ChatForm__form"
        formValues={{ message: "" }}
        onSubmitForm={function (data: object, fetcherSubmit: FetcherSubmitFunction): void {
          throw new Error("Function not implemented.");
        }}
      >
        <Textarea
          ref={refTextArea}
          className="ChatForm__textarea"
          name="message"
          placeholder="Scrivi un messaggio a SecureGuide"
        />
      </Form>
    </div>
  );
};

export default ChatForm;
