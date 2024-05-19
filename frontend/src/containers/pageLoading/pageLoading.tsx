// components
import Spinner from "@/components/ui/spinner/spinner";

// styles
import "./pageLoading.css";

const PageLoading = () => {
  return (
    <div className="PageLoading">
      <Spinner size="lg" />
    </div>
  );
};

export default PageLoading;
