import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [selectedMenu, setSelectedMenu] = useState(3);
  const [active] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);

  const menuItems = [
    { name: "Work", path: "/work" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Ideas", path: "/ideas" },
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsAtTop(currentScrollY === 0);

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
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
    <div
      className={`navbar fixed top-0 w-full z-50 transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      } ${
        isAtTop
          ? "bg-orange-500 opacity-100"
          : "bg-orange-500 opacity-90 backdrop-blur-3xl"
      } py-4 px-6 flex items-center justify-between`}
    >
      <div className="logo">
        <h1 className="text-3xl text-white font-bold cursor-pointer">
          Suitmedia
        </h1>
      </div>
      <ul
        className={`menu flex gap-10 md:static fixed left-1/2 -translate-x-1/2 md:translate-x-0 md:opacity-100 md:top-10 justify-between transition-all md:transition-none rounded-br-lg rounded-bl-xl p-4 ${
          active ? "top-0 opacity-100" : "-top-10 opacity-0"
        }`}
      >
        {menuItems.map((item, index) => (
          <li key={index}>
            <NavLink
              to={item.path}
              onClick={() => setSelectedMenu(index)}
              className={`sm:text-lg text-base font-medium cursor-pointer transition-all
                ${
                  selectedMenu === index
                    ? "text-white underline underline-offset-4 decoration-white"
                    : "text-white hover:underline hover:underline-offset-4 hover:decoration-white"
                }`}
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
