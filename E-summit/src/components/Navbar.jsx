import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const location = useLocation();
  const navigate = useNavigate();
  const pathname = location.pathname;

  const navItems = [
    { name: "HOME", path: "/" },
    { name: "STARTUP EXP0", path: "https://esummit.ecellnitb.in/#" },
    { name: "CASE STUDY", path: "/casestudy" },
    { name: "IPL AUCTION", path: "/iplauction" },
    { name: "KEYNOTE SESSIONS", path: "/keynote" },
    { name: "CONTACT", path: "/contact" },
  ];

  // Scroll hide/show navbar
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.nav
      className="bg-black text-white fixed top-0 w-full z-100 transition-transform duration-300 exo-2 shadow-md"
      animate={{ y: showNavbar ? 0 : -135 }}
    >
      <div className="px-6 lg:px-16  flex justify-between items-center">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: pathname !== "/" ? 1.05 : 1 }}
          onClick={() => navigate("/")}
          className={`h-20 w-20 md:h-40 md:w-40 cursor-pointer flex items-center justify-center` }
        >
          <img src="/logo.png" alt="logo.png" />
        </motion.div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex space-x-8 text-lg font-semibold">
          {navItems.map((item) => {
            const isExternal = item.path.startsWith("http");

            return isExternal ? (
              <a
                key={item.name}
                href={item.path}
                target="_blank"
                rel="noopener noreferrer"
                className={`relative transition-all duration-300 hover:text-[#D66AF3] ${
                  pathname === item.path
                    ? "text-[#D66AF3] after:w-full"
                    : "after:w-0 hover:after:w-full"
                } after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:bg-[#D66AF3] after:transition-all`}
              >
                {item.name}
              </a>
            ) : (
              <li key={item.name}>
                <Link
                  to={item.path}
                  className={`relative transition-all duration-300 hover:text-[#D66AF3] ${
                    pathname === item.path
                      ? "text-[#D66AF3] after:w-full"
                      : "after:w-0 hover:after:w-full"
                  } after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:bg-[#D66AF3] after:transition-all`}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Mobile Button */}
        <button
          className="lg:hidden text-[#D66AF3] z-100"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <motion.div animate={{ rotate: menuOpen ? 90 : 0 }}>
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </motion.div>
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-black/95 backdrop-blur-md z-50 pt-24 flex flex-col items-center space-y-8 text-lg font-semibold"
          >
            {navItems.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
              >
                {item.path.startsWith("http") ? (
                  <a
                    href={item.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setMenuOpen(false)}
                    className={`${pathname == item.path ? 'text-[#D66AF3]' : ''}`}
                  >
                    {item.name}
                  </a>
                ) : (
                  <Link
                    to={item.path}
                    onClick={() => setMenuOpen(false)}
                    className={`${pathname == item.path ? 'text-[#D66AF3]' : ''}`}
                  >
                    {item.name}
                  </Link>
                )}
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
