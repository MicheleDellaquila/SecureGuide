import useSignUp from "./hook/useSignUp";
import { signUpSchema } from "@/utils/zodSchema";
import { slideTitle, slideText, slideTitle2, slideText2, slideTitle3, slideText3 } from "@/utils/constants/slideInfo";
import slideAuth from "@/assets/images/slideAuth.webp";
import slideAuth2 from "@/assets/images/slideAuth2.png";
import slideAuth3 from "@/assets/images/slideAuth3.png";

// components
import Container from "@/containers/container/container";
import Form from "@/components/ui/form/form";
import SignUpForm from "./signUpForm/signUpForm";
import Carousel from "@/components/ui/carousel/carousel";
import Slide from "@/containers/slide/slide";
import { Link } from "react-router-dom";

// styles
import "./signUp.scss";

export const SignUp = () => {
  const { user, signUpUser } = useSignUp();

  return (
    <div className="SignUp">
      <Container className="SignUp__container">
        <div className="col-xs-12 col-lg-7 SignIn__col-1">
          <Carousel autoplay>
            <Slide title={slideTitle} text={slideText} img={slideAuth} />
            <Slide title={slideTitle2} text={slideText2} img={slideAuth2} />
            <Slide title={slideTitle3} text={slideText3} img={slideAuth3} />
          </Carousel>
        </div>
        <div className="col-xs-12 col-md-8 col-lg-5 SignIn__col-2">
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
      </Container>
    </div>
  );
};
