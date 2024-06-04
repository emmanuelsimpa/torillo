import { cn } from "@/lib/utils";
import { faker } from "@faker-js/faker";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
);
export function BarChart() {
  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        stacked: true,
        grid: {
          display: false,
        },
        ticks: {
          maxRotation: 0,
          minRotation: 0,
        },
      },
      y: {
        stacked: true,
        ticks: {
          stepSize: 10,
          min: 0,
          max: 40,
        },
      },
    },
  };

  const labels = [
    "Tech",
    "Admin",
    "Customer",
    "Operations",
    "Frontdesk",
    "Backend",
  ];

  const data = {
    labels,
    datasets: [
      {
        label: "Male",
        data: labels.map(() => faker.number.int({ min: 0, max: 25 })),
        backgroundColor: "#ADE5EB",
        barThickness: 30,
        axis: "y",
      },
      {
        label: "Female",
        data: labels.map(() => faker.number.int({ min: 0, max: 20 })),
        backgroundColor: "#FCDC9C",
        barThickness: 30,
        axis: "y",
      },
    ],
  };

  return (
    <div className="h-[24.25rem] w-full border border-[#E1E1E1] py-[0.68rem] pl-[1.87rem] rounded-[0.93rem] shadow-[0px_4px_22px_0px_#0000000F]">
      <div className="h-[2.62rem] w-fit flex justify-between items-center gap-5 bg-[#F2F2F2] border border-[#E1E1E1] rounded-full p-1 mt-3">
        {["People Per Department", "Turn Over"].map((item) => (
          <div
            key={item}
            className={cn(
              item === "People Per Department"
                ? "bg-white rounded-full text-[#171717]"
                : "text-[#878787] pl-4",
              "capitalize text-sm w-fit px-3 py-2 font-bs-semi-bold cursor-pointer",
            )}
          >
            {item}
          </div>
        ))}
      </div>

      <div id="chart" className="h-[16.854375rem] w-full mt-3 pr-3">
        <Bar options={options} data={data} />
      </div>
      <div className="flex justify-center gap-5 mt-3">
        {[
          { sex: "Male", color: "#ADE5EB" },
          { sex: "Female", color: "#FCDC9C" },
        ].map((item, i) => (
          <div className="flex items-center gap-2" key={i}>
            <div
              className={`w-3 h-3`}
              style={{ backgroundColor: item.color }}
            />
            <p className="capitalize text-xs font-bs">{item.sex}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
