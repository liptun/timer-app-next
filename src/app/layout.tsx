import React from "react";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "Timer app",
    description: "Count time like a pro™",
};

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
