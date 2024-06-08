import Spinner from "@/components/ui/spinner/spinner";

// styles
import "./pageLoading.scss";

const PageLoading = () => {
  return (
    <div className="PageLoading">
      <Spinner size="lg" />
    </div>
  );
};

export default PageLoading;
