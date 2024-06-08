import useSignIn from "./hook/useSignIn";
import signInSchema from "./signInZodSchema";
import { slideTitle, slideText, slideTitle2, slideText2, slideTitle3, slideText3 } from "@/utils/constants/slideInfo";
import slideAuth from "@/assets/images/slideAuth.webp";
import slideAuth2 from "@/assets/images/slideAuth2.png";
import slideAuth3 from "@/assets/images/slideAuth3.png";

// components
import Container from "@/layouts/container/container";
import Form from "@/components/ui/form/form";
import SignInForm from "./signInForm/signInForm";
import Carousel from "@/components/ui/carousel/carousel";
import Slide from "@/containers/slide/slide";
import { Link } from "react-router-dom";

// styles
import "./signIn.scss";

export const SignIn = () => {
  const { user, loginUser } = useSignIn();

  return (
    <div className="SignIn">
      <Container className="SignIn__container">
        <div className="col-xs-12 col-lg-7 SignIn__col-1">
          <Carousel autoplay>
            <Slide title={slideTitle} text={slideText} img={slideAuth} />
            <Slide title={slideTitle2} text={slideText2} img={slideAuth2} />
            <Slide title={slideTitle3} text={slideText3} img={slideAuth3} />
          </Carousel>
        </div>
        <div className="col-xs-12 col-md-8 col-lg-5 SignIn__col-2">
          <div className="SignIn__box">
            <h1 className="SignIn__box-title">Bentornato</h1>
            <p className="SignIn__box-text">
              Accedi a SecureGuide per proteggere e informati sulla privacy e sicurezza
            </p>
            <Form
              key="signInForm"
              className="SignIn__form"
              formValues={user}
              formSchema={signInSchema}
              onSubmitForm={loginUser}
            >
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
      </Container>
    </div>
  );
};
