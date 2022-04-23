import type { GetStaticProps, NextPage } from "next";
import { prisma } from "@/lib/prisma";
import { Comic } from "@prisma/client";
import { Layout } from "@/components/common/Layout";
import NextLink from "next/link";

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
    <Layout title="Archive">
      <ul className="grid gap-2 list-decimal list-inside">
        {comics.map((comic) => {
          return (
            <li key={comic.id}>
              <NextLink href={`/comics/${comic.id}`}>
                <a className="hover:underline">{comic.title}</a>
              </NextLink>
            </li>
          );
        })}
      </ul>
    </Layout>
  );
};

export default ArchivePage;
