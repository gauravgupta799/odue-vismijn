import { z} from "zod";

export const contactSchema = z.object({
    name: z.string().trim().min(1, "Naam is verplicht.").min(2, "De naam is te kort.").max(50, "De naam is te lang.").regex(/^[a-zA-ZÀ-ÿ\s]+$/,"De naam mag alleen letters bevatten."),

    email: z.string().trim().toLowerCase().min(1, "E-mailadres is vereist.").email("Voer een geldig e-mailadres in.").max(100, "De e-mail is te lang."),

    phone: z.string().trim().min(1, "Telefoonnummer is verplicht").min(7, "Het telefoonnummer is te kort.").max(20, "Het telefoonnummer is te lang.").regex(/^[+]?[\d\s().-]+$/, "Voer een geldig telefoonnummer in."),

    message: z.string().trim().min(10, "Vertel ons alsjeblieft iets meer over uw idee.")
    .max(2000, "Het bericht is te lang."),
});


export type ContactFormData = z.infer<typeof contactSchema>;

