import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const navItems = [
  {
    title: "General Information",
    links: [
      "About the Clerk",
      "Locations & Hours",
      "Contact Us",
      "News",
    ],
  },
  {
    title: "Pay Online",
    links: [
      "Traffic Tickets",
      "Court Costs",
      "Child Support",
    ],
  },
  {
    title: "Forms",
    links: [
      "Civil Forms",
      "Criminal Forms",
      "Domestic Relations",
      "All Forms",
    ],
  },
  {
    title: "Our Office",
    links: [
      "Staff Directory",
      "Employment",
      "Public Records",
    ],
  },
  {
    title: "Records Search",
    links: [
      "Name Search",
      "Case Number Search",
      "Attorney Search",
    ],
  },
  {
    title: "Titles & Passports",
    links: [
      "Auto Titles",
      "Watercraft Titles",
      "Passports",
    ],
  },
  {
    title: "Self-Help",
    links: [
      "Help Center",
      "FAQ",
      "Guides",
    ],
  },
  {
    title: "Request Record",
    links: [
      "Online Request",
      "In-Person",
    ],
  },
];

// Map navigation labels to their routes
const getLinkPath = (link) => {
  const paths = {
    "About the Clerk": "/about",
    "Case Number Search": "/case-number-search",
  };

  return paths[link] || "#";
};

function Dropdown({ item }) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      {/* Dropdown Button */}
      <button
        type="button"
        className="flex items-center gap-1 px-3 py-4 text-sm font-medium text-white hover:bg-white/10 transition"
      >
        {item.title}

        <ChevronDown
          size={14}
          className={`transition-transform ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {/* Dropdown Menu */}
      {open && (
        <div className="absolute left-0 top-full z-50 min-w-[220px] bg-white shadow-xl border border-gray-100 rounded-b-md overflow-hidden">

          {item.links.map((link) => {
            const path = getLinkPath(link);

            return path !== "#" ? (
              <Link
                key={link}
                to={path}
                className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-800 transition"
              >
                {link}
              </Link>
            ) : (
              <a
                key={link}
                href="#"
                onClick={(e) => e.preventDefault()}
                className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-800 transition"
              >
                {link}
              </a>
            );
          })}

        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (title) => {
    setOpenAccordion(
      openAccordion === title ? null : title
    );
  };

  return (
    <>
      {/* ============================= */}
      {/* DESKTOP NAVBAR */}
      {/* ============================= */}

      <nav className="bg-[#0c2d5a] text-white sticky top-0 z-40 shadow-md hidden lg:block">
        <div className="max-w-7xl mx-auto px-2 flex flex-wrap justify-center lg:justify-start">

          {navItems.map((item) => (
            <Dropdown
              key={item.title}
              item={item}
            />
          ))}

        </div>
      </nav>


      {/* ============================= */}
      {/* MOBILE NAVBAR BUTTON */}
      {/* ============================= */}

      <div className="lg:hidden bg-[#0c2d5a] text-white px-4 py-3 flex justify-end">

        <button
          type="button"
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open menu"
        >
          <Menu size={26} />
        </button>

      </div>


      {/* ============================= */}
      {/* MOBILE MENU */}
      {/* ============================= */}

      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0c2d5a] text-white fixed inset-0 z-50 overflow-y-auto">

          {/* Mobile Header */}
          <div className="flex justify-between items-center p-4 border-b border-white/20">

            <span className="font-semibold text-lg">
              Menu
            </span>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X size={28} />
            </button>

          </div>


          {/* Mobile Navigation */}
          <div className="p-4 space-y-1">

            {navItems.map((item) => (
              <div key={item.title}>

                {/* Accordion Header */}
                <button
                  type="button"
                  onClick={() =>
                    toggleAccordion(item.title)
                  }
                  className="w-full flex justify-between items-center py-3 text-left font-medium"
                >
                  {item.title}

                  <ChevronDown
                    size={18}
                    className={`transition-transform ${
                      openAccordion === item.title
                        ? "rotate-180"
                        : ""
                    }`}
                  />
                </button>


                {/* Accordion Links */}
                {openAccordion === item.title && (
                  <div className="pl-4 pb-2 space-y-1">

                    {item.links.map((link) => {
                      const path = getLinkPath(link);

                      return path !== "#" ? (
                        <Link
                          key={link}
                          to={path}
                          onClick={() =>
                            setMobileMenuOpen(false)
                          }
                          className="block py-2 text-sm text-blue-100 hover:text-white transition"
                        >
                          {link}
                        </Link>
                      ) : (
                        <a
                          key={link}
                          href="#"
                          onClick={(e) =>
                            e.preventDefault()
                          }
                          className="block py-2 text-sm text-blue-100 hover:text-white transition"
                        >
                          {link}
                        </a>
                      );
                    })}

                  </div>
                )}

              </div>
            ))}

          </div>

        </div>
      )}
    </>
  );
}