"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { AuthCardWrapper } from "@/components/auth/authCardWrapper";
import { EyeIcon, EyeOffIcon } from "lucide-react";

import { useAuthLoginForm } from "@/hooks/useAuthLoginForm";

export const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { form, onSubmit } = useAuthLoginForm();

    return (
        <AuthCardWrapper
            headerText="Welcome back!🫡"
            footerText="Don't have an account? Register"
            footerLink="/auth/register"
            showSocialButtons
        >
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                    <div className="space-y-3">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Email ✉️</FormLabel>
                                    <FormControl>
                                        <Input
                                            {...field}
                                            placeholder="example@mail.com"
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Password 🔑</FormLabel>
                                    <FormControl>
                                        <>
                                            <div className="relative">
                                                <Input
                                                    type={
                                                        showPassword
                                                            ? "text"
                                                            : "password"
                                                    }
                                                    placeholder="********"
                                                    {...field}
                                                />
                                                <span
                                                    onClick={() =>
                                                        setShowPassword(
                                                            !showPassword
                                                        )
                                                    }
                                                >
                                                    {showPassword ? (
                                                        <EyeIcon className="absolute right-3 top-2.5" />
                                                    ) : (
                                                        <EyeOffIcon className="absolute right-3 top-2.5" />
                                                    )}
                                                </span>
                                            </div>
                                        </>
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <Button type="submit">Login</Button>
                    </div>
                </form>
            </Form>
        </AuthCardWrapper>
    );
};
