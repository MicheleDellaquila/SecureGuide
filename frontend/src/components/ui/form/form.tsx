import { type PropsWithChildren, Children, isValidElement, cloneElement, useEffect, forwardRef } from "react";
import { type FetcherFormProps, type FetcherSubmitFunction, useFetcher } from "react-router-dom";
import type { ZodSchema } from "zod";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// form props
interface FormProps extends FetcherFormProps {
  className?: string;
  formValues: object;
  formSchema?: ZodSchema<object>;
  onSubmitForm: (data: any, fetcherSubmit: FetcherSubmitFunction) => void;
}

const Form = forwardRef<HTMLFormElement, PropsWithChildren<FormProps>>(
  ({ className, formValues, formSchema, onSubmitForm, children, ...props }, ref) => {
    const { Form, data, state, submit } = useFetcher();
    const methods = useForm({ defaultValues: formValues, resolver: formSchema && zodResolver(formSchema) });
    const onSubmit = methods.handleSubmit(data => onSubmitForm(data, submit));

    // reset form if data is correct and fetcher is successful
    useEffect(() => {
      if (!data) return;

      // reset form if fetcher is successful
      if (data.ok) methods.reset();
    }, [data]);

    // share of fetcher state to children
    const childrenWithProps = Children.map(children, child => {
      if (!child || !isValidElement<any>(child)) return;

      // check if formSchema is defined
      if (!formSchema)
        return cloneElement(child, {
          formState: state,
          formResult: data,
        });

      return cloneElement(child, {
        formState: state,
        errors: methods.formState.errors,
        formResult: data,
        onClearErrors: methods.clearErrors,
      });
    });

    return (
      <FormProvider {...methods}>
        <Form
          ref={ref}
          className={className}
          onSubmit={async e => {
            e.preventDefault();
            e.stopPropagation();
            onSubmit();
          }}
          {...props}
          noValidate
        >
          {childrenWithProps}
        </Form>
      </FormProvider>
    );
  },
);

export default Form;
