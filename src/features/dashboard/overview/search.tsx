import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/common/components/ui/avatar";
import { Input } from "@/common/components/ui/input";
import { Separator } from "@/common/components/ui/separator";
import { useOverview } from "@/common/hooks/overview";

export function Search() {
  const { data, setSearch, search } = useOverview();
  return (
    <div className="w-[42.5rem] h-full relative">
      <Input
        className="w-full bg-[#F2F2F2] rounded-[0.68rem] border-[#E1E1E1] text-[#A8A8A8] placeholder:text-[#A8A8A8] focus-visible:ring-transparent"
        placeholder="John"
        onChange={(e: { target: { value: string } }) =>
          setSearch(e.target.value)
        }
        value={search}
      />
      {search && (
        <div className="w-full h-[20.625rem] absolute top-[3.3rem] left-0 z-10 bg-white border border-[#E1E1E1] p-[1.25rem_0.93rem_1.37rem_0.93rem] rounded-[0.93rem] shadow-[0px_4px_22px_0px_#0000000F] overflow-hidden ">
          <p className="text-[#878787] font-bs-semi-bold text-md mt-2">
            Search Results
          </p>

          <div className="h-full space-y-4 mt-3 pb-10 overflow-y-scroll scroll-smooth">
            {search.length >= 2 ? (
              data?.slice(0, 10).map((item) => (
                <div
                  key={item._id}
                  className="h-[3.56rem] w-full rounded-[1.25rem] p-[0.75rem_1.25rem_0.75rem_0.625rem]"
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
                  <Separator className="mt-1.5 border border-[#E1E1E1]" />
                </div>
              ))
            ) : (
              <p className="text-[#FF9999] font-bs-semi-bold text-md mt-2 text-center">
                No result for a single letter
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
