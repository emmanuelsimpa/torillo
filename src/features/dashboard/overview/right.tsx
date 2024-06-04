import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/common/components/ui/avatar";
import { Button } from "@/common/components/ui/button";
import { Skeleton } from "@/common/components/ui/skeleton";
import { useOverview } from "@/common/hooks/overview";
import { formatDate } from "@/utils/format-date";
import { BarChart } from "./bar-chart";
import { LineChart } from "./line-chart";
import { cn } from "@/lib/utils";

export function Right() {
  const { isLoading, data } = useOverview();
  return (
    <div className="space-y-5  mb-24">
      <div className="h-[18.94rem] w-full border border-[#E1E1E1] py-[0.68rem] px-[1.87rem] rounded-[0.93rem] shadow-[0px_4px_22px_0px_#0000000F]">
        <div className="flex justify-between items-center w-full">
          <div>
            <p className="text-[#171717] font-bs-semi-bold text-lg">
              People On Leave
            </p>
            <p className="font-bs-light text-sm text-[#545454]">
              View employees on leave at a glance.
            </p>
          </div>
          <Button className="bg-[#F2F2F2] text-[#545454] font-bs-semi-bold rounded-[0.62rem] w-[6.43rem] h-[2.37rem]">
            View All
          </Button>
        </div>

        <Skeleton loading={isLoading} className="h-[80%] w-full rounded-xl">
          <div className="grid grid-cols-4 w-full gap-2 mt-5">
            {data?.slice(0, 4).map((item) => (
              <Skeleton
                key={item._id}
                loading={isLoading}
                className="h-[12.18rem] w-full"
              >
                <div
                  className={cn(
                    ["sick"].includes(item.leaveType)
                      ? "bg-[#FEF6E6]"
                      : ["travel", "annual"].includes(item.leaveType)
                        ? "bg-[#EAF8FA]"
                        : "bg-[#EBEFFA]",
                    "h-[12.18rem] w-full px-[0.75rem] py-[0.62rem] rounded-[0.5rem]",
                  )}
                >
                  <div className="flex gap-4 items-center justify-center">
                    <Avatar>
                      <AvatarFallback>CN</AvatarFallback>
                      <AvatarImage src={item.image} />
                    </Avatar>
                  </div>
                  <div className="">
                    <p className="font-bs-semi-bold text-sm text-[#545454] line-clamp-1 text-center">
                      {`${item.name.firstName}`}
                    </p>
                    <p className="font-bs-semi-bold text-sm text-[#545454] line-clamp-1 text-center">
                      {`${item.name.lastName} `}
                    </p>
                    <p className="text-xs font-bs-light text-[#545454] line-clamp-1 text-center">
                      {item.job_title}
                    </p>
                  </div>
                  <div className="w-full flex justify-center mt-2 mb-1">
                    <div
                      className={cn(
                        ["sick"].includes(item.leaveType)
                          ? "bg-[#FCDC9C]"
                          : ["travel", "annual"].includes(item.leaveType)
                            ? "bg-[#D6F2F5]"
                            : "bg-[#D6DFF5]",
                        "w-auto rounded-[1.25rem] px-1.5 py-0.5",
                      )}
                    >
                      <p
                        className={cn(
                          ["sick"].includes(item.leaveType)
                            ? "text-[#946405]"
                            : ["travel", "annual"].includes(item.leaveType)
                              ? "text-[#2898A4]"
                              : "text-[#4069D0]",
                          "text-center text-[10px] font-bs-semi-bold capitalize",
                        )}
                      >
                        {item.leaveType} leave
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col items-center ">
                    <p className="text-[#545454] text-[10px] font-bs-light">
                      Start date:{" "}
                      <a href="" className="font-bs-semi-bold">
                        {formatDate(item.startDate)}
                      </a>
                    </p>
                    <p className="text-[#545454] text-[9px] font-bs-light">
                      Resumption Date:{" "}
                      <a href="" className="font-bs-semi-bold">
                        {formatDate(item.resumptionDate)}
                      </a>
                    </p>

                    <p className="text-[10px] font-bs-semi-bold text-[#545454] mt-1">
                      {item.remainingDays} Day(s)
                    </p>
                  </div>
                </div>
              </Skeleton>
            ))}
          </div>
        </Skeleton>
      </div>
      <Skeleton loading={isLoading} className="h-[24.25rem] w-full rounded-xl">
        <BarChart />
      </Skeleton>
      <Skeleton loading={isLoading} className="h-[24.25rem] w-full rounded-xl">
        <LineChart />
      </Skeleton>
    </div>
  );
}
