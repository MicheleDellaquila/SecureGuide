// components
import GridContainer from "@/containers/gridContainer/gridContainer";
import Sidebar from "@/components/sidebar/sidebar";

// styles
import "./home.css";

export const Home = () => {
  return (
    <div className="Home">
      <GridContainer className="Home__container">
        <Sidebar />
        <div className="Home__chat">
          <p>chat</p>
        </div>
      </GridContainer>
    </div>
  );
};
