import { useEffect } from "react";
import useFocusTextAreaCtx from "@/context/focusTextAreaCtx/useFocusTextAreaCtx";
import useResizingTextarea from "./useResizingTextarea";
import { useWatch } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const useChatForm = (formResult: any) => {
  const { refTextArea } = useFocusTextAreaCtx();
  useResizingTextarea(refTextArea);
  const { message } = useWatch();
  const navigate = useNavigate();
  console.log(formResult);

  // create chat if form return a result
  useEffect(() => {
    // create chat in firebase
    if (!formResult) return;

    navigate(`/home/sadasdasdadad`);
  }, [formResult]);

  return { refTextArea, message };
};

export default useChatForm;
