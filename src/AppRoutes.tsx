import { Route, Routes } from "react-router-dom";
import Layout from "./layout/layout";
import Homepage from "./pages/Homepage";

export default function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout>
            <Homepage />
          </Layout>
        }
      />
    </Routes>
  );
}
