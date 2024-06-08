import * as z from "zod";

const updateProfileSchema = z.object({
  fullName: z.string({ message: "Questo campo è richiesto" }),
  email: z.string({ message: "Questo campo è richiesto" }).email({ message: "Inserisci un indirizzo email valido" }),
});

export default updateProfileSchema;
