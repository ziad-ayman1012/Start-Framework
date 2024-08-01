import "./portfolio.css";
export default function Portfolio() {
  return (
    <>
      <div className="workPage flex justify-center py-20 items-center text-[#2C3E50]">
        <div className="container mx-auto">
          <div className="text-center">
            <h1 className="text-4xl  font-bold pt-5">PORTFOLIO COMPONENT</h1>
            <div className="iconTitle relative mx-auto py-2">
              <i className="fa-solid fa-star fa-xl "></i>
            </div>
          </div>
          <div className=" row flex flex-wrap justify-between items-center py-3">
            <div className="inner w-4/12 p-10">
              <div className="card  relative  overflow-hidden">
                <img
                  src="https://routeegy.github.io/startFramework/assets/images/poert1.png"
                  className="rounded-lg"
                  alt=""
                />
                <div className="text-center cardBody rounded-lg w-full absolute top-0 end-0 start-0 bottom-0 flex justify-center items-center">
                  <i className="fa-solid fa-plus text-6xl text-white"></i>
                </div>
              </div>
            </div>
            <div className="inner w-4/12 p-10">
              <div className="card  relative  overflow-hidden">
                <img
                  src="https://routeegy.github.io/startFramework/assets/images/port2.png"
                  className="rounded-lg"
                  alt=""
                />
                <div className="text-center cardBody rounded-lg w-full absolute top-0 end-0 start-0 bottom-0 flex justify-center items-center">
                  <i className="fa-solid fa-plus text-6xl text-white"></i>
                </div>
              </div>
            </div>
            <div className="inner w-4/12 p-10">
              <div className="card  relative  overflow-hidden">
                <img
                  src="https://routeegy.github.io/startFramework/assets/images/port3.png"
                  className="rounded-lg"
                  alt=""
                />
                <div className="text-center cardBody rounded-lg w-full absolute top-0 end-0 start-0 bottom-0 flex justify-center items-center">
                  <i className="fa-solid fa-plus text-6xl text-white"></i>
                </div>
              </div>
            </div>
            <div className="inner w-4/12 p-10">
              <div className="card  relative  overflow-hidden">
                <img
                  src="https://routeegy.github.io/startFramework/assets/images/poert1.png"
                  className="rounded-lg"
                  alt=""
                />
                <div className="text-center cardBody rounded-lg w-full absolute top-0 end-0 start-0 bottom-0 flex justify-center items-center">
                  <i className="fa-solid fa-plus text-6xl text-white"></i>
                </div>
              </div>
            </div>
            <div className="inner w-4/12  p-10">
              <div className="card relative  overflow-hidden">
                <img
                  src="https://routeegy.github.io/startFramework/assets/images/port2.png"
                  className="rounded-lg"
                  alt=""
                />
                <div className="text-center cardBody rounded-lg w-full absolute top-0 end-0 start-0 bottom-0 flex justify-center items-center">
                  <i className="fa-solid fa-plus text-6xl text-white"></i>
                </div>
              </div>
            </div>
            <div className="inner w-4/12 p-10">
              <div className="card  relative  overflow-hidden">
                <img
                  src="https://routeegy.github.io/startFramework/assets/images/port3.png"
                  className="rounded-lg"
                  alt=""
                />
                <div className="text-center cardBody rounded-lg w-full absolute top-0 end-0 start-0 bottom-0 flex justify-center items-center">
                  <i className="fa-solid fa-plus text-6xl text-white"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
