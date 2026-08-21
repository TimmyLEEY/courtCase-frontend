import { useState } from "react";
import { HelpCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import api from "../services/api";

const courtOptions = [
  { id: "common-pleas-civil", label: "Common Pleas Civil" },
  { id: "common-pleas-criminal", label: "Common Pleas Criminal" },
  { id: "municipal-civil", label: "Municipal Civil" },
  { id: "municipal-criminal", label: "Municipal Criminal/Traffic" },
  { id: "domestic-relations", label: "Domestic Relations" },
  { id: "court-of-appeals", label: "Court of Appeals" },
];

export default function CaseNumberSearch() {
  const navigate = useNavigate();

  const [selectedCourts, setSelectedCourts] = useState(
    courtOptions.map((c) => c.id)
  );

  const [caseNumber, setCaseNumber] = useState("");

  // Loading state
  const [loading, setLoading] = useState(false);

  const allSelected =
    selectedCourts.length === courtOptions.length;

  const toggleAll = () => {
    if (loading) return;

    if (allSelected) {
      setSelectedCourts([]);
    } else {
      setSelectedCourts(
        courtOptions.map((c) => c.id)
      );
    }
  };

  const toggleCourt = (id) => {
    if (loading) return;

    setSelectedCourts((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  const handleSearch = async (e) => {
    e.preventDefault();

    if (!caseNumber.trim()) {
      alert("Please enter a case number.");
      return;
    }

    try {
      setLoading(true);

      const response = await api.get(
        `/cases/${encodeURIComponent(
          caseNumber.trim()
        )}`
      );

      if (response.data.case) {
        navigate(
          `/case-summary/${encodeURIComponent(
            response.data.case.caseNumber
          )}`
        );
      }
    } catch (error) {
      alert(
        error.response?.data?.message ||
          "Case not found."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gray-50 py-8 min-h-[70vh]">
      <div className="max-w-5xl mx-auto px-4">

        {/* Title Banner */}
        <div className="relative mb-8">

          <div className="bg-[#0c2d5a] h-12 sm:h-14"></div>

          <div className="absolute top-0 left-10 sm:left-8 -translate-y-1/2">
            <div className="bg-amber-500 text-white font-semibold text-lg sm:text-xl px-6 py-2.5 shadow-md">
              Search by Case Number
            </div>
          </div>

        </div>

        {/* Main Content Card */}
        <div className="bg-white rounded-lg shadow-md p-6 sm:p-8">

          <div className="grid lg:grid-cols-2 gap-8">

            {/* Left Side */}
            <div>

              <p className="font-medium text-gray-800 mb-3">
                Search for cases in:
              </p>

              {/* Toggle All */}
              <label
                className={`flex items-center gap-2 mb-3 ${
                  loading
                    ? "cursor-not-allowed opacity-60"
                    : "cursor-pointer"
                }`}
              >
                <input
                  type="checkbox"
                  checked={allSelected}
                  onChange={toggleAll}
                  disabled={loading}
                  className="w-4 h-4 accent-blue-600"
                />

                <span className="font-semibold text-gray-800">
                  Toggle All
                </span>
              </label>

              {/* Court Checkboxes */}
              <div className="space-y-2 mb-6">

                {courtOptions.map((court) => (
                  <label
                    key={court.id}
                    className={`flex items-center gap-2 ${
                      loading
                        ? "cursor-not-allowed opacity-60"
                        : "cursor-pointer"
                    }`}
                  >
                    <input
                      type="checkbox"
                      checked={selectedCourts.includes(
                        court.id
                      )}
                      onChange={() =>
                        toggleCourt(court.id)
                      }
                      disabled={loading}
                      className="w-4 h-4 accent-blue-600"
                    />

                    <span className="text-gray-700">
                      {court.label}
                    </span>
                  </label>
                ))}

              </div>

              {/* Case Number Input */}
              <div className="flex items-center gap-2">

                <input
                  type="text"
                  value={caseNumber}
                  onChange={(e) =>
                    setCaseNumber(e.target.value)
                  }
                  disabled={loading}
                  placeholder="Case Number"
                  className="border border-gray-300 rounded px-3 py-2 w-full max-w-xs focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
                />

                <button
                  type="button"
                  title="Help"
                  disabled={loading}
                  className="text-blue-600 hover:text-blue-800 disabled:opacity-50"
                >
                  <HelpCircle size={22} />
                </button>

              </div>

              {/* Search Button */}
              <button
                onClick={handleSearch}
                disabled={loading}
                className="mt-5 bg-[#0c2d5a] hover:bg-blue-900 disabled:bg-gray-500 disabled:cursor-not-allowed text-white font-medium px-6 py-2.5 rounded transition flex items-center justify-center gap-2 min-w-[110px]"
              >

                {loading ? (
                  <>
                    {/* Spinner */}
                    <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></span>

                    <span>
                      Searching...
                    </span>
                  </>
                ) : (
                  "Search"
                )}

              </button>

            </div>

            {/* Right Side - Notice Box */}
            <div>

              <div className="border-2 border-blue-800 rounded-md p-5">

                <h3 className="text-red-600 font-bold text-lg mb-3 text-center">
                  ** NOTICE **
                </h3>

                <p className="text-red-600 text-sm leading-relaxed">
                  Pursuant to Rule 45(C) of the Rules of
                  Superintendence for the Courts of Ohio, a
                  clerk of court is not required to offer
                  remote access to a particular case file or
                  case document. If you believe a case file or
                  particular document exists but is not
                  available online, please visit the Clerk’s
                  Office or submit an online request for a
                  copy of the specific record you are
                  attempting to obtain.
                </p>

              </div>

            </div>

          </div>

          {/* Bottom Notice */}
          <div className="mt-10 pt-6 border-t border-gray-200">

            <ul className="list-disc pl-5 text-sm text-gray-700 space-y-2">

              <li>
                The Hamilton County Clerk of Court website
                is intended for use by the general public. It
                is not intended as a source of information for
                those seeking copies of large quantities of
                records or a source for bulk downloads of
                data. Efforts to mine large quantities of data
                from this source will be detected and stopped.
                Users found to be in violation of this policy
                will be prevented from accessing the site
                further and may obtain records by contacting
                the clerk's office.
              </li>

            </ul>

          </div>

        </div>

      </div>
    </div>
  );
}