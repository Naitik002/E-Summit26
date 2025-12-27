import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Iplauction from "./pages/iplauction";
import Casestudy from "./pages/casestudy";
import Keynote from "./pages/keynote";
import Contact from "./pages/contact";

function App() {
  return (
    <>

      <Navbar />

      {/* Add top padding so content doesn't hide behind navbar */}
      <div className="pt-40 text-white bg-black min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/iplauction" element={<Iplauction/>} />
          <Route path="/casestudy" element={<Casestudy/>} />
          <Route path="/keynote" element={<Keynote/>} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
