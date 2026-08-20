import { Search, CreditCard, Car, Upload, Shield, Ticket } from "lucide-react";


const services = [
  { icon: Search, label: "Name Search", href: "#" },
  { icon: CreditCard, label: "Payments", href: "#" },
  { icon: Car, label: "Get Your Auto Title", href: "#" },
  { icon: Upload, label: "E-Filing", href: "#", highlight: true },
  { icon: Shield, label: "File Protection Order", href: "#" },
  { icon: Ticket, label: "Ticket Information", href: "#" },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 py-6 sm:py-8">
        <div className="grid lg:grid-cols-[1fr_320px] gap-6">
          <div className="rounded-lg overflow-hidden shadow-lg">
            <img
              src="/PavanVParikh.webp"
              alt="Pavan V. Parikh"
              className="w-full h-auto object-cover object-top max-h-[420px] sm:max-h-[520px]"
            />
          </div>

          <div className="space-y-4">
            <div className="bg-white border rounded-lg p-4 shadow-sm flex items-center gap-3">
              <img
                src="/PavanVParikh.webp"
                alt="Pavan"
                className="w-14 h-14 rounded-full object-cover border-2 border-blue-100"
              />
              <div>
                <p className="font-semibold text-gray-800">Hamilton County Clerk</p>
                <p className="text-sm text-gray-500">of Courts</p>
              </div>
            </div>

            <div className="bg-white border border-red-200 rounded-lg overflow-hidden shadow-sm">
              <div className="bg-red-600 text-white text-center py-2 font-bold tracking-wide">
                SCAM ALERT
              </div>
              <div className="p-4 text-sm text-gray-700 space-y-3">
                <p className="font-medium text-red-700">
                  Protect Yourself, Family, and Friends From Payment Scams
                </p>
                <div>
                  <p className="font-semibold mb-1">What Do I Need to Bring to Pay A Bond?</p>
                  <ul className="list-disc pl-5 space-y-1 text-gray-600">
                    <li>
                      Bond payments in Hamilton County can only be{" "}
                      <strong>paid in person</strong> inside the Hamilton County Justice Center
                      located at 1000 Sycamore Street, Cincinnati, OH 45202.
                    </li>
                    <li>
                      Bond payments are accepted in the form of cash, or the following
                      credit/debit cards: Mastercard, Visa, American Express, or Discover.
                    </li>
                    <li>
                      Government issued photo identification is required for posting of bond.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="max-w-4xl mx-auto px-4 py-10 sm:py-12 text-center">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-5">
          Welcome to The Hamilton County Clerk of Courts
        </h2>
        <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
          The Office of the Hamilton County Clerk of Courts, under the leadership of Hamilton
          County Clerk, Pavan V. Parikh, is the official record keeper and agent of Hamilton
          County’s Adult Justice System. The Deputy Clerks are responsible for accepting,
          handling, managing, and retaining all legal documents filed through the Municipal
          Court, the Court of Common Pleas and the 1st District Court of Appeals. In addition,
          the Clerk’s office processes all auto titles, watercraft titles and applications for
          passports. The Hamilton County Clerk of Courts office strives to provide professional,
          efficient, and accessible service to all customers.
        </p>
      </section>

      {/* Service Cards */}
      <section className="max-w-7xl mx-auto px-4 pb-12 sm:pb-16">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 sm:gap-4">
          {services.map((service) => (
            <a
              key={service.label}
              href={service.href}
              className={`
                flex flex-col items-center justify-center gap-2 sm:gap-3 p-4 sm:p-6 rounded-xl text-white
                transition-all duration-200 hover:-translate-y-1 hover:shadow-lg
                ${
                  service.highlight
                    ? "bg-blue-600 ring-4 ring-blue-300 shadow-lg"
                    : "bg-[#1e5bb8] hover:bg-blue-700"
                }
              `}
            >
              <service.icon size={28} className="sm:w-9 sm:h-9" strokeWidth={1.5} />
              <span className="text-xs sm:text-sm font-semibold text-center leading-tight">
                {service.label}
              </span>
            </a>
          ))}
        </div>
      </section>
    </>
  );
}