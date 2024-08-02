
import './contact.css'
export default function Contact() {
  return (
    <>
      <div className="contactPage py-20">
        <div className="container mx-auto">
          <div className="header text-[#2C3E50] text-center">
            <h1 className="text-5xl font-bold pt-5">CONTACT SECTION</h1>
            <div className="contactIcon relative mx-auto py-3">
              <i className="fa-solid fa-star fa-xl "></i>
            </div>
          </div>
          <div className="inner">
            <div className="form  py-10 flex flex-col justify-center items-center gap-8">
              <input
                type="text"
                className=" form-input rounded-md "
                placeholder="userName"
              />
              <input
                type="number"
                className=" form-input rounded-md  "
                placeholder="userAge"
              />
              <input
                type="email"
                className=" form-input rounded-md  "
                placeholder="userEmail"
              />
              <input
                type="password"
                className=" form-input rounded-md"
                placeholder="userPassword"
              />
              <div className=" py-5">
                <button className="btn text-white bg-[#1ABC9C] py-2 px-3 rounded-lg">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
