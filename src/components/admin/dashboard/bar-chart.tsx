"use client";

import React from "react";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Legend,
  CartesianGrid,
} from "recharts";

const chartConfig = {
  Users: { label: "Users", color: "var(--chart-1)" },
  AuditLogs: { label: "Audit Logs", color: "var(--chart-2)" },
  Storage: { label: "Storage", color: "var(--chart-3)" },
};

export default function Barchart<
  T extends Record<string, number | string>
>({ data }: { data: T[] }) {
  return (
    <div className="border rounded-md bg-white p-6">
      <h2 className="title-semi-md mb-6">Users 1</h2>
      <ChartContainer config={chartConfig}>
        <BarChart width={500} height={500} data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <ChartTooltip content={<ChartTooltipContent />} />

          <YAxis
            yAxisId="left"
            tickFormatter={(value) => `${value.toLocaleString()}`}
          />

          {Object.entries(chartConfig).map(([key, value]) => (
            <Bar
              key={key}
              dataKey={key}
              name={value.label}
              fill={value.color}
              yAxisId="left"
              radius={[10, 10, 0, 0]}
            />
          ))}

          <XAxis dataKey="name" />

          <Legend />
        </BarChart>
      </ChartContainer>
    </div>
  );
}
