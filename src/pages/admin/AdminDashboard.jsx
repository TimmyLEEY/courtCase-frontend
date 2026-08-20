import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";

const AdminDashboard = () => {
    const navigate = useNavigate();

    const [admin, setAdmin] = useState(null);
    const [cases, setCases] = useState([]);
    const [casesLoading, setCasesLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem("adminToken");

        if (!token) {
            navigate("/admin/login");
            return;
        }

        const getDashboardData = async () => {
            try {
                // Get admin profile
                const profileResponse = await api.get("/admin/profile", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                setAdmin(profileResponse.data.admin);

                // Get all cases
                const casesResponse = await api.get("/cases", {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });

                setCases(casesResponse.data.cases);
            } catch (error) {
                console.error("Dashboard error:", error);

                if (error.response?.status === 401) {
                    localStorage.removeItem("adminToken");
                    localStorage.removeItem("admin");

                    navigate("/admin/login");
                }
            } finally {
                setCasesLoading(false);
            }
        };

        getDashboardData();
    }, [navigate]);

    const logout = () => {
        localStorage.removeItem("adminToken");
        localStorage.removeItem("admin");

        navigate("/admin/login");
    };

    const totalCases = cases.length;


    const deleteCase = async (caseId) => {
        const confirmed = window.confirm(
            "Are you sure you want to delete this case? This action cannot be undone."
        );

        if (!confirmed) {
            return;
        }

        try {
            const token = localStorage.getItem("adminToken");

            await api.delete(`/cases/${caseId}`, {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            });

            // Remove the deleted case from the table
            setCases((prevCases) =>
                prevCases.filter((caseItem) => caseItem._id !== caseId)
            );

        } catch (error) {
            console.error("Delete case error:", error);

            alert(
                error.response?.data?.message ||
                "Failed to delete case."
            );
        }
    };

    return (
        <div className="min-h-screen bg-gray-100">

            {/* Header */}
            <header className="bg-white border-b">
                <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                    <h1 className="text-xl font-bold text-gray-900">
                        Court Case Admin
                    </h1>

                    <button
                        onClick={logout}
                        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg"
                    >
                        Logout
                    </button>

                </div>
            </header>

            {/* Main */}
            <main className="max-w-7xl mx-auto px-6 py-8">

                {/* Dashboard heading */}
                <div className="flex items-center justify-between">

                    <div>
                        <h2 className="text-3xl font-bold text-gray-900">
                            Dashboard
                        </h2>

                        {admin && (
                            <p className="text-gray-500 mt-2">
                                Welcome back, {admin.name}
                            </p>
                        )}
                    </div>

                    <button
                        onClick={() => navigate("/admin/cases/create")}
                        className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg font-semibold"
                    >
                        + Create New Case
                    </button>

                </div>

                {/* Statistics */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">

                    <div className="bg-white p-6 rounded-xl shadow-sm">
                        <p className="text-gray-500">
                            Total Cases
                        </p>

                        <h3 className="text-3xl font-bold mt-2">
                            {totalCases}
                        </h3>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm">
                        <p className="text-gray-500">
                            Active Cases
                        </p>

                        <h3 className="text-3xl font-bold mt-2">
                            0
                        </h3>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm">
                        <p className="text-gray-500">
                            Closed Cases
                        </p>

                        <h3 className="text-3xl font-bold mt-2">
                            0
                        </h3>
                    </div>

                </div>

                {/* Cases */}
                <div className="bg-white rounded-xl shadow-sm mt-8 overflow-hidden">

                    <div className="px-6 py-5 border-b">
                        <h3 className="text-xl font-bold text-gray-900">
                            Cases
                        </h3>

                        <p className="text-sm text-gray-500 mt-1">
                            All registered court cases
                        </p>
                    </div>

                    {casesLoading ? (

                        <div className="p-8 text-center text-gray-500">
                            Loading cases...
                        </div>

                    ) : cases.length === 0 ? (

                        <div className="p-8 text-center text-gray-500">
                            No cases have been created yet.
                        </div>

                    ) : (

                        <div className="overflow-x-auto">

                            <table className="w-full text-left">

                                <thead className="bg-gray-50 border-b">
                                    <tr>
                                        <th className="px-6 py-4 text-sm font-semibold text-gray-700">
                                            Case Number
                                        </th>

                                        <th className="px-6 py-4 text-sm font-semibold text-gray-700">
                                            Case Caption
                                        </th>

                                        <th className="px-6 py-4 text-sm font-semibold text-gray-700">
                                            Court
                                        </th>

                                        <th className="px-6 py-4 text-sm font-semibold text-gray-700">
                                            Judge
                                        </th>

                                        <th className="px-6 py-4 text-sm font-semibold text-gray-700">
                                            Case Type
                                        </th>

                                        <th className="px-6 py-4 text-sm font-semibold text-gray-700">
                                            Filed Date
                                        </th>

                                        <th className="px-6 py-4 text-sm font-semibold text-gray-700">
                                            Action
                                        </th>
                                    </tr>
                                </thead>

                                <tbody className="divide-y">

                                    {cases.map((caseItem) => (

                                        <tr
                                            key={caseItem._id}
                                            className="hover:bg-gray-50"
                                        >

                                            <td className="px-6 py-4">
                                                <span className="font-semibold text-blue-700">
                                                    {caseItem.caseNumber}
                                                </span>
                                            </td>

                                            <td className="px-6 py-4 text-sm text-gray-700">
                                                {caseItem.caseCaption}
                                            </td>

                                            <td className="px-6 py-4 text-sm text-gray-700">
                                                {caseItem.court}
                                            </td>

                                            <td className="px-6 py-4 text-sm text-gray-700">
                                                {caseItem.judge}
                                            </td>

                                            <td className="px-6 py-4 text-sm text-gray-700">
                                                {caseItem.caseType}
                                            </td>

                                            <td className="px-6 py-4 text-sm text-gray-700">
                                                {new Date(
                                                    caseItem.filedDate
                                                ).toLocaleDateString("en-US")}
                                            </td>

                                            <td className="px-6 py-4">
                                                <button
                                                    onClick={() => deleteCase(caseItem._id)}
                                                    className="bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                                                >
                                                    Delete
                                                </button>
                                            </td>

                                        </tr>

                                    ))}

                                </tbody>

                            </table>

                        </div>

                    )}

                </div>

            </main>
        </div>
    );
};

export default AdminDashboard;