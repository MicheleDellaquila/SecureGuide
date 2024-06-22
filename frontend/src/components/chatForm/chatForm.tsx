import useFocusTextAreaCtx from "@/context/focusTextAreaCtx/useFocusTextAreaCtx";
import useResizingTextarea from "./hooks/useResizingTextarea";
import useChatForm from "./hooks/useCreateChat";
import { useWatch } from "react-hook-form";

// components
import Textarea from "@ui/textarea/textarea";
import Button from "@ui/button/button";
import Icon from "../ui/icon/icon";

// styles
import "./chatForm.scss";

// chat form props
interface ChatFormProps {
  formState?: string;
  formResult?: any;
}

const ChatForm = ({ formState, formResult }: ChatFormProps) => {
  const { refTextArea } = useFocusTextAreaCtx();
  const { message } = useWatch();
  const { adjustHeight } = useResizingTextarea(refTextArea);
  const { blockTextArea } = useChatForm(formResult, adjustHeight, refTextArea);

  return (
    <div className="ChatForm">
      <div className="ChatForm__inner">
        <Textarea
          ref={refTextArea}
          className="ChatForm__textarea"
          name="message"
          placeholder="Scrivi a SecureGuide"
          onKeyDown={blockTextArea}
        />
        <Button
          disabled={!message || formState === "submitting"}
          className="ChatForm__button"
          size="sm"
          variant="primary"
        >
          <Icon name="ArrowUp" size={24} />
        </Button>
      </div>
    </div>
  );
};

export default ChatForm;
