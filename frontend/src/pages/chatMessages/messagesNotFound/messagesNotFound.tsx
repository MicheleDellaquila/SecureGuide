import "./messagesNotFound.scss";
import Logo from "@/components/ui/logo/logo";

const MessagesNotFound = () => {
  return (
    <div className="MessagesNotFound">
      <Logo width={72} height={72} />
      <p>Nessun messaggio inserito</p>
    </div>
  );
};

export default MessagesNotFound;
