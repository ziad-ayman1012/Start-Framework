
import './footer.css'
export default function Footer() {
    return (
      <>
        <div className="">
          <div className="container bg-[#2C3E50] flex justify-around items-center py-10">
            <div className="item text-center text-white w-4/12">
              <h3 className="font-bold text-2xl py-2">LOCATION</h3>
              <p>2215 John Daniel Drive</p>
              <p className="py-3">Clark, MO 65243</p>
            </div>
            <div className="item text-center text-white  w-4/12">
              <h3 className="font-bold text-2xl py-2">AROUND THE WEB</h3>
              <div className="icons flex p-4 mx-auto justify-center items-center">
                <div className="icon rounded-full p-2 me-2">
                  <i className="fab fa-facebook fa-lg"></i>
                </div>
                <div className="icon rounded-full p-2 me-2">
                  <i className="fab fa-twitter fa-lg"></i>
                </div>
                <div className="icon rounded-full p-2 me-2">
                  <i className="fa-brands fa-linkedin fa-lg"></i>
                </div>
                <div className="icon rounded-full p-2 me-2">
                  <i className="fa-solid fa-globe fa-lg"></i>
                </div>
              </div>
            </div>
            <div className="item text-center text-white  w-4/12">
              <h3 className="font-bold text-2xl py-2">ABOUT FREELANCER</h3>
              <p>
                Freelance is a free to use, licensed Bootstrap theme <br />{" "}
                created by Route
              </p>
            </div>
          </div>
          <div className="container bg-[#1A252F] text-white py-5 flex justify-center items-center">
            <p>Copyright © Your Website 2021</p>
          </div>
        </div>
      </>
    );
}
