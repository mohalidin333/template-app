import React, { Dispatch, SetStateAction } from "react";
import { X, Printer } from "lucide-react";
import { UsersData as UsersDataType } from "@/types/admin/users";

const UsersReportModal = ({
  isOpen,
  setIsOpen,
  UsersData,
}: {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  UsersData: UsersDataType[];
}) => {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "2-digit",
    });
  };

  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    });
  };

  const handlePrint = () => {
    window.print();
  };

  const totalUsers = UsersData.length;
  const adminCount = UsersData.filter((user) => user.role === "Admin").length;
  const userCount = UsersData.filter((user) => user.role === "User").length;
  const reportDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  if (!isOpen) return null;

  return (
    <>
      {/* Modal Overlay */}
      <div
        onClick={() => setIsOpen(false)}
        className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="bg-white rounded-lg w-full max-w-6xl max-h-[90vh] overflow-hidden"
        >
          {/* Modal Header - Hidden in print */}
          <div className="flex justify-between items-center p-4 border-b print:hidden">
            <h2 className="text-xl font-semibold">Users Report</h2>
            <div className="flex gap-2">
              <button
                onClick={handlePrint}
                className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition-colors"
              >
                <Printer size={16} />
                Print Report
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-gray-100 rounded"
              >
                <X size={20} />
              </button>
            </div>
          </div>

          {/* Report Content */}
          <div className="p-6 overflow-auto max-h-[calc(90vh-80px)] print:overflow-visible print:max-h-none">
            <div id="printable-report">
              {/* Report Header */}
              <div className="text-center mb-8 border-b-2 border-gray-800 pb-4">
                <h1 className="text-2xl font-bold mb-2">
                  USER MANAGEMENT REPORT
                </h1>
                <p className="text-gray-600">Generated on {reportDate}</p>
                <p className="text-sm text-gray-500 mt-1">
                  Confidential Document
                </p>
              </div>

              {/* Summary Section */}
              <div className="mb-6">
                <h2 className="text-lg font-semibold mb-3 border-b border-gray-300 pb-1">
                  EXECUTIVE SUMMARY
                </h2>
                <div className="grid grid-cols-3 gap-4 mb-4">
                  <div className="text-center p-3 border border-gray-300">
                    <div className="text-2xl font-bold">{totalUsers}</div>
                    <div className="text-sm text-gray-600">Total Users</div>
                  </div>
                  <div className="text-center p-3 border border-gray-300">
                    <div className="text-2xl font-bold">{adminCount}</div>
                    <div className="text-sm text-gray-600">Administrators</div>
                  </div>
                  <div className="text-center p-3 border border-gray-300">
                    <div className="text-2xl font-bold">{userCount}</div>
                    <div className="text-sm text-gray-600">Regular Users</div>
                  </div>
                </div>
              </div>

              {/* Detailed Users Table */}
              <div className="mb-6">
                <h2 className="text-lg font-semibold mb-3 border-b border-gray-300 pb-1">
                  USER DETAILS
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-400">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-400 px-3 py-2 text-left font-semibold">
                          ID
                        </th>
                        <th className="border border-gray-400 px-3 py-2 text-left font-semibold">
                          Full Name
                        </th>
                        <th className="border border-gray-400 px-3 py-2 text-left font-semibold">
                          Email Address
                        </th>
                        <th className="border border-gray-400 px-3 py-2 text-left font-semibold">
                          Role
                        </th>
                        <th className="border border-gray-400 px-3 py-2 text-left font-semibold">
                          Registration Date
                        </th>
                        <th className="border border-gray-400 px-3 py-2 text-left font-semibold">
                          Time
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {UsersData.map((user, index) => (
                        <tr
                          key={user.id}
                          className={
                            index % 2 === 0 ? "bg-white" : "bg-gray-50"
                          }
                        >
                          <td className="border border-gray-400 px-3 py-2 font-mono text-sm">
                            {user.id}
                          </td>
                          <td className="border border-gray-400 px-3 py-2">
                            {user.firstName} {user.lastName}
                          </td>
                          <td className="border border-gray-400 px-3 py-2 text-sm">
                            {user.email}
                          </td>
                          <td className="border border-gray-400 px-3 py-2">
                            <span
                              className={`px-2 py-1 text-xs font-semibold border ${
                                user.role === "Admin"
                                  ? "border-red-300 bg-red-50 text-red-800"
                                  : "border-blue-300 bg-blue-50 text-blue-800"
                              }`}
                            >
                              {user.role}
                            </span>
                          </td>
                          <td className="border border-gray-400 px-3 py-2 text-sm">
                            {formatDate(user.created_at)}
                          </td>
                          <td className="border border-gray-400 px-3 py-2 text-sm text-gray-600">
                            {formatTime(user.created_at)}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Footer */}
              <div className="mt-8 pt-4 border-t-2 border-gray-800">
                <div className="flex justify-between items-start text-sm text-gray-600">
                  <div>
                    <p>
                      <strong>Report Generated By:</strong> System Administrator
                    </p>
                    <p>
                      <strong>Department:</strong> IT Management
                    </p>
                    <p>
                      <strong>Document ID:</strong> USR-RPT-
                      {new Date().getFullYear()}-
                      {String(new Date().getMonth() + 1).padStart(2, "0")}
                    </p>
                  </div>
                  <div className="text-right">
                    <p>
                      <strong>Classification:</strong> Internal Use
                    </p>
                    <p>
                      <strong>Page:</strong> 1 of 1
                    </p>
                    <p>
                      <strong>Printed:</strong> {new Date().toLocaleString()}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Print Styles */}
      <style jsx>{`
        @media print {
          .print\\:hidden {
            display: none !important;
          }
          .print\\:overflow-visible {
            overflow: visible !important;
          }
          .print\\:max-h-none {
            max-height: none !important;
          }
          body * {
            visibility: hidden;
          }
          #printable-report,
          #printable-report * {
            visibility: visible;
          }
          #printable-report {
            position: absolute;
            left: 0;
            top: 0;
            width: 100%;
          }
        }
      `}</style>
    </>
  );
};

export default UsersReportModal;
