import React from "react";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { SocialButtons } from "@/components/auth/socialButtons";

// TODO: Add websiteName to the AuthCardWrapperProps type
type AuthCardWrapperProps = {
    children: React.ReactNode;
    websiteName?: string;
    headerText: string;
    footerText: string;
    footerLink: string;
    showSocialButtons?: boolean;
};

const AuthCardWrapper = ({
    children,
    websiteName = "🔐Auth",
    headerText,
    footerLink,
    footerText,
    showSocialButtons,
}: AuthCardWrapperProps) => {
    return (
        <Card className="w-full mx-6 sm:max-w-md shadow-md px-3">
            <CardHeader className="text-center space-y-3">
                <CardTitle>{websiteName}</CardTitle>
                <h2>{headerText}</h2>
            </CardHeader>
            <CardContent>{children}</CardContent>
            {showSocialButtons && (
                <CardFooter>
                    <SocialButtons />
                </CardFooter>
            )}
            <CardFooter className="text-sm text-center space-x-1">
                <span>{footerText}</span>{" "}
                <Link
                    href={footerLink}
                    className="text-sky-500 hover:underline"
                >
                    here
                </Link>
            </CardFooter>
        </Card>
    );
};

export { AuthCardWrapper };
