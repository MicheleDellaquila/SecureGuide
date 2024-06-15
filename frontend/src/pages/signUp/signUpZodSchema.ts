import * as z from "zod";

const signUpSchema = z.object({
  fullName: z.string().min(1, { message: "Questo campo è richiesto" }),
  email: z.string({ message: "Questo campo è richiesto" }).email({ message: "Inserisci un indirizzo email valido" }),
  password: z
    .string({ message: "Questo campo è richiesto" })
    .min(8, { message: "La password deve contenere almeno 8 caratteri" }),
});

export default signUpSchema;
