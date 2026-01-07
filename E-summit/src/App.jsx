import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Naitik/Navbar";

import Home from "./pages/Home";
import Iplauction from "./pages/IPLAuction";
import Casestudy from "./pages/Casestudy";
import Keynote from "./pages/Keynote";
import Contact from "./pages/Contact";
import FooterSection from "./components/Naitik/footer";
import Bplan from "./pages/Bplan";

function App() {
  return (
    <>

      <Navbar />

      {/* Add top padding so content doesn't hide behind navbar */}
      <div className="pt-25 text-white bg-black min-h-screen">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/iplauction" element={<Iplauction/>} />
          <Route path="/casestudy" element={<Casestudy/>} />
          <Route path="/keynote" element={<Keynote/>} />
          <Route path="/bplan" element={<Bplan />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Routes>


<FooterSection />

      </div>
    </>
  );
}

export default App;



