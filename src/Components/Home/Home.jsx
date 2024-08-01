
import './home.css'

export default function Home() {
  return (
    <div className="container mx-auto">
      <div className="homePage bg-[#1ABC9C] py-56 text-center text-white flex justify-center items-center">
        <div className=''>
           <img src="https://routeegy.github.io/startFramework/assets/images/avataaars.svg" className=" mx-auto w-52" alt="avatar" />
        <h1 className="font-extrabold text-3xl text-white py-5 ">START FRAMEWORK</h1>
        <div className="starIcon relative mx-auto">
          <i className="fa-solid fa-star fa-xl text-white  "></i>
        </div>
        <p className='py-4'>Graphic Artist - Web Designer - Illustrator</p>
        </div>
      </div>
  
    </div>
  )
}
