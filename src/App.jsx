import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";

import Home from "./pages/Home";
import CaseNumberSearch from "./pages/CaseNumberSearch";
import About from "./pages/About";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import CreateCase from "./pages/admin/CreateCase";
import CaseSummary from "./pages/CaseSummary";
import NotFound from "./pages/NotFound";
// import Forms from "./pages/Forms";
// import Contact from "./pages/Contact";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/case-number-search"
          element={
            <Layout>
              <CaseNumberSearch />
            </Layout>
          }
        />
        <Route
          path="/about"
          element={
            <Layout>
              <About />
            </Layout>
          }
        />

        <Route
          path="/case-summary/:caseNumber"
          element={ <Layout>
            <CaseSummary />
          </Layout>
          }
        />

        <Route
          path="/admin/login"
          element={<AdminLogin />}
        />

        <Route
          path="/admin/dashboard"
          element={<AdminDashboard />}
        />


        <Route
          path="/admin/cases/create"
          element={<CreateCase />}
        />


        <Route path="*" element={<NotFound />} />



      </Routes>
    </BrowserRouter>
  );
}