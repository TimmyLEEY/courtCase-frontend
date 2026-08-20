import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

const CreateCase = () => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        caseNumber: "",
        court: "",
        caseCaption: "",
        judge: "",
        filedDate: "",
        caseType: "",
        parcelId: "",
        pleas: "",
        complaint: "",
        OutstandingBalance: "",
        totalDeposits: "",
        depositType: "Credit",
        totalCosts: "",
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        setLoading(true);
        setError("");
        setSuccess("");

        try {
            const token = localStorage.getItem("adminToken");

            const response = await api.post(
                "/cases",
                {
                    ...formData,
                    totalDeposits: Number(formData.totalDeposits) || 0,
                    totalCosts: Number(formData.totalCosts) || 0,
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            setSuccess(
                `Case ${response.data.case.caseNumber} created successfully.`
            );

            setFormData({
                caseNumber: "",
                court: "",
                caseCaption: "",
                judge: "",
                filedDate: "",
                caseType: "",
                parcelId: "",
                pleas: "",
                complaint: "",
                OutstandingBalance: "",
                totalDeposits: "",
                depositType: "Credit",
                totalCosts: "",
            });
        } catch (error) {
            if (error.response?.status === 401) {
                localStorage.removeItem("adminToken");
                localStorage.removeItem("admin");
                navigate("/admin/login");
                return;
            }

            setError(
                error.response?.data?.message ||
                "Failed to create case."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="max-w-4xl mx-auto">

                <div className="mb-8">
                    <button
                        onClick={() => navigate("/admin/dashboard")}
                        className="text-blue-600 hover:underline mb-4"
                    >
                        ← Back to Dashboard
                    </button>

                    <h1 className="text-3xl font-bold text-gray-900">
                        Create New Case
                    </h1>

                    <p className="text-gray-500 mt-2">
                        Enter the details for the new court case.
                    </p>
                </div>

                {success && (
                    <div className="mb-6 bg-green-100 border border-green-300 text-green-700 px-4 py-3 rounded-lg">
                        {success}
                    </div>
                )}

                {error && (
                    <div className="mb-6 bg-red-100 border border-red-300 text-red-700 px-4 py-3 rounded-lg">
                        {error}
                    </div>
                )}

                <form
                    onSubmit={handleSubmit}
                    className="bg-white rounded-xl shadow-sm p-6"
                >

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                        {/* Case Number */}
                        <div>
                            <label className="block text-sm font-medium mb-2">
                                Case Number
                            </label>

                            <input
                                type="text"
                                name="caseNumber"
                                value={formData.caseNumber}
                                onChange={handleChange}
                                placeholder="A 2004078"
                                required
                                className="w-full border border-gray-300 rounded-lg px-4 py-3"
                            />
                        </div>

                        {/* Court */}
                        <div>
                            <label className="block text-sm font-medium mb-2">
                                Court
                            </label>

                            <input
                                type="text"
                                name="court"
                                value={formData.court}
                                onChange={handleChange}
                                placeholder="Common Pleas Civil"
                                required
                                className="w-full border border-gray-300 rounded-lg px-4 py-3"
                            />
                        </div>

                        {/* Case Caption */}
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium mb-2">
                                Case Caption
                            </label>

                            <input
                                type="text"
                                name="caseCaption"
                                value={formData.caseCaption}
                                onChange={handleChange}
                                placeholder="TREASURER HAMILTON COUNTY OHIO vs. PAULA J JERRAM"
                                required
                                className="w-full border border-gray-300 rounded-lg px-4 py-3"
                            />
                        </div>

                        {/* Judge */}
                        <div>
                            <label className="block text-sm font-medium mb-2">
                                Judge
                            </label>

                            <input
                                type="text"
                                name="judge"
                                value={formData.judge}
                                onChange={handleChange}
                                placeholder="LISA C ALLEN"
                                required
                                className="w-full border border-gray-300 rounded-lg px-4 py-3"
                            />
                        </div>

                        {/* Filed Date */}
                        <div>
                            <label className="block text-sm font-medium mb-2">
                                Filed Date
                            </label>

                            <input
                                type="date"
                                name="filedDate"
                                value={formData.filedDate}
                                onChange={handleChange}
                                required
                                className="w-full border border-gray-300 rounded-lg px-4 py-3"
                            />
                        </div>

                        {/* Case Type */}
                        <div>
                            <label className="block text-sm font-medium mb-2">
                                Case Type
                            </label>

                            <input
                                type="text"
                                name="caseType"
                                value={formData.caseType}
                                onChange={handleChange}
                                placeholder="E520 - FORECLOSURE - TAXES"
                                required
                                className="w-full border border-gray-300 rounded-lg px-4 py-3"
                            />
                        </div>

                        {/* Parcel ID */}
                        <div>
                            <label className="block text-sm font-medium mb-2">
                                Parcel ID
                            </label>

                            <input
                                type="text"
                                name="parcelId"
                                value={formData.parcelId}
                                onChange={handleChange}
                                placeholder="122-0002-0013-00"
                                className="w-full border border-gray-300 rounded-lg px-4 py-3"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium mb-2">
                                Complaint
                            </label>

                            <input
                                type="text"
                                name="complaint"
                                value={formData.complaint}
                                onChange={handleChange}
                                placeholder="Civil Division"
                                className="w-full border border-gray-300 rounded-lg px-4 py-3"
                            />
                        </div>



                        <div>
                            <label className="block text-sm font-medium mb-2">
                                Pleas
                            </label>

                            <input
                                type="text"
                                name="pleas"
                                value={formData.pleas}
                                onChange={handleChange}
                                placeholder="Civil Division"
                                className="w-full border border-gray-300 rounded-lg px-4 py-3"
                            />
                        </div>

                        {/* Total Deposits */}
                        <div>
                            <label className="block text-sm font-medium mb-2">
                                Total Deposits
                            </label>

                            <input
                                type="number"
                                step="0.01"
                                name="totalDeposits"
                                value={formData.totalDeposits}
                                onChange={handleChange}
                                placeholder="86915.23"
                                className="w-full border border-gray-300 rounded-lg px-4 py-3"
                            />
                        </div>

                         <div>
                            <label className="block text-sm font-medium mb-2">
                                Outstanding Balance
                            </label>

                            <input
                                type="number"
                                step="0.01"
                                name="OutstandingBalance"
                                value={formData.OutstandingBalance}
                                onChange={handleChange}
                                placeholder="86915.23"
                                className="w-full border border-gray-300 rounded-lg px-4 py-3"
                            />
                        </div>


                       

                        {/* Deposit Type */}
                        <div>
                            <label className="block text-sm font-medium mb-2">
                                Deposit Type
                            </label>

                            <select
                                name="depositType"
                                value={formData.depositType}
                                onChange={handleChange}
                                className="w-full border border-gray-300 rounded-lg px-4 py-3"
                            >
                                <option value="Credit">Credit</option>
                                <option value="Debit">Debit</option>
                            </select>
                        </div>

                        {/* Total Costs */}
                        <div>
                            <label className="block text-sm font-medium mb-2">
                                Total Costs
                            </label>

                            <input
                                type="number"
                                step="0.01"
                                name="totalCosts"
                                value={formData.totalCosts}
                                onChange={handleChange}
                                placeholder="5695.31"
                                className="w-full border border-gray-300 rounded-lg px-4 py-3"
                            />
                        </div>

                    </div>

                    <div className="mt-8 flex justify-end">
                        <button
                            type="submit"
                            disabled={loading}
                            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg disabled:opacity-50"
                        >
                            {loading ? "Creating Case..." : "Create Case"}
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default CreateCase;