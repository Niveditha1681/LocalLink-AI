import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./pages/Home";

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

function About() {
  return (
    <div className="min-h-screen bg-[#05050c] text-white">
      <div className="mx-auto max-w-7xl px-8 py-24">
        <h1 className="text-5xl font-bold">
          About LocalLink AI
        </h1>

        <p className="mt-4 max-w-2xl text-lg leading-8 text-white/50">
          LocalLink AI helps students and prototype builders find
          tools, materials and components available at nearby shops
          in real time.
        </p>
      </div>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>

      <Header />

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/search" element={<Search />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/about" element={<About />} />

      </Routes>

    </BrowserRouter>
  );
}

export default App;