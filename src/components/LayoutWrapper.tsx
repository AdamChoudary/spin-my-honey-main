import { Outlet } from "react-router-dom";
import { Layout } from "./Layout";

export const LayoutWrapper = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};