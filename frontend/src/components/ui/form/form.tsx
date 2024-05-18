import { ReactNode, Children, isValidElement, cloneElement } from "react";
import { useFetcher, FetcherFormProps, FetcherSubmitFunction } from "react-router-dom";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import type { ZodSchema } from "zod";

// form props
interface FormProps extends FetcherFormProps {
  className?: string;
  formValues: object;
  formSchema: ZodSchema<object>;
  onSubmitForm: (data: object, fetcherSubmit: FetcherSubmitFunction) => void;
  children: ReactNode;
}

const Form = ({ className, formValues, formSchema, onSubmitForm, children, ...props }: FormProps) => {
  const { Form, data, state, submit } = useFetcher();
  const methods = useForm({ defaultValues: formValues, resolver: zodResolver(formSchema) });
  const onSubmit = methods.handleSubmit(data => onSubmitForm(data, submit));

  // share of fetcher state to children
  const childrenWithProps = Children.map(children, child => {
    if (!child || !isValidElement<any>(child)) return;

    return cloneElement(child, {
      formState: state,
      errors: methods.formState.errors,
      formResult: data,
      onClearErrors: methods.clearErrors,
    });
  });

  return (
    <FormProvider {...methods}>
      <Form className={className} onSubmit={onSubmit} {...props} noValidate>
        {childrenWithProps}
      </Form>
    </FormProvider>
  );
};

export default Form;
