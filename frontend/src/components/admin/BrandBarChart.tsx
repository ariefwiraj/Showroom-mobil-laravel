"use client";

import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

interface BrandData {
  brand: string;
  count: number;
}

interface BrandBarChartProps {
  data: BrandData[];
}

export function BrandBarChart({ data }: BrandBarChartProps) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm flex flex-col h-[320px]">
      <h3 className="text-sm font-semibold text-slate-500 mb-4">Mobil per Brand</h3>
      <div className="w-full h-full min-h-[220px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            layout="vertical"
            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
          >
            <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#E2E8F0" />
            <XAxis type="number" tick={{ fontSize: 12, fill: "#64748B" }} axisLine={false} tickLine={false} />
            <YAxis 
              dataKey="brand" 
              type="category" 
              tick={{ fontSize: 12, fill: "#334155", fontFamily: "var(--font-dm-sans)" }} 
              axisLine={false} 
              tickLine={false}
              width={80}
            />
            <Tooltip
              cursor={{ fill: "rgba(0,0,0,0.05)" }}
              contentStyle={{ borderRadius: "8px", border: "1px solid #E2E8F0", fontSize: "14px" }}
            />
            <Bar 
              dataKey="count" 
              fill="var(--color-primary)" 
              radius={[0, 4, 4, 0]}
              animationDuration={1000}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
