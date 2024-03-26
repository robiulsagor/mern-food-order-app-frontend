import appDownload from "../assets/appDownload.png";
import mobileApp from "../assets/landing.png";

export default function AppDownloadSection() {
  return (
    <div className="grid md:grid-cols-2 gap-5 items-center">
      <div>
        <img src={mobileApp} alt="" />
      </div>

      <div className="flex items-center justify-center flex-col gap-4 text-center">
        <h2 className="font-bold text-2xl text-slate-700">
          Order Take-away even faster!
        </h2>
        <span className="max-w-[90%] text-slate-600">
          Download FoodMERN app for faster ordering and personalised
          recommendations
        </span>

        <img src={appDownload} alt="" />
      </div>
    </div>
  );
}
