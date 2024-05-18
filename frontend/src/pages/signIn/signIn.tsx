import useSignIn from "./hook/useSignIn";
import { signInSchema } from "@/utils/zodSchema";
import {
  slideSignInTitle,
  slideSignInText,
  slideSignIn2Title,
  slideSign2InText,
  slideSignIn3Title,
  slideSignIn3Text,
} from "@/utils/constants/slideInfo";
import slideSignIn from "@/assets/images/slideSignIn.png";
import slideSignIn2 from "@/assets/images/slideSignIn2.png";
import slideSignIn3 from "@/assets/images/slideSignIn3.png";

import GridContainer from "@/containers/gridContainer/gridContainer";
import Form from "@/components/ui/form/form";
import SignInForm from "@/components/signInForm/signInForm";
import Carousel from "@/components/ui/carousel/carousel";
import Slide from "@/containers/slide/slide";
import { Link } from "react-router-dom";

// styles
import "./signIn.css";

export const SignIn = () => {
  const { user, loginUser } = useSignIn();

  return (
    <div className="SignIn">
      <GridContainer className="SignIn__container">
        <div className="SignIn__slider">
          <Carousel autoplay>
            <Slide title={slideSignInTitle} text={slideSignInText} img={slideSignIn} />
            <Slide title={slideSignIn2Title} text={slideSign2InText} img={slideSignIn2} />
            <Slide title={slideSignIn3Title} text={slideSignIn3Text} img={slideSignIn3} />
          </Carousel>
        </div>
        <div className="SignIn__content">
          <div className="SignIn__box">
            <h1 className="SignIn__box-title">Bentornato</h1>
            <p className="SignIn__box-text">
              Accedi a SecureGuide per proteggere e informati sulla privacy e sicurezza
            </p>
            <Form className="SignIn__form" formValues={user} formSchema={signInSchema} onSubmitForm={loginUser}>
              <SignInForm />
            </Form>
            <p className="SignIn__text">
              Non hai ancora un account?{" "}
              <Link className="SignIn__text-link" to="/signUp">
                Crea account
              </Link>
            </p>
          </div>
        </div>
      </GridContainer>
    </div>
  );
};
