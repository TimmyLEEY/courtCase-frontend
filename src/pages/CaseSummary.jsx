import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../services/api";

const CaseSummary = () => {
    const { caseNumber } = useParams();
    const navigate = useNavigate();

    const [caseData, setCaseData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchCase = async () => {
            try {
                setLoading(true);
                setError("");

                const response = await api.get(
                    `/cases/${encodeURIComponent(caseNumber)}`
                );

                setCaseData(response.data.case);
            } catch (error) {
                setError(
                    error.response?.data?.message ||
                    "Unable to find this case."
                );
            } finally {
                setLoading(false);
            }
        };

        fetchCase();
    }, [caseNumber]);

    if (loading) {
        return (
            <div className="min-h-[70vh] flex items-center justify-center">
                <p className="text-gray-600">Loading case information...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="min-h-[70vh] bg-gray-50 py-12 px-4">
                <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8 text-center">
                    <h1 className="text-2xl font-bold text-gray-800 mb-3">
                        Case Not Found
                    </h1>

                    <p className="text-gray-600 mb-6">
                        {error}
                    </p>

                    <button
                        onClick={() => navigate(-1)}
                        className="bg-[#0c2d5a] text-white px-6 py-2.5 rounded"
                    >
                        Back to Search
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-gray-50 py-8 min-h-[70vh]">
            <div className="max-w-5xl mx-auto px-4">

                {/* Title */}
                <div className="relative mb-8">
                    <div className="bg-[#0c2d5a] h-12 sm:h-14"></div>

                    <div className="absolute top-0 left-10 sm:left-8 -translate-y-1/2">
                        <div className="bg-amber-500 text-white font-semibold text-lg sm:text-xl px-6 py-2.5 shadow-md">
                            Case Summary
                        </div>
                    </div>
                </div>

                {/* Case Summary */}
                <div className="bg-white rounded-lg shadow-md overflow-hidden">

                    <div className="bg-[#0c2d5a] text-white px-6 py-4">
                        <h1 className="text-xl font-semibold">
                            Case Summary
                        </h1>

                        <p className="text-blue-100 mt-1">
                            Case Number: {caseData.caseNumber}
                        </p>
                    </div>

                    <div className="p-6 sm:p-8">

                        <div className="border border-gray-300 rounded-md overflow-hidden">

                            <div className="grid grid-cols-1 sm:grid-cols-[220px_1fr] border-b">
                                <div className="font-semibold bg-gray-50 px-4 py-3">
                                    Case Number:
                                </div>
                                <div className="px-4 py-3">
                                    {caseData.caseNumber}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-[220px_1fr] border-b">
                                <div className="font-semibold bg-gray-50 px-4 py-3">
                                    Court:
                                </div>
                                <div className="px-4 py-3">
                                    {caseData.court}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-[220px_1fr] border-b">
                                <div className="font-semibold bg-gray-50 px-4 py-3">
                                    Case Caption:
                                </div>
                                <div className="px-4 py-3">
                                    {caseData.caseCaption}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-[220px_1fr] border-b">
                                <div className="font-semibold bg-gray-50 px-4 py-3">
                                    Judge:
                                </div>
                                <div className="px-4 py-3">
                                    {caseData.judge}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-[220px_1fr] border-b">
                                <div className="font-semibold bg-gray-50 px-4 py-3">
                                    Filed Date:
                                </div>
                                <div className="px-4 py-3">
                                    {new Date(
                                        caseData.filedDate
                                    ).toLocaleDateString("en-US")}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-[220px_1fr] border-b">
                                <div className="font-semibold bg-gray-50 px-4 py-3">
                                    Case Type:
                                </div>
                                <div className="px-4 py-3">
                                    {caseData.caseType}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-[220px_1fr] border-b">
                                <div className="font-semibold bg-gray-50 px-4 py-3">
                                    Parcel ID:
                                </div>
                                <div className="px-4 py-3">
                                    {caseData.parcelId || "N/A"}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-[220px_1fr] border-b">
                                <div className="font-semibold bg-gray-50 px-4 py-3">
                                    pleas:
                                </div>
                                <div className="px-4 py-3">
                                    {caseData.pleas || "N/A"}
                                </div>
                            </div>


                            <div className="grid grid-cols-1 sm:grid-cols-[220px_1fr] border-b">
                                <div className="font-semibold bg-gray-50 px-4 py-3">
                                    Complaint:
                                </div>
                                <div className="px-4 py-3">
                                    {caseData.complaint || "N/A"}
                                </div>
                            </div>




                            <div className="grid grid-cols-1 sm:grid-cols-[220px_1fr] border-b">
                                <div className="font-semibold bg-gray-50 px-4 py-3">
                                    Total Deposits:
                                </div>
                                <div className="px-4 py-3">
                                    $
                                    {Number(
                                        caseData.totalDeposits?.amount || 0
                                    ).toLocaleString("en-US", {
                                        minimumFractionDigits: 2,
                                        maximumFractionDigits: 2,
                                    })}{" "}
                                    {caseData.totalDeposits?.type}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-[220px_1fr] border-b">
                                <div className="font-semibold bg-gray-50 px-4 py-3">
                                    Outstanding-Balance:
                                </div>
                                <div className="px-4 py-3">
                                    $
                                    {Number(
                                        caseData.OutstandingBalance || 0
                                    ).toLocaleString("en-US", {
                                        minimumFractionDigits: 2,
                                        maximumFractionDigits: 2,
                                    })}{" "}
                                    {caseData.OutstandingBalance?.type}
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-[220px_1fr]">
                                <div className="font-semibold bg-gray-50 px-4 py-3">
                                    Total Costs:
                                </div>
                                <div className="px-4 py-3">
                                    $
                                    {Number(
                                        caseData.totalCosts || 0
                                    ).toLocaleString("en-US", {
                                        minimumFractionDigits: 2,
                                        maximumFractionDigits: 2,
                                    })}
                                </div>
                            </div>

                        </div>

                        <button
                            onClick={() => navigate(-1)}
                            className="mt-6 bg-[#0c2d5a] hover:bg-blue-900 text-white px-6 py-2.5 rounded"
                        >
                            ← Back to Search
                        </button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default CaseSummary;