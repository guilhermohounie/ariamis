import type { GetServerSideProps, GetStaticProps, NextPage } from "next";
import { prisma } from "@/lib/prisma";

export const getServerSideProps: GetServerSideProps = async () => {
  const count = await prisma.comic.count();

  return {
    redirect: { destination: `/comics/${count}`, statusCode: 307 },
  };
};

interface IndexPageProps {}

const IndexPage: NextPage<IndexPageProps> = () => {
  return null;
};

export default IndexPage;
