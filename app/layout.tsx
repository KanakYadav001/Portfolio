import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import Providers from "@/components/Providers";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Kanak Yadav | Full-stack Developer | Portfolio",
  description:
    "Welcome to my portfolio! I'm Kanak Yadav, a passionate full-stack developer with expertise in building dynamic web applications. Explore my projects, skills, and experience in web development.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} h-full antialiased scrollbar-none`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col ">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
