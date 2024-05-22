import { useState, useCallback, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { onAuthStateChanged, getAuth, type User } from "firebase/auth";
import { toast } from "react-toastify";
import { getUser } from "@/services/firebaseQuery";

const useAutoLogin = () => {
  const [loader, setLoader] = useState(true);
  const navigate = useNavigate();

  // check if user signed in before
  const checkUserSign = useCallback(() => {
    return onAuthStateChanged(getAuth(), async (user: User | null) => {
      setLoader(true);
      if (!user) return setLoader(false);

      setTimeout(async () => {
        try {
          const { uid } = (user as any).toJSON();
          const userInfo = await getUser(uid);
          localStorage.setItem("user", JSON.stringify({ ...userInfo }));
          setLoader(false);
          navigate("/verify-account")
        } catch (error: any) {
          setLoader(false);
          toast.error(error.message);
        }
      }, 2000);
    });
  }, [navigate]);

  useEffect(() => {
    const unsubscribe = checkUserSign();

    return () => {
      unsubscribe();
    };
  }, [checkUserSign]);

  return { loader };
};

export default useAutoLogin;
