import { Layout } from "@/components/common/Layout";
import type { NextPage } from "next";

const ServerErrorPage: NextPage = () => {
  return (
    <Layout title="Not found">
      <h1>Well, something killed Alison, the little server.</h1>
    </Layout>
  );
};

export default ServerErrorPage;
