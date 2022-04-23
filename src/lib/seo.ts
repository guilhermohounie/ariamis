import { DefaultSeoProps } from "next-seo";

// Default SEO props
export const defaultSeo: DefaultSeoProps = {
  titleTemplate: "%s | Ariamis",
  defaultTitle: "Ariamis",
  description: "webcomics of a cyberspace homeboy",
  openGraph: {
    type: "website",
    url: "http://ariamis.hounie.me",
    title: "ariamis",
    description: "webcomics of a cyberspace homeboy",
    images: [
      {
        height: 480,
        width: 620,
        url: "/assets/media/og.jpg",
        alt: "Ariamis",
      },
    ],
  },
};
