import useSignIn from "./hook/useSignIn";
import { signInSchema } from "@/utils/zodSchema";
import { slideTitle, slideText, slideTitle2, slideText2, slideTitle3, slideText3 } from "@/utils/constants/slideInfo";
import slideAuth from "@/assets/images/slideAuth.png";
import slideAuth2 from "@/assets/images/slideAuth2.png";
import slideAuth3 from "@/assets/images/slideAuth3.png";

// components
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
            <Slide title={slideTitle} text={slideText} img={slideAuth} />
            <Slide title={slideTitle2} text={slideText2} img={slideAuth2} />
            <Slide title={slideTitle3} text={slideText3} img={slideAuth3} />
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
