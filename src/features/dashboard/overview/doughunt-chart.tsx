import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { progressData } from "./data";
import { faker } from "@faker-js/faker";

ChartJS.register(ArcElement, Tooltip, Legend);

export function DoughuntChart() {
  const data = {
    labels: progressData.map((item) => item.sex),
    datasets: [
      {
        data: progressData
          .map((item) => item.value)
          .map(() => faker.number.int({ min: 5, max: 20 })),
        backgroundColor: progressData.map((item) => item.sex_color),
        hoverOffset: 2,
        borderWidth: 1,
        spacing: 15,
        borderRadius: 5,
        legend: {
          display: false,
        },
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
    },
  };
  return (
    <div>
      <p className="text-[#171717] font-bs-semi-bold text-lg text-center">
        Employee Gender Distribution
      </p>
      <p className="font-bs-light text-sm text-[#545454] text-center">
        Here is a breakdown of gender distribution
      </p>

      <div
        id="chart"
        className="h-[16.854375rem] w-full flex justify-center mt-4 relative"
      >
        <Doughnut data={data} options={options} />

        <div className="absolute inset-y-[40%]">
          <p className="text-center text-[#545454] font-bs-semi-bold text-2xl">
            36
          </p>
          <p className="text-center text-[#545454] font-bs-semi-bold text-2xl">
            People
          </p>
        </div>
      </div>

      <div className="flex justify-center gap-5 mt-3">
        {progressData.map((item) => (
          <div className="flex items-center gap-2" key={item.id}>
            <div
              className={`w-3 h-3`}
              style={{ backgroundColor: item.sex_color }}
            />
            <p className="capitalize text-xs font-bs">{item.sex}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
