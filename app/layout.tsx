import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "../components/Navigation";
import AiAssistant from "../components/AiAssistant";
import CustomCursor from "../components/CustomCursor"; // <-- Add this import

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Premium Dev Portfolio",
  description: "A premium modern developer portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      {/* Add cursor-none to the body to hide the default mouse on desktop */}
      <body className={`${inter.variable} bg-background text-foreground antialiased selection:bg-accent selection:text-black overflow-x-hidden min-h-screen flex flex-col relative md:cursor-none`}>
        <div className="fixed inset-0 z-[-1] bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(0,255,157,0.1),rgba(255,255,255,0))]"></div>
        <CustomCursor /> {/* <-- Add the cursor component here */}
        <Navigation />
        <main className="flex-grow flex flex-col">{children}</main>
        <AiAssistant />
      </body>
    </html>
  );
}