import heroImg from "../assets/hero.png";

export default function Hero() {
  return (
    <div>
      <img
        src={heroImg}
        alt="heroImg"
        className="w-full max-h-[600px] object-cover"
      />
    </div>
  );
}
