import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";


/* =========================================================
   DASHBOARD
========================================================= */

function Dashboard() {
  return (
    <div className="min-h-screen bg-[#05050c] text-white">

      <div className="mx-auto max-w-7xl px-8 py-24">

        <h1 className="text-5xl font-bold">
          Merchant Dashboard
        </h1>

        <p className="mt-4 text-lg text-white/50">
          Manage your tools, materials, stock and shop information.
        </p>

      </div>

    </div>
  );
}


/* =========================================================
   SEARCH
========================================================= */

function Search() {
  return (
    <div className="min-h-screen bg-[#05050c] text-white">

      <div className="mx-auto max-w-7xl px-8 py-24">

        <h1 className="text-5xl font-bold">
          Search
        </h1>

        <p className="mt-4 text-lg text-white/50">
          Find tools, materials and prototype components near you.
        </p>

      </div>

    </div>
  );
}


/* =========================================================
   APP
========================================================= */

function App() {
  return (
    <BrowserRouter>

      {/* =====================================================
          GLOBAL HEADER
      ====================================================== */}

      <Header />


      {/* =====================================================
          ROUTES
      ====================================================== */}

      <Routes>

        {/* HOME */}

        <Route
          path="/"
          element={<Home />}
        />


        {/* SEARCH */}

        <Route
          path="/search"
          element={<Search />}
        />


        {/* DASHBOARD */}

        <Route
          path="/dashboard"
          element={<Dashboard />}
        />


        {/* ABOUT */}

        <Route
          path="/about"
          element={<About />}
        />

      </Routes>


      {/* =====================================================
          GLOBAL FOOTER
      ====================================================== */}

      <Footer />

    </BrowserRouter>
  );
}


export default App;