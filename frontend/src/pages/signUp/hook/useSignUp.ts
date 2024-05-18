import type { FetcherSubmitFunction } from "react-router-dom";
import type { SubmitTarget } from "react-router-dom/dist/dom";

const useSignIn = () => {
  const user = { fullName: "", email: "", password: "" };

  // register user into the app
  const signUpUser = (data: object, fetcherSubmit: FetcherSubmitFunction) => {
    fetcherSubmit(data as SubmitTarget, { method: "post", action: "/signUp" });
  };

  return { user, signUpUser };
};

export default useSignIn;
