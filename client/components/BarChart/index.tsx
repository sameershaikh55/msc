// BarChart.tsx
import React, { useEffect, useRef } from "react";
import { Chart } from "chart.js/auto";

interface BarChartProps {
  data: number[];
  labels: string[];
  correctColor: string;
  wrongColor: string;
}

const BarChart: React.FC<BarChartProps> = ({
  data,
  labels,
  correctColor,
  wrongColor,
}) => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstanceRef = useRef<Chart | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      if (!chartInstanceRef.current) {
        const ctx = chartRef.current?.getContext("2d");
        if (ctx) {
          chartInstanceRef.current = new Chart(ctx, {
            type: "bar",
            data: {
              labels: labels,
              datasets: [
                {
                  label: "",
                  data: data,
                  backgroundColor: [correctColor, wrongColor],
                },
              ],
            },
            options: {
              plugins: {
                legend: {
                  display: false, // Hide the legend
                },
              },
            },
          });
        }
      } else {
        // Update chart data if needed
        chartInstanceRef.current.data.labels = labels;
        chartInstanceRef.current.data.datasets[0].data = data;
        chartInstanceRef.current.update();
      }
    }
  }, [data, labels, correctColor, wrongColor]);

  return <canvas className="w-100" ref={chartRef} />;
};

export default BarChart;
