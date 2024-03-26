import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div className="bg-orange-500 py-10 ">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-5">
        <Link to="/" className="text-3xl text-white font-bold logo">
          FoodMERN.com
        </Link>

        <div className="flex gap-5">
          <Link to="/" className="text-white ">
            Privacy Policy
          </Link>
          <Link to="/" className="text-white ">
            Terms of Service
          </Link>
        </div>
      </div>
    </div>
  );
}
