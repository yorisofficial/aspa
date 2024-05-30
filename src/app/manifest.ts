import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Asian Surf Performance Academy",
    short_name: "Asian Surf Performance Academy",
    description: "Asian Surf Performance Academy",
    start_url: "/",
    display: "standalone",
    background_color: "#FAFAFA",
    theme_color: "#07529E",
    icons: [
      {
        src: "././favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
