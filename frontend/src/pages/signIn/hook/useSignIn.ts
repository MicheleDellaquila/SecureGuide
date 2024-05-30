import type { FetcherSubmitFunction } from "react-router-dom";
import type { SubmitTarget } from "react-router-dom/dist/dom";

const useSignIn = () => {
  const user = { email: "", password: "" };

  // login user into the app
  const loginUser = (data: any, fetcherSubmit: FetcherSubmitFunction) => {
    fetcherSubmit(data as SubmitTarget, { method: "post", action: "/?index" });
  };

  return { user, loginUser };
};

export default useSignIn;
