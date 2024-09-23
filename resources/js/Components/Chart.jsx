import React from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from "recharts";

const data = [
    { year: 2019, PDB: 500, PDB_2024: 450 },
    { year: 2020, PDB: 1500, PDB_2024: 1200 },
    { year: 2021, PDB: 1000, PDB_2024: 950 },
    { year: 2022, PDB: 1200, PDB_2024: 1100 },
    { year: 2023, PDB: 1700, PDB_2024: 1150 },
    { year: 2024, PDB: 1800, PDB_2024: 1300 },
];

const Chart = () => {
    return (
        <div className="w-full p-4 bg-white rounded-lg shadow-md">
            {/* Chart Container */}
            <ResponsiveContainer width="100%" height={300}>
                <LineChart data={data}>
                    {/* Grid */}
                    <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />

                    {/* Axes */}
                    <XAxis dataKey="year" tick={{ fontSize: 12 }} />
                    <YAxis tick={{ fontSize: 12 }} />

                    {/* Tooltip */}
                    <Tooltip
                        contentStyle={{
                            backgroundColor: "#f5f5f5",
                            borderColor: "#ccc",
                        }}
                        labelStyle={{ fontWeight: "bold" }}
                    />

                    {/* Legend */}
                    <Legend verticalAlign="top" height={48} iconType="circle" />

                    {/* Lines */}
                    <Line
                        type="linear"
                        dataKey="PDB"
                        name="2023"
                        stroke="#1E90FF" // blue color
                        strokeWidth={3}
                        dot={{
                            r: 5,
                            stroke: "#1E90FF",
                            fill: "#fff",
                            strokeWidth: 2,
                        }}
                        activeDot={{ r: 8 }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default Chart;
