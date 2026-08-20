export default function About() {
  return (
    <div className="bg-gray-50 py-8 min-h-[70vh]">
      <div className="max-w-5xl mx-auto px-4">
        {/* Title Banner */}
        <div className="relative mb-10">
          <div className="bg-[#0c2d5a] h-12 sm:h-14"></div>
          <div className="absolute top-0 left-4 sm:left-8 -translate-y-1/2">
            <div className="bg-amber-500 text-white font-semibold text-lg sm:text-xl px-6 py-2.5 shadow">
              About the Clerk
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-lg shadow-sm p-6 sm:p-10">
          <h1 className="text-2xl sm:text-3xl font-semibold text-[#0c2d5a] mb-8">
            Meet Pavan V. Parikh, Hamilton County Clerk of Courts
          </h1>

          {/* Photo + First paragraphs */}
          <div className="flex flex-col lg:flex-row gap-8 mb-8">
            <div className="lg:w-2/5 flex-shrink-0">
              <img
                src="/PavanVParikh.webp"
                alt="Pavan V. Parikh"
                className="w-full rounded shadow-md object-cover"
              />
            </div>

            <div className="lg:w-3/5 space-y-5 text-gray-700 leading-relaxed">
              <p>
                Pavan V. Parikh is the Hamilton County Clerk of Courts. He was appointed in
                December 2021 and elected in 2022 and 2024 with over 53% of the vote.
                Pavan’s focus is on increasing access to justice, improving customer service,
                modernizing the Clerk’s office, and ensuring that the Clerk’s staff reflects the
                diversity of Hamilton County.
              </p>

              <p>
                A Cincinnati native, Pavan has dedicated his life to community service. After
                law school, he worked for Judge Nadine Allen on the Hamilton County Court of
                Common Pleas. Pavan then served as Chief Legal Counsel with the Ohio
                Senate Minority Caucus, monitoring and negotiating legislation on important
                issues like criminal justice reform, voting rights, constitutional law, and ethics.
              </p>
            </div>
          </div>

          {/* Remaining text */}
          <div className="space-y-5 text-gray-700 leading-relaxed">
            <p>
              In 2013, Pavan joined the US Army Reserve as a judge advocate and completed his
              service in March 2025, having attained the rank of major. As a military lawyer,
              Pavan served in a variety of roles at home and abroad including as a Special
              Victims Counsel representing victims of sexual assault.
            </p>

            <p>
              His varied experience in law also includes teaching as an adjunct professor at
              University of Cincinnati College of Law and Xavier University, running his own law
              firm, working in-house as counsel for Federal Home Loan Bank of Cincinnati, and
              volunteering on various boards and committees in the legal community.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}