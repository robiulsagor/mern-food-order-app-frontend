import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";
import NormalNav from "./NormalNav";

export default function Header() {
  return (
    <div className="border-b-2 border-b-orange-500 py-6 ">
      <div className="container mx-auto flex justify-between items-center">
        <Link
          to="/"
          className="text-3xl font-bold text-orange-600 tracking-tight"
        >
          FoodMERN.com
        </Link>

        <div className="hidden md:block">
          <NormalNav />
        </div>

        <div className="md:hidden">
          <MobileNav />
        </div>
      </div>
    </div>
  );
}
