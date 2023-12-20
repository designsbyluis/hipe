import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";

import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'HIPE',
  description: 'A community web application for students to find opportunities of internships, research, mentorships and more in their field of interest.'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang='en'>
        <body className={`${inter.className} bg-primary-500`}>
          <div className="w-full flex justify-center items-center min-h-screen">
            {children}
              </div>
          </body>
      </html>
    </ClerkProvider>
  );
}