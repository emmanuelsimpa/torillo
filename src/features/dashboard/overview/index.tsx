import { Header } from "./header";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectSeparator,
  SelectTrigger,
} from "@/common/components/ui/select";
import { addNewData } from "./data";
import { Left } from "./left";
import { Right } from "./right";
import { Search } from "./search";
import { ChevronDown } from "lucide-react";

export function Overview() {
  return (
    <section>
      <div className="flex lg:hidden h-[100vh] w-full justify-center items-center">
        <p className="text-[#FF9999] font-bs-semi-bold text-2xl mt-2 text-center">
          Ooops!!! 😔, This application only support laptop and desktop.
        </p>
      </div>
      <div className="hidden lg:block">
        <Header />
        <div className="container mt-[2.37rem] space-y-5">
          <div className="flex justify-between">
            <Search />
            <div className="flex gap-1">
              <div className="w-[10.5rem] h-[2.81rem] bg-primary rounded-l-[10px] flex justify-center items-center text-white text-base">
                Add New
              </div>

              <Select defaultValue="light-1">
                <SelectTrigger
                  icon="h-[30px] w-[30px] text-red-200"
                  className="relative w-[2rem] h-[98%] bg-primary text-white text-[30px] rounded-r-[10px] border-none focus:ring-transparent"
                >
                  <div className="absolute top-2.5 left-1">
                    <ChevronDown className="h-6 w-6" />
                  </div>
                </SelectTrigger>
                <SelectContent className="border-none">
                  {addNewData.map((item, i) => (
                    <div key={item}>
                      <SelectItem value={item} className="cursor-pointer">
                        <p className="text-[#545454] text-sm font-bs font-normal capitalize">
                          {item}
                        </p>
                      </SelectItem>
                      {i !== addNewData.length - 1 && (
                        <SelectSeparator className="w-full" />
                      )}
                    </div>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="grid grid-cols-8 gap-5 w-full h-full">
            <div className="col-span-3">
              <Left />
            </div>
            <div className="col-span-5">
              <Right />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
