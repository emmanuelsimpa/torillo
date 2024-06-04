import HomeSvg from "@/assets/svgs/header/home.svg";
import DashbordSvg from "@/assets/svgs/header/dashboard.svg";
import InfoSvg from "@/assets/svgs/header/info.svg";
import NotificationSvg from "@/assets/svgs/header/notification.svg";
import LogoSvg from "@/assets/svgs/logo.svg";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/common/components/ui/select";
import { Separator } from "@/common/components/ui/separator";
import { cn } from "@/lib/utils";
import { navData } from "./data";

export function Header() {
  return (
    <nav className="space-y-8 mt-4">
      <div className="wrapper flex justify-between items-center pb-4 border-b-2 border-[#FAFAFA]">
        <div className="w-full flex items-center gap-5">
          <div>
            <LogoSvg />
          </div>

          <Select defaultValue="light-1">
            <SelectTrigger className="w-[8.1rem] rounded-full bg-[#F2F2F2] border-none focus:ring-transparent">
              <SelectValue placeholder="People" />
            </SelectTrigger>
            <SelectContent className="border-none">
              {Array.from({ length: 3 }).map((_, i) => (
                <SelectItem value={`light-${i}`} key={i}>
                  <div className="flex gap-2 cursor-pointer">
                    <div className="w-5 h-5 bg-[#CCF3FF] rounded-[0.25rem]">
                      <p className="text-[#009CCC] font-bs-light text-center">
                        %
                      </p>
                    </div>
                    <p className="text-[#878787] text-sm font-bs">People</p>
                  </div>
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="w-full flex justify-end">
          <div className="w-full flex justify-end gap-8">
            <HomeSvg />
            <DashbordSvg />
            <InfoSvg />
            <NotificationSvg />
          </div>
          <div className="flex">
            <Separator
              orientation={"vertical"}
              className="bg-[#E1E1E1] ml-6 mr-4"
            />

            <div className="w-[1.81rem] h-[1.81rem] bg-[#FDEDCE] rounded-[0.50rem] flex items-center justify-center">
              <p className="font-bs-semi-bold text-[#C58607] text-lg">W</p>
            </div>
          </div>
        </div>
      </div>

      <div className="wrapper flex justify-between border-[#E1E1E1] border-b-[1px]">
        {navData.map((item) => (
          <p
            key={item}
            className={cn(
              item === "Overview"
                ? "bg-[#EAF8FA] border-primary border-b-2 rounded-t-[10px] font-bs-semi-bold text-primary "
                : "text-[#545454] font-bs",
              "w-full h-[2.5rem] flex items-center justify-center text-base cursor-pointer",
            )}
          >
            {item}
          </p>
        ))}
      </div>
    </nav>
  );
}
