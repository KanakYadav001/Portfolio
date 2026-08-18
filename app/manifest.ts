import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Kanak Yadav | Full-stack Developer Portfolio",
    short_name: "Kanak Yadav",
    description:
      "Official portfolio of Kanak Yadav - Full-stack Developer specializing in React, Next.js, Node.js, Express, TypeScript, and MongoDB.",
    start_url: "/",
    display: "standalone",
    background_color: "#000000",
    theme_color: "#000000",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
