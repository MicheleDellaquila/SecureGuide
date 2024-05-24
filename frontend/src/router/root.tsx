import { Outlet } from "react-router-dom";
import useAutoLogin from "./hook/useAutoLogin";

// components
import PageLoading from "@/containers/pageLoading/pageLoading";

export const Root = () => {
  const { loader } = useAutoLogin();

  // show spinner while checking user sign
  if (loader) return <PageLoading />;

  return <Outlet />;
};
