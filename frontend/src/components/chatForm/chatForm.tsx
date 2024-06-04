import useFocusTextAreaCtx from "@/context/focusTextAreaCtx/useFocusTextAreaCtx";
import useResizingTextarea from "./hooks/useResizingTextarea";
import { useWatch } from "react-hook-form";

// components
import Textarea from "@/components/ui/textarea/textarea";
import Button from "@/components/ui/button/button";
import { ArrowUp } from "lucide-react";

// styles
import "./chatForm.scss";
import useChatForm from "./hooks/useCreateChat";

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
          <ArrowUp size={24} />
        </Button>
      </div>
    </div>
  );
};

export default ChatForm;
