import { Link } from "react-router-dom";
import { Button } from "./ui/button";

export default function NormalNav() {
  return (
    <Link to="/login">
      <Button
        variant="ghost"
        className="font-bold hover:bg-orange-500 hover:text-white"
      >
        Login
      </Button>
    </Link>
  );
}
