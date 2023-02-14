import image from "../../images/bg2.jpg";

function History() {
  return (
    <div
      className="h-screen bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="h-full flex flex-col">
        <div className="h-1/2 md:h-1/4 flex items-center justify-center">
          <h1 className="text-9xl text-[#607b91]">01.</h1>
          <p className="text-4xl text-[#404f6c]">History</p>
        </div>
        <div className="text-center text-xl">
          <p className="p-2 text-white">
            Eiusmod proident esse laboris veniam veniam sunt pariatur enim
            nulla. Proident ut eiusmod in velit qui ea tempor sunt velit ex ad
            amet exercitation tempor. Irure anim sint veniam enim qui dolor
            irure.Veniam ut occaecat in reprehenderit. Anim ad amet irure
            consectetur exercitation eiusmod deserunt. Deserunt commodo esse
            fugiat ad commodo non anim exercitation.
          </p>
        </div>
      </div>
    </div>
  );
}

export default History;
