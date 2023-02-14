import image from "../../images/bg3.jpg";

function Climb() {
  return (
    <div
      className="h-screen bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${image})` }}
    >
      <div className="h-full">
        <div className="h-1/2 md:h-1/4 flex flex-col md:flex-row items-center justify-center">
          <h1 className="text-9xl text-[#607b91]">02.</h1>
          <p className="text-4xl mr-6 text-[#404f6c]">Climb</p>
          <div>
            <p className="m-0 md:m-2 text-center text-xl">
              Labore eu duis nulla laboris elit fugiat commodo laboris nulla
              velit.
            </p>
            <p className="m-0 md:m-2 text-center text-xl">
              Nisi do ad officia quis.
            </p>
          </div>
        </div>
        <div>
          <div className="bg-white bg-opacity-50 w-fit m-4">
            <h2 className="text-3xl text-[#404f6c]">Schedule</h2>
            <div className="flex flex-row">
              <div className="m-2">
                <p className="text-lg">25 Nov 2016</p>
                <p className="text-lg">28 Nov 2016</p>
                <p className="text-lg">18 Dec 2016</p>
                <p className="text-lg">7 Jan 2017</p>
              </div>
              <div className="m-2">
                <p className="text-lg">Officia id Lorem fugiat ut.</p>
                <p className="text-lg">Officia id Lorem fugiat ut.</p>
                <p className="text-lg">Officia id Lorem fugiat ut.</p>
                <p className="text-lg">Officia id Lorem fugiat ut.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Climb;
