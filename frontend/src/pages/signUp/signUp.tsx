import useSignUp from "./hook/useSignUp";
import { signUpSchema } from "@/utils/zodSchema";
import { slideTitle, slideText, slideTitle2, slideText2, slideTitle3, slideText3 } from "@/utils/constants/slideInfo";
import slideAuth from "@/assets/images/slideAuth.png";
import slideAuth2 from "@/assets/images/slideAuth2.png";
import slideAuth3 from "@/assets/images/slideAuth3.png";

import GridContainer from "@/containers/gridContainer/gridContainer";
import Form from "@/components/ui/form/form";
import SignUpForm from "@/components/signUpForm/signUpForm";
import Carousel from "@/components/ui/carousel/carousel";
import Slide from "@/containers/slide/slide";
import { Link } from "react-router-dom";

// styles
import "./signUp.css";

export const SignUp = () => {
  const { user, signUpUser } = useSignUp();

  return (
    <div className="SignUp">
      <GridContainer className="SignUp__container">
        <div className="SignUp__slider">
          <Carousel autoplay>
            <Slide title={slideTitle} text={slideText} img={slideAuth} />
            <Slide title={slideTitle2} text={slideText2} img={slideAuth2} />
            <Slide title={slideTitle3} text={slideText3} img={slideAuth3} />
          </Carousel>
        </div>
        <div className="SignUp__content">
          <div className="SignUp__box">
            <h1 className="SignUp__box-title">Benvenuto!</h1>
            <p className="SignUp__box-text">Crea un account per iniziare a utilizzare l'applicazione.</p>
            <Form
              key="signUpForm"
              className="SignUp__form"
              formValues={user}
              formSchema={signUpSchema}
              onSubmitForm={signUpUser}
            >
              <SignUpForm />
            </Form>
            <p className="SignUp__text">
              Hai già un account?{" "}
              <Link className="SignUp__text-link" to="/">
                Accedi
              </Link>
            </p>
          </div>
        </div>
      </GridContainer>
    </div>
  );
};
