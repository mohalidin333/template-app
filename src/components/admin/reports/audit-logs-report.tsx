import React, { useState } from "react";
import { X, Printer, Shield } from "lucide-react";
import { AuditLogsData } from "@/types/admin/audit-logs";

const AuditLogsReportModal = ({
  isOpen,
  setIsOpen,
  AuditLogsData,
}: {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  AuditLogsData: AuditLogsData[];
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
      second: "2-digit",
      hour12: false,
    });
  };

  const handlePrint = () => {
    window.print();
  };

  const totalActions = AuditLogsData.length;
  const successfulActions = AuditLogsData.filter(
    (log) => log.status === "success"
  ).length;
  const failedActions = AuditLogsData.filter(
    (log) => log.status === "failed"
  ).length;
  const successRate = Number(
    ((successfulActions / totalActions) * 100).toFixed(1)
  );

  // Group actions by type
  const actionTypes = AuditLogsData.reduce((acc, log) => {
    acc[log.action] = (acc[log.action] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const reportDate = new Date().toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const getActionBadgeStyle = (action: string) => {
    const styles = {
      login: "border-green-300 bg-green-50 text-green-800",
      logout: "border-blue-300 bg-blue-50 text-blue-800",
      "update profile": "border-orange-300 bg-orange-50 text-orange-800",
      "change password": "border-purple-300 bg-purple-50 text-purple-800",
      "delete account": "border-red-300 bg-red-50 text-red-800",
      "export data": "border-indigo-300 bg-indigo-50 text-indigo-800",
      "reset password": "border-yellow-300 bg-yellow-50 text-yellow-800",
      "update email": "border-teal-300 bg-teal-50 text-teal-800",
    };
    return (
      styles[action as keyof typeof styles] ||
      "border-gray-300 bg-gray-50 text-gray-800"
    );
  };

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
          className="bg-white rounded-lg w-full max-w-7xl max-h-[90vh] overflow-hidden"
        >
          {/* Modal Header - Hidden in print */}
          <div className="flex justify-between items-center p-4 border-b print:hidden">
            <h2 className="text-xl font-semibold flex items-center gap-2">
              <Shield size={20} />
              Audit Logs Report
            </h2>
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
            <div id="printable-audit-report">
              {/* Report Header */}
              <div className="text-center mb-8 border-b-2 border-gray-800 pb-4">
                <h1 className="text-2xl font-bold mb-2">
                  SYSTEM AUDIT LOGS REPORT
                </h1>
                <p className="text-gray-600">Security & Compliance Analysis</p>
                <p className="text-gray-600">Generated on {reportDate}</p>
                <p className="text-sm text-red-600 mt-2 font-semibold">
                  ⚠ CONFIDENTIAL - SECURITY SENSITIVE
                </p>
              </div>

              {/* Summary Section */}
              <div className="mb-6">
                <h2 className="text-lg font-semibold mb-3 border-b border-gray-300 pb-1">
                  SECURITY SUMMARY
                </h2>
                <div className="grid grid-cols-4 gap-4 mb-4">
                  <div className="text-center p-3 border border-gray-300">
                    <div className="text-2xl font-bold text-blue-600">
                      {totalActions}
                    </div>
                    <div className="text-sm text-gray-600">Total Events</div>
                  </div>
                  <div className="text-center p-3 border border-gray-300">
                    <div className="text-2xl font-bold text-green-600">
                      {successfulActions}
                    </div>
                    <div className="text-sm text-gray-600">Successful</div>
                  </div>
                  <div className="text-center p-3 border border-gray-300">
                    <div className="text-2xl font-bold text-red-600">
                      {failedActions}
                    </div>
                    <div className="text-sm text-gray-600">Failed</div>
                  </div>
                  <div className="text-center p-3 border border-gray-300">
                    <div className="text-2xl font-bold text-purple-600">
                      {successRate}%
                    </div>
                    <div className="text-sm text-gray-600">Success Rate</div>
                  </div>
                </div>
              </div>

              {/* Action Breakdown */}
              <div className="mb-6">
                <h2 className="text-lg font-semibold mb-3 border-b border-gray-300 pb-1">
                  ACTION BREAKDOWN
                </h2>
                <div className="grid grid-cols-4 gap-3 mb-4">
                  {Object.entries(actionTypes).map(([action, count]) => (
                    <div
                      key={action}
                      className="text-center p-2 border border-gray-300"
                    >
                      <div className="text-lg font-bold">{count}</div>
                      <div className="text-xs text-gray-600 capitalize">
                        {action}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Detailed Audit Table */}
              <div className="mb-6">
                <h2 className="text-lg font-semibold mb-3 border-b border-gray-300 pb-1">
                  DETAILED AUDIT TRAIL
                </h2>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-400">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-400 px-3 py-2 text-left font-semibold">
                          Log ID
                        </th>
                        <th className="border border-gray-400 px-3 py-2 text-left font-semibold">
                          User
                        </th>
                        <th className="border border-gray-400 px-3 py-2 text-left font-semibold">
                          Action Performed
                        </th>
                        <th className="border border-gray-400 px-3 py-2 text-left font-semibold">
                          Status
                        </th>
                        <th className="border border-gray-400 px-3 py-2 text-left font-semibold">
                          Date
                        </th>
                        <th className="border border-gray-400 px-3 py-2 text-left font-semibold">
                          Time (UTC)
                        </th>
                        <th className="border border-gray-400 px-3 py-2 text-left font-semibold">
                          Risk Level
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {AuditLogsData.map((log, index) => {
                        const riskLevel =
                          log.action === "delete account"
                            ? "HIGH"
                            : log.action.includes("password")
                            ? "MEDIUM"
                            : log.status === "failed"
                            ? "MEDIUM"
                            : "LOW";

                        return (
                          <tr
                            key={log.id}
                            className={
                              index % 2 === 0 ? "bg-white" : "bg-gray-50"
                            }
                          >
                            <td className="border border-gray-400 px-3 py-2 font-mono text-sm">
                              AL-{log.id.padStart(4, "0")}
                            </td>
                            <td className="border border-gray-400 px-3 py-2 font-medium">
                              {log.firstName} {log.lastName}
                            </td>
                            <td className="border border-gray-400 px-3 py-2">
                              <span
                                className={`px-2 py-1 text-xs font-semibold border rounded ${getActionBadgeStyle(
                                  log.action
                                )}`}
                              >
                                {log.action.toUpperCase()}
                              </span>
                            </td>
                            <td className="border border-gray-400 px-3 py-2">
                              <span
                                className={`px-2 py-1 text-xs font-bold border ${
                                  log.status === "success"
                                    ? "border-green-400 bg-green-100 text-green-800"
                                    : "border-red-400 bg-red-100 text-red-800"
                                }`}
                              >
                                {log.status.toUpperCase()}
                              </span>
                            </td>
                            <td className="border border-gray-400 px-3 py-2 text-sm">
                              {formatDate(log.created_at)}
                            </td>
                            <td className="border border-gray-400 px-3 py-2 text-sm font-mono">
                              {formatTime(log.created_at)}
                            </td>
                            <td className="border border-gray-400 px-3 py-2">
                              <span
                                className={`px-2 py-1 text-xs font-bold border ${
                                  riskLevel === "HIGH"
                                    ? "border-red-500 bg-red-100 text-red-800"
                                    : riskLevel === "MEDIUM"
                                    ? "border-yellow-500 bg-yellow-100 text-yellow-800"
                                    : "border-green-500 bg-green-100 text-green-800"
                                }`}
                              >
                                {riskLevel}
                              </span>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Security Notes */}
              <div className="mb-6">
                <h2 className="text-lg font-semibold mb-3 border-b border-gray-300 pb-1">
                  SECURITY OBSERVATIONS
                </h2>
                <div className="bg-gray-50 p-4 border border-gray-300">
                  <ul className="text-sm space-y-2">
                    <li>
                      • Failed login attempts detected:{" "}
                      {
                        AuditLogsData.filter(
                          (log) =>
                            log.action === "login" && log.status === "failed"
                        ).length
                      }{" "}
                      events
                    </li>
                    <li>
                      • High-risk actions recorded:{" "}
                      {
                        AuditLogsData.filter(
                          (log) => log.action === "delete account"
                        ).length
                      }{" "}
                      account deletions
                    </li>
                    <li>
                      • Password-related activities:{" "}
                      {
                        AuditLogsData.filter((log) =>
                          log.action.includes("password")
                        ).length
                      }{" "}
                      events
                    </li>
                    <li>
                      • Data export operations:{" "}
                      {
                        AuditLogsData.filter(
                          (log) => log.action === "export data"
                        ).length
                      }{" "}
                      events
                    </li>
                    <li>
                      • Overall system security status:{" "}
                      {successRate >= 90
                        ? "NORMAL"
                        : successRate >= 80
                        ? "ATTENTION"
                        : "CRITICAL"}
                    </li>
                  </ul>
                </div>
              </div>

              {/* Footer */}
              <div className="mt-8 pt-4 border-t-2 border-gray-800">
                <div className="flex justify-between items-start text-sm text-gray-600">
                  <div>
                    <p>
                      <strong>Report Generated By:</strong> Security Operations
                      Center
                    </p>
                    <p>
                      <strong>Compliance Officer:</strong> System Administrator
                    </p>
                    <p>
                      <strong>Audit Period:</strong>{" "}
                      {formatDate(AuditLogsData[0]?.created_at)} -{" "}
                      {formatDate(
                        AuditLogsData[AuditLogsData.length - 1]?.created_at
                      )}
                    </p>
                    <p>
                      <strong>Document ID:</strong> AUD-LOG-
                      {new Date().getFullYear()}-
                      {String(new Date().getMonth() + 1).padStart(2, "0")}
                    </p>
                  </div>
                  <div className="text-right">
                    <p>
                      <strong>Classification:</strong> CONFIDENTIAL
                    </p>
                    <p>
                      <strong>Retention:</strong> 7 Years
                    </p>
                    <p>
                      <strong>Page:</strong> 1 of 1
                    </p>
                    <p>
                      <strong>Generated:</strong> {new Date().toLocaleString()}
                    </p>
                  </div>
                </div>
                <div className="text-center mt-4 text-xs text-red-600 font-semibold">
                  This document contains sensitive security information.
                  Unauthorized distribution is prohibited.
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
          #printable-audit-report,
          #printable-audit-report * {
            visibility: visible;
          }
          #printable-audit-report {
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

export default AuditLogsReportModal;
