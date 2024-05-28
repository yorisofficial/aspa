import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Asiansurface Academy",
    short_name: "Asiansurface Academy",
    description: "Asiansurface Academy",
    start_url: "/",
    display: "standalone",
    background_color: "#FAFAFA",
    theme_color: "#07529E",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
