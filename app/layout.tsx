import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import Providers from "@/components/Providers";
import "./globals.css";
import { Analytics } from '@vercel/analytics/next';

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://portfolio-beta-nine-dkfjn8selj.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Kanak Yadav | Full-stack Developer Portfolio",
    template: "%s | Kanak Yadav",
  },
  description:
    "Official portfolio of Kanak Yadav - Full-stack Developer specializing in React, Next.js, Node.js, Express, TypeScript, and MongoDB. Explore my projects, experience, and skills.",
  keywords: [
    "Kanak Yadav",
    "Kanak Yadav Portfolio",
    "Kanak Yadav Developer",
    "Kanak Yadav Full Stack Developer",
    "Kanak Yadav Software Engineer",
    "Kanak Yadav Web Developer",
    "Kanak Yadav GitHub",
    "Kanak Yadav LinkedIn",
    "KanakYadav001",
    "devkanakyadav",
    "Graphura Kanak Yadav",
    "Full-stack Developer",
    "React Developer",
    "Next.js Developer",
    "Node.js Developer",
    "TypeScript Developer",
    "Web Developer Portfolio",
  ],
  authors: [{ name: "Kanak Yadav", url: siteUrl }],
  creator: "Kanak Yadav",
  publisher: "Kanak Yadav",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Kanak Yadav | Full-stack Developer Portfolio",
    description:
      "Explore the official portfolio of Kanak Yadav. Full-stack Developer skilled in Next.js, React, Node.js, Express, TypeScript, and modern web applications.",
    url: siteUrl,
    siteName: "Kanak Yadav Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kanak Yadav | Full-stack Developer Portfolio",
    description:
      "Explore the official portfolio of Kanak Yadav. Full-stack Developer skilled in Next.js, React, Node.js, Express, TypeScript, and modern web applications.",
    creator: "@Kanakya56614223",
    site: "@Kanakya56614223",
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "technology",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${siteUrl}/#person`,
      name: "Kanak Yadav",
      alternateName: ["KanakYadav001", "Kanak Yadav Developer", "Kanak Yadav Portfolio"],
      jobTitle: "Full-stack Developer",
      description:
        "Full-stack Developer focused on building clean, scalable, and user-friendly applications with Next.js, React, Node.js, Express, TypeScript, and MongoDB.",
      url: siteUrl,
      email: "devkanakyadav@gmail.com",
      sameAs: [
        "https://github.com/KanakYadav001",
        "https://www.linkedin.com/in/kanakyadav01/",
        "https://x.com/Kanakya56614223",
      ],
      knowsAbout: [
        "Full-stack Development",
        "Web Development",
        "React",
        "Next.js",
        "Node.js",
        "Express.js",
        "TypeScript",
        "JavaScript",
        "MongoDB",
        "REST APIs",
        "AI Applications",
      ],
      worksFor: {
        "@type": "Organization",
        name: "Graphura",
        url: "https://www.linkedin.com/showcase/internship-in-graphura-india-private-limited",
      },
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Kanak Yadav Portfolio",
      description: "Official Portfolio website of Kanak Yadav - Full-stack Developer",
      publisher: {
        "@id": `${siteUrl}/#person`,
      },
      inLanguage: "en-US",
    },
    {
      "@type": "ProfilePage",
      "@id": `${siteUrl}/#webpage`,
      url: siteUrl,
      name: "Kanak Yadav - Full-stack Developer Portfolio",
      "isPartOf": {
        "@id": `${siteUrl}/#website`,
      },
      about: {
        "@id": `${siteUrl}/#person`,
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${manrope.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c"),
          }}
        />
      </head>
      <body className="min-h-full flex flex-col ">
        <Providers>{children}
           <Analytics />
        </Providers>
      </body>
    </html>
  );
}
