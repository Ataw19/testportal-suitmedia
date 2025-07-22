import heroImage from "../assets/hero-car.jpg";

const Banner = () => {
  return (
    <div className="relative w-full overflow-hidden h-200">
      <div
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${heroImage})`,
          clipPath: "polygon(0 0, 100% 0, 100% 65%, 0 100%)",
        }}
      />

      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center">
        <h1 className="text-5xl font-bold drop-shadow-lg">Ideas</h1>
        <p className="mt-4 text-xl drop-shadow-md">
          Where all our great things begin
        </p>
      </div>
    </div>
  );
};

export default Banner;
