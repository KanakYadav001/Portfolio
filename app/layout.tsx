import type { Metadata } from "next";
import { VT323 } from "next/font/google";
import Providers from "@/components/Providers";
import "./globals.css";


const vt323 = VT323({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-vt323",
});


export const metadata: Metadata = {
  title: "Kanak Yadav | Full-stack Developer | Portfolio",
  description: "Welcome to my portfolio! I'm Kanak Yadav, a passionate full-stack developer with expertise in building dynamic web applications. Explore my projects, skills, and experience in web development.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={ `${vt323.variable} h-full antialiased scrollbar-none`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col "><Providers>{children}</Providers></body>
    </html>
  );
}
