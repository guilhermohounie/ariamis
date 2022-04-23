import type { GetServerSideProps, NextPage } from "next";
import { prisma } from "@/lib/prisma";
import { Comic } from "@prisma/client";
import Image from "next/image";
import NextLink from "next/link";
import { Layout } from "@/components/common/Layout";

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const id = query.id as number | undefined;

  const count = await prisma.comic.count();

  if (id && id > count) {
    return {
      redirect: {
        destination: "/",
        statusCode: 307,
      },
    };
  }

  try {
    const comic = await prisma.comic.findUnique({
      where: {
        id: Number(id),
      },
    });

    return {
      props: {
        comic,
        count,
      },
    };
  } catch (error) {
    return {
      redirect: {
        destination: "/404",
        statusCode: 307,
      },
    };
  }
};

interface ComicPageProps {
  comic: Comic;
  count: number;
}

const ComicPage: NextPage<ComicPageProps> = ({ comic, count }) => {
  const { title, description, source, hover, height, width } = comic;
  return (
    <Layout title={comic.title}>
      <div className="p-4 bg-white border">
        <h1 className="mb-4 text-2xl">{title}</h1>
        <Image
          title={hover}
          src={`/comics/${source}`}
          alt={hover}
          height={height}
          width={width}
          quality="100"
          layout="intrinsic"
        />
        <p>{description}</p>
      </div>
      <div className="flex justify-between mt-8">
        <NextLink href={comic.id !== 1 ? `/comics/${comic.id - 1}` : "#"}>
          <a aria-label="Previous" title="Previous">
            <Image
              src="/assets/media/previous.png"
              alt="Previous"
              height={36}
              width={70}
            />
          </a>
        </NextLink>
        {count !== comic.id && (
          <NextLink href={`/comics/${comic.id + 1}`}>
            <a aria-label="Next" title="Next">
              <Image
                src="/assets/media/next.png"
                alt="Next"
                height={36}
                width={70}
              />
            </a>
          </NextLink>
        )}
      </div>
    </Layout>
  );
};

export default ComicPage;
