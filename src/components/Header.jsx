import { Search, Phone, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
  const today = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <>
      {/* Top utility bar */}
      <div className="bg-[#0c2d5a] text-white text-sm">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-9">
          <span className="truncate text-xs sm:text-sm">{today}</span>
          <div className="flex items-center gap-4 sm:gap-6">
            <a href="#" className="hover:underline hidden sm:inline">
              Survey
            </a>
            <a href="#" className="hover:underline hidden sm:inline">
              My Portfolio
            </a>
            <a href="#" className="relative">
              <ShoppingCart size={18} />
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center">
                1
              </span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
           <Link to="/" className="flex items-center gap-3">
  <img
    src="/logo.webp"
    alt="Hamilton County Clerk of Courts"
    className="h-14 sm:h-20 w-auto object-contain"
  />
</Link>
          </div>

          {/* Desktop Social + Search */}
          <div className="hidden lg:flex items-center gap-4">
            <div className="flex items-center gap-4 text-[#0c2d5a]">
              <a href="#" className="hover:text-blue-600" title="Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
              <a href="#" className="hover:text-pink-600" title="Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
              </a>
              <a href="#" className="hover:text-sky-500" title="X">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a href="#" className="hover:text-green-600">
                <Phone size={20} />
              </a>
              <a href="#" className="font-medium hover:underline ml-1">
                Contact Us
              </a>
            </div>

            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="border border-gray-300 rounded-md pl-3 pr-10 py-2 text-sm w-52 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Search size={18} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}