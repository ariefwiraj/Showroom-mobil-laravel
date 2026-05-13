"use client";

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

interface MonthlyData {
  month: string;
  count: number;
}

interface MonthlyAreaChartProps {
  data: MonthlyData[];
}

export function MonthlyAreaChart({ data }: MonthlyAreaChartProps) {
  return (
    <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm flex flex-col h-[360px]">
      <h3 className="text-sm font-semibold text-slate-500 mb-4">Mobil Ditambahkan per Bulan</h3>
      <div className="w-full h-full min-h-[260px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorCount" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="var(--color-accent)" stopOpacity={0.3} />
                <stop offset="95%" stopColor="var(--color-accent)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E2E8F0" />
            <XAxis 
              dataKey="month" 
              tick={{ fontSize: 12, fill: "#64748B", fontFamily: "var(--font-dm-sans)" }} 
              axisLine={false} 
              tickLine={false} 
              dy={10}
            />
            <YAxis 
              tick={{ fontSize: 12, fill: "#64748B" }} 
              axisLine={false} 
              tickLine={false} 
              dx={-10}
            />
            <Tooltip
              contentStyle={{ borderRadius: "8px", border: "1px solid #E2E8F0", fontFamily: "var(--font-dm-sans)" }}
            />
            <Area 
              type="monotone" 
              dataKey="count" 
              stroke="var(--color-accent)" 
              strokeWidth={3}
              fillOpacity={1} 
              fill="url(#colorCount)" 
              activeDot={{ r: 6, fill: "var(--color-accent)", stroke: "white", strokeWidth: 2 }}
              animationDuration={1500}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
