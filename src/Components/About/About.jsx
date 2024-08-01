import './about.css'
export default function About() {
  return (
    <>
      <div className="container mx-auto">
        <div className="aboutPage text-white bg-[#1ABC9C] py-60 w-full flex justify-center items-center">
          <div>
            <div className="text-center">
              <h1 className="text-4xl py-5 font-extrabold">ABOUT COMPONENT</h1>
              <div className="star relative mx-auto">
                <i className="fa-solid fa-star fa-xl text-white"></i>
              </div>
            </div>
            <div className="row flex py-5  gap-5">
              <div className="w-6/12">
                Freelancer is a free bootstrap theme created by Route. The
                download includes <br /> the complete source files including
                HTML, CSS, and JavaScript as <br /> well as optional SASS
                stylesheets for easy customization.
              </div>
              <div className="w-6/12">
                Freelancer is a free bootstrap theme created by Route. The
                download includes <br /> the complete source files including
                HTML, CSS, and JavaScript as <br /> well as optional SASS
                stylesheets for easy customization.
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
