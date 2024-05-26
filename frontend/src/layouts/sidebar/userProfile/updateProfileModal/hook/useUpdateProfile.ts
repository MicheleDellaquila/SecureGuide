import type { FetcherSubmitFunction } from "react-router-dom";
import type { SubmitTarget } from "react-router-dom/dist/dom";

const useUpdateProfile = () => {
  const user = JSON.parse(localStorage.getItem("user") || "{}");

  // update user
  const updateUser = (data: object, fetcherSubmit: FetcherSubmitFunction) => {
    console.log(data)
    fetcherSubmit(data as SubmitTarget, { method: "PATCH", action: "/home" });
  };

  return { user, updateUser };
};

export default useUpdateProfile;
