import { Search } from "lucide-react";
import { Button } from "./ui/button";

export default function SearchFood() {
  return (
    <div className="flex items-center gap-2 w-[90%] md:w-[70%] lg:w-[60%] mx-auto border border-slate-300 p-2 rounded-full">
      <Search className="text-orange-500 font-bold" size="30" />
      <input
        type="text"
        name=""
        id=""
        className="w-full outline-none md:px-3"
        placeholder="Search by city or town"
      />

      <Button
        className="text-sm rounded-full bg-orange-500 text-white"
        size="sm"
        variant="ghost"
      >
        Search
      </Button>
    </div>
  );
}
