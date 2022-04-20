import type { GetServerSideProps, NextPage } from "next";
import { prisma } from "@/lib/prisma";
import { Comic } from "@prisma/client";

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const id = query.id as number | undefined;

  const comic = await prisma.comic.findUnique({
    where: {
      id: Number(id),
    },
  });

  return {
    props: {
      comic,
    },
  };
};

interface ComicPageProps {
  comic: Comic;
}

const ComicPage: NextPage<ComicPageProps> = ({ comic }) => {
  return (
    <div>
      <pre>
        <code>{JSON.stringify(comic, undefined, 2)}</code>
      </pre>
    </div>
  );
};

export default ComicPage;
