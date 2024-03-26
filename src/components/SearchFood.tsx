import { Search } from "lucide-react";
import { Button } from "./ui/button";

export default function SearchFood() {
  return (
    <div className="flex flex-col md:flex-row items-center gap-2 w-[90%] md:w-[70%] lg:w-[60%] mx-auto border-0  md:border md:border-slate-300 p-2 rounded-full">
      <Search className="hidden md:block text-orange-500 font-bold" size="25" />
      <input
        type="text"
        name=""
        id=""
        className="w-full outline-none px-3 border md:border-none py-1 rounded-full  "
        placeholder="Search by city or town"
      />

      <Button
        className=" rounded-full bg-orange-500 text-white w-full py-5 md:py-2 md:w-auto text-lg md:text-sm"
        size="sm"
        variant="ghost"
      >
        Search
      </Button>
    </div>
  );
}
