import AppDownloadSection from "@/components/AppDownloadSection";
import SearchFood from "@/components/SearchFood";

export default function Homepage() {
  return (
    <div className="flex flex-col gap-12 ">
      <div className="bg-white shadow-md rounded-lg py-8 -mt-16 text-center flex flex-col gap-5">
        <h1 className="text-3xl md:text-5xl text-orange-600 font-bold">
          Tuct into a takeway today
        </h1>
        <span className="text-slate-600 text-lg">
          Food is just a click away!
        </span>

        {/* Search Bar */}
        <SearchFood />
      </div>

      <AppDownloadSection />
    </div>
  );
}
