import { cn } from "@/lib/utils";
import { faker } from "@faker-js/faker";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/common/components/ui/select";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);
export function LineChart() {
  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    elements: {
      point: {
        radius: 0,
      },
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
        ticks: {
          maxRotation: 0,
          minRotation: 0,
        },
      },
      y: {
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
        data: labels.map(() => faker.number.int({ min: 0, max: 40 })),
        backgroundColor: "#ADE5EB",
        borderColor: "#ADE5EB",
        borderWidth: 1.5,
      },
      {
        data: labels.map(() => faker.number.int({ min: 0, max: 40 })),
        backgroundColor: "#FCDC9C",
        borderColor: "#FCDC9C",
        borderWidth: 1.5,
      },
    ],
  };

  return (
    <div className="h-[24.25rem] w-full border border-[#E1E1E1] py-[0.68rem] rounded-[0.93rem] shadow-[0px_4px_22px_0px_#0000000F]">
      <div className="flex justify-between items-center px-[1.87rem]">
        <div className="h-[2.62rem] w-fit flex justify-between items-center gap-5 bg-[#F2F2F2] border border-[#E1E1E1] rounded-full p-1">
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
        <div>
          <Select defaultValue="light-1">
            <SelectTrigger className="w-[8.1rem] rounded-[0.625rem] bg-[#F2F2F2] border-none focus:ring-transparent">
              <SelectValue placeholder="People" />
            </SelectTrigger>
            <SelectContent className="border-none">
              {Array.from({ length: 3 }).map((_, i) => (
                <SelectItem value={`light-${i}`} key={i}>
                  <p className="text-[#545454] text-sm font-bs">Last 6 month</p>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div id="chart" className="h-[17rem] w-full mt-3 pr-3 pl-[1.87rem]">
        <Line options={options} data={data} />
      </div>
    </div>
  );
}
