import useFocusTextAreaCtx from "@/context/focusTextAreaCtx/useFocusTextAreaCtx";

// components
import Textarea from "@/components/ui/textarea/textarea";
import Button from "@/components/ui/button/button";
import { ArrowUp } from "lucide-react";

// styles
import "./chatForm.scss";

// chat form props
interface ChatFormProps {
  isDisable: boolean;
  formState?: string;
  formResult?: any;
}

const ChatForm = ({ isDisable }: ChatFormProps) => {
  const { refTextArea } = useFocusTextAreaCtx();

  return (
    <div className="ChatForm">
      <div className="ChatForm__inner">
        <Textarea ref={refTextArea} className="ChatForm__textarea" name="message" placeholder="Scrivi a SecureGuide" />
        <Button disabled={isDisable} className="ChatForm__button" size="sm" variant="primary">
          <ArrowUp size={24} />
        </Button>
      </div>
    </div>
  );
};

export default ChatForm;
