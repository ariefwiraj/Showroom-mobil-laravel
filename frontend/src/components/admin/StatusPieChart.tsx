"use client";

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from "recharts";

interface StatusPieChartProps {
  available: number;
  sold: number;
}

export function StatusPieChart({ available, sold }: StatusPieChartProps) {
  const data = [
    { name: "Available", value: available, color: "#22C55E" }, // --color-success
    { name: "Sold", value: sold, color: "#EF4444" }, // --color-danger
  ];

  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm flex flex-col items-center justify-center h-[320px]">
      <h3 className="text-sm font-semibold text-slate-500 mb-4 self-start">Status Distribusi</h3>
      <div className="w-full h-full min-h-[220px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
              animationBegin={0}
              animationDuration={800}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Tooltip 
              contentStyle={{ borderRadius: "8px", border: "1px solid #E2E8F0" }}
              itemStyle={{ fontFamily: "var(--font-dm-sans)" }}
            />
            <Legend 
              verticalAlign="bottom" 
              height={36} 
              iconType="circle"
              wrapperStyle={{ fontSize: "12px", fontFamily: "var(--font-dm-sans)" }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
