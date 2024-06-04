import { Progress } from "@/common/components/ui/progress";
import { progressData } from "./data";
import { cn } from "@/lib/utils";
import { Separator } from "@/common/components/ui/separator";
import BirthDaySvg from "@/assets/svgs/header/birthday.svg";
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/common/components/ui/avatar";
import { ChevronDown, ChevronUp } from "lucide-react";
import { useOverview } from "@/common/hooks/overview";
import { Skeleton } from "@/common/components/ui/skeleton";
import { formatDate } from "@/utils/format-date";
import { DoughuntChart } from "./doughunt-chart";

export function Left() {
  const { isLoading, data, celebrationAccordion, setCelebrationAccordion } =
    useOverview();
  const total = !celebrationAccordion ? 4 : 10;

  return (
    <div className="space-y-5  mb-24">
      <div className="h-[8.37rem] w-full bg-[#F8F8F8] rounded-[0.80rem] flex flex-col justify-between">
        <Skeleton loading={isLoading} className="h-[80%] w-full rounded-xl">
          <div className="h-full px-4 pt-3 text-base font-bs-semi-bold text-[#545454]">
            Total Employees
          </div>
          <div className="total-employee rounded-2xl bg-[#E1E1E1] h-full flex justify-between items-end pb-2 px-4">
            <p className="text-primary text-sm font-bs-condensed-medium border-primary border-b-[0.5px] cursor-pointer">
              View all employees
            </p>
            <p className="text-[1.75rem] text-[#545454] font-bs-condensed-medium">
              36
            </p>
          </div>
        </Skeleton>
      </div>

      <div className="w-full h-[11.14rem] border border-[#E1E1E1] p-[1.25rem_0.93rem_1.37rem_0.93rem] rounded-[0.93rem] shadow-[0px_4px_22px_0px_#0000000F] flex flex-col items-center">
        <p className="text-[#878787] text-xs font-bs-semi-bold">
          27, Monday January, 2021
        </p>
        <p className="text-[#545454] text-xl font-bs-semi-bold">
          Today’s Attendance
        </p>

        <div className="w-full mt-3">
          <Skeleton loading={isLoading} className="h-[80%] w-full rounded-xl">
            <div className="w-full flex">
              {progressData.map((item, i) => (
                <div
                  key={item.id}
                  className={cn(i !== 0 ? "-ml-2" : "", "")}
                  style={{ width: `${item.value}%`, color: item.color }}
                >
                  <Progress
                    value={100}
                    className={`w-full h-[0.76rem] bg-[${item.color}]`}
                    style={{ backgroundColor: item.color }}
                  />
                </div>
              ))}
            </div>
            <div className="flex justify-center gap-5 mt-3">
              {progressData.map((item) => (
                <div className="flex items-center gap-2" key={item.id}>
                  <div
                    className={`w-3 h-3`}
                    style={{ backgroundColor: item.color }}
                  />
                  <p className="capitalize text-xs font-bs">{item.name}</p>
                </div>
              ))}
            </div>
          </Skeleton>

          <Separator className="mt-3 mb-2" />
          <p className="text-center text-primary text-sm font-bs-semi-bold">
            View In Time & Attendance
          </p>
        </div>
      </div>

      <div className="w-full min-h-[25.93rem] border border-[#E1E1E1] p-[1.37rem_1.37rem_0.75rem_1.37rem] rounded-[0.93rem] shadow-[0px_4px_22px_0px_#0000000F]">
        <p className="text-[#171717] font-bs-semi-bold text-lg">Celebrations</p>

        <div className="h-[2.62rem] w-full flex justify-between items-center bg-[#F2F2F2] border border-[#E1E1E1] rounded-full p-1 mt-3">
          {["birthday", "job anniversary", "new hire"].map((item) => (
            <div
              key={item}
              className={cn(
                item === "birthday"
                  ? "bg-white rounded-full text-[#171717]"
                  : "text-[#878787]",
                "capitalize text-sm w-fit px-3 py-2 font-bs-semi-bold",
              )}
            >
              {item}
            </div>
          ))}
        </div>

        <div className="h-full w-full">
          <p className="text-[#878787] font-bs-semi-bold text-md mt-2">Today</p>

          <div
            className={cn(
              !celebrationAccordion ? "h-[14rem]" : "h-[20rem]",
              `space-y-4 mt-2 overflow-y-scroll scroll-smooth `,
            )}
          >
            <Skeleton
              loading={isLoading}
              className="h-[14rem] w-full rounded-xl"
            >
              {data?.slice(0, total).map((item) => (
                <div
                  key={item._id}
                  className="h-[3.75rem] w-full bg-[#EBEFFA] rounded-[1.25rem] p-[0.75rem_1.25rem_0.75rem_0.625rem] flex justify-between items-center"
                >
                  <div className="flex gap-4 items-center">
                    <Avatar>
                      <AvatarFallback>CN</AvatarFallback>
                      <AvatarImage src={item.image} />
                    </Avatar>
                    <div className="overflown-hidden">
                      <p className="font-bs-semi-bold text-sm text-[#545454] line-clamp-1">
                        {`${item.name.firstName} ${item.name.lastName} `}
                      </p>
                      <p className="text-xs font-bs-light text-[#545454] line-clamp-1">
                        {item.job_title}
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-col items-center min-w-16">
                    <BirthDaySvg />
                    <p className="text-[#171717] text-sm font-bs-light">
                      {formatDate(item.dob)}
                    </p>
                  </div>
                </div>
              ))}
            </Skeleton>
          </div>
          <div
            className="flex justify-between items-center cursor-pointer mt-2"
            onClick={() => setCelebrationAccordion((prev) => !prev)}
          >
            <p className="text-[#878787] font-bs-semi-bold text-md">
              Upcoming Birthdays
            </p>
            <div>
              {!celebrationAccordion ? (
                <ChevronDown color={"#878787"} />
              ) : (
                <ChevronUp color={"#878787"} />
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="h-[25.625rem] border border-[#E1E1E1] p-[1.37rem_1.37rem_0.75rem_1.37rem] rounded-[0.93rem] shadow-[0px_4px_22px_0px_#0000000F]">
        <Skeleton
          loading={isLoading}
          className="h-[22.625rem] w-full rounded-xl"
        >
          <DoughuntChart />
        </Skeleton>
      </div>
    </div>
  );
}
