import useFocusTextAreaCtx from "@/context/focusTextAreaCtx/useFocusTextAreaCtx";
import useResizingTextarea from "./hook/useResizingTextarea";

// components
import Textarea from "@/components/ui/textarea/textarea";
import Button from "@/components/ui/button/button";
import { ArrowUp } from "lucide-react";

// styles
import "./chatForm.scss";

// chat form props
interface ChatFormProps {
  isDisable: boolean;
  setMessage: (message: string) => void;
  formState?: string;
  formResult?: any;
}

const ChatForm = ({ isDisable, setMessage }: ChatFormProps) => {
  const { refTextArea } = useFocusTextAreaCtx();
  useResizingTextarea(refTextArea);

  return (
    <div className="ChatForm">
      <div className="ChatForm__inner">
        <Textarea
          ref={refTextArea}
          className="ChatForm__textarea"
          name="message"
          placeholder="Scrivi a SecureGuide"
          onChange={(e: any) => setMessage(e.target.value)}
        />
        <Button disabled={isDisable} className="ChatForm__button" size="sm" variant="primary">
          <ArrowUp size={24} />
        </Button>
      </div>
    </div>
  );
};

export default ChatForm;
