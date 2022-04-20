import type { GetStaticProps, NextPage } from "next";
import { prisma } from "@/lib/prisma";
import { Comic } from "@prisma/client";

export const getStaticProps: GetStaticProps = async () => {
  const comics = await prisma.comic.findMany({ orderBy: { id: "desc" } });

  return {
    props: {
      comics,
    },
  };
};

interface ArchivePageProps {
  comics: Comic[];
}

const ArchivePage: NextPage<ArchivePageProps> = ({ comics }) => {
  return (
    <div>
      {comics.map((comic) => {
        return (
          <pre key={comic.id}>
            <code>{JSON.stringify(comic, undefined, 2)}</code>
          </pre>
        );
      })}
    </div>
  );
};

export default ArchivePage;
