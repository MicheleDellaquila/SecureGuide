import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "@/services/firebase";
import { toast } from "react-toastify";

const useSignOut = () => {
  const navigate = useNavigate();

  // logout user from home
  const logoutUserHandler = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem("user");
      navigate("/");
    } catch (error) {
      toast.error("Errore durante il logout");
    }
  };

  return { logoutUserHandler };
};

export default useSignOut;
