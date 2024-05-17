import { z } from "zod";

const RegisterFormSchema = z
    .object({
        email: z.string().email(),
        password: z
            .string()
            .min(6, "Password must be at least 6 characters long")
            .regex(
                /[A-Z]/,
                "Password must contain at least one uppercase letter"
            )
            .regex(
                /[a-z]/,
                "Password must contain at least one lowercase letter"
            )
            .regex(/[0-9]/, "Password must contain at least one number"),
        confirmPassword: z.string(),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords do not match",
        path: ["confirmPassword"],
    });

const LoginFormSchema = z.object({
    email: z.string().email(),
    password: z.string().min(1, "Password is required"),
});

export { RegisterFormSchema, LoginFormSchema };
