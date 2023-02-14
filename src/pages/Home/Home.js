import image from "../../images/bg1.jpg";

function Home() {
  return (
    <div className="h-screen" style={{ backgroundImage: `url(${image})` }}>
      <div className="h-full w-full">
        <div className="h-full flex flex-col items-center justify-center">
          <p className="text-5xl text-[#4d4d4d] md:text-9xl">LOS ANGELES</p>
          <p className="text-5xl text-[#404f6c] md:text-9xl">MOUNTAINS</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
