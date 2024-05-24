import Logo from "@/assets/icons/logo.png";

// components
import ChatForm from "@/components/chatForm/chatForm";

// styles
import "./home.css";

export const Home = () => {
  return (
    <div className="Home">
      <div className="Home__box">
        <img className="Home__box-logo" src={Logo} alt="lock" />
      </div>
      <div className="Home__content">
        <ChatForm />
        <p className="Home__text">
          SecureGuide può commettere errori. Considera di verificare le informazioni importanti.
        </p>
      </div>
    </div>
  );
};
