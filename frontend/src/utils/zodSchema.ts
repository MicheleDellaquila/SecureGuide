import * as z from "zod";

export const signInSchema = z.object({
  email: z.string({ message: "Questo campo è richiesto" }).email({ message: "Inserisci un indirizzo email valido" }),
  password: z
    .string({ message: "Questo campo è richiesto" })
    .min(8, { message: "La password deve contenere almeno 8 caratteri" }),
});

export const signUpSchema = z.object({
  fullName: z.string({ message: "Questo campo è richiesto" }),
  email: z.string({ message: "Questo campo è richiesto" }).email({ message: "Inserisci un indirizzo email valido" }),
  password: z
    .string({ message: "Questo campo è richiesto" })
    .min(8, { message: "La password deve contenere almeno 8 caratteri" }),
});

export const updateProfileSchema = z.object({
  fullName: z.string({ message: "Questo campo è richiesto" }),
  email: z.string({ message: "Questo campo è richiesto" }).email({ message: "Inserisci un indirizzo email valido" }),
});
