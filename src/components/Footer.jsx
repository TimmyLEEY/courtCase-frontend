export default function Footer() {
  return (
    <footer className="bg-[#0c2d5a] text-white">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:py-10">
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          <div className="flex gap-4">
            <img
              src="/logo_gold.webp"
              alt="Seal"
              className="w-14 h-14 sm:w-16 sm:h-16 object-contain"
            />
            <div>
              <h3 className="font-bold text-base sm:text-lg leading-tight">
                HAMILTON COUNTY
                <br />
                CLERK OF COURTS
              </h3>
              <p className="mt-2 text-sm text-blue-100">
                1000 Main St, Cincinnati, OH 45202
              </p>
              <p className="text-sm text-blue-100">
                Hours: 8AM – 4PM Monday – Friday
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-6 sm:gap-10">
            <div className="space-y-2 text-sm">
              <a href="#" className="block hover:underline">E-Filing</a>
              <a href="#" className="block hover:underline">FAQ</a>
              <a href="#" className="block hover:underline">Policies</a>
            </div>

            <div>
              <select className="bg-white text-gray-800 text-sm rounded px-3 py-1.5">
                <option>Select Language</option>
                <option>English</option>
                <option>Spanish</option>
              </select>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/20 text-center text-sm text-blue-200">
          © 2022 Hamilton County Clerk of Courts | All Rights Reserved |{" "}
          <a href="#" className="hover:underline">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
}