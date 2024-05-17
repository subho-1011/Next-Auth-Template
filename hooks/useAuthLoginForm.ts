import { z } from "zod";
import { useForm } from "react-hook-form";
import { LoginFormSchema } from "@/schemas";
import { zodResolver } from "@hookform/resolvers/zod";

function useAuthLoginForm() {
    const form = useForm<z.infer<typeof LoginFormSchema>>({
        resolver: zodResolver(LoginFormSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit = (data: z.infer<typeof LoginFormSchema>) => {
        console.log(data);
    };

    return { form, onSubmit };
}

export { useAuthLoginForm };
