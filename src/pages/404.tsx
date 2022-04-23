import { Layout } from "@/components/common/Layout";
import type { NextPage } from "next";

const NotFoundPage: NextPage = () => {
  return (
    <Layout title="Not found">
      <h1>You got a 404, buddy.</h1>
    </Layout>
  );
};

export default NotFoundPage;
