// import { Routes, Route } from "react-router-dom";
// import Navbar from "./components/Naitik/Navbar";

// import Home from "./pages/Home";
// import Iplauction from "./pages/IPLAuction";
// import Casestudy from "./pages/Casestudy";
// import Keynote from "./pages/Keynote";
// import Contact from "./pages/Contact";
// import FooterSection from "./components/Naitik/footer";
// import Bplan from "./pages/Bplan";

// function App() {
//   return (
//     <>

//       <Navbar />


//       <div className="pt-25 text-white bg-black min-h-screen">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/IPLAuction" element={<Iplauction/>} />
//           <Route path="/Casestudy" element={<Casestudy/>} />
//           <Route path="/Keynote" element={<Keynote/>} />
//           <Route path="/Bplan" element={<Bplan />} />
//           <Route path="/Contact" element={<Contact />} />
//           <Route path="*" element={<h1>Page Not Found</h1>} />
//         </Routes>


// <FooterSection />

//       </div>
//     </>
//   );
// }

// export default App;



import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { Loader2 } from "lucide-react"; // Make sure you have lucide-react installed

import Navbar from "./components/Naitik/Navbar";
import FooterSection from "./components/Naitik/footer";
import LoadingScreen from "./components/Naitik/loader";

const Home = lazy(() => import("./pages/Home"));
const Iplauction = lazy(() => import("./pages/IPLAuction"));
const Casestudy = lazy(() => import("./pages/Casestudy"));
const Keynote = lazy(() => import("./pages/Keynote"));
const Contact = lazy(() => import("./pages/Contact"));
const Bplan = lazy(() => import("./pages/Bplan"));

// --- CUSTOM LOADER (Shows while pages switch) ---
const LoadingScreenComponent = () => (
  <LoadingScreen />
);

function App() {
  return (
    <>
      <Navbar />

      <div className="pt-25 text-white bg-black min-h-screen flex flex-col justify-between">

        {/* Suspense handles the loading state automatically */}
        <Suspense fallback={<LoadingScreenComponent />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/IPLAuction" element={<Iplauction />} />
            <Route path="/Casestudy" element={<Casestudy />} />
            <Route path="/Keynote" element={<Keynote />} />
            <Route path="/Bplan" element={<Bplan />} />
            <Route path="/Contact" element={<Contact />} />
            <Route path="*" element={<h1 className="text-center mt-20 text-4xl font-bold">404 - Page Not Found</h1>} />
          </Routes>
        </Suspense>

        <FooterSection />
      </div>
    </>
  );
}

export default App;