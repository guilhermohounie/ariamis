import { Layout } from "@/components/common/Layout";
import type { NextPage } from "next";

const AboutPage: NextPage = () => {
  return (
    <Layout title="About">
      <p>
        Ariamis is{" "}
        <a
          href="https://www.hounie.me"
          target="_blank"
          rel="noreferrer"
          className="underline"
        >
          Guilhermo Hounie's
        </a>{" "}
        alter ego while creating webcomics.
      </p>
      <p>
        Inspired by{" "}
        <a
          href="https://www.hounie.me"
          target="_blank"
          rel="noreferrer"
          className="underline"
        >
          XKCD
        </a>
        , Ariamis is a webcomic of computer science, code and daily life
        ocurrences.
      </p>
      <p>
        I'm no artist, btw. Most of my stuff will always be plain and simple,
        coming from observations and annotations inside my head while I live
        life.
      </p>
    </Layout>
  );
};

export default AboutPage;
