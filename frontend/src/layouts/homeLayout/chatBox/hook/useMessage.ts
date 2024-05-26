import type { FetcherSubmitFunction } from "react-router-dom";
import type { SubmitTarget } from "react-router-dom/dist/dom";

const useMessage = () => {
  const message = "";

  // send message action
  const sendMessage = (data: object, fetcherSubmit: FetcherSubmitFunction) => {
    fetcherSubmit(data as SubmitTarget, { method: "post", action: "/?index" });
  };

  return { message, sendMessage };
};

export default useMessage;
