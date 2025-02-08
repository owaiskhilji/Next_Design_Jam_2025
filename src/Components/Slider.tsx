import Image from "next/image"
import img from "../../public/homeimage/1212.png"
export default function Slider(){
    return(
        <div className="">
        <div className="w-full bg-customGray">
    <div className="max-w-full md:max-w-full h-full md:h-[600px]  md:flex md:items-center space-y-8 pt-5">
      <div className="block sm:flex sm:flex-col sm:justify-center md:flex md:flex-row justify-center w-full px-10 items-center mx-auto">

        <div className="rounded-md max-w-lg space-y-6">
          <h1 className="text-2xl sm:text-3xl sm:mx-auto md:text-5xl font-extrabold">
            FIND CLOTHES THAT MATCHES YOUR STYLE
          </h1>
          <p className="text-sm sm:text-md md:text-lg text-stone-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <button className="Btn btn bg-black ml-auto w-64 text-xs sm:text-sm text-white px-2 md:px-4 md:py-2 md:w-44 hover:text-black">
            Shop Now
          </button>
        </div>
      


        {/* Image Section */}
        <div className="md:flex md:items-center">
          <Image
            src={img}
            alt="login-image"
            className="object-contain mb-5 w-full h-full sm:w-[500px] md:h-[600px] md:w-auto"
          />
          
        </div>
      </div> 

    </div>
    </div>
    <div className="border-b-4 border-t-4 border-yellow-600">
<div className="navbar bg-black space-y-2 text-neutral-content flex flex-wrap  md:flex justify-around">
<h1 className="text-xl md:text-2xl md:font-bold text-white">VERSACE</h1>
<h1 className="text-xl md:text-2xl md:font-bold text-white">ZNA</h1>
<h1 className="text-xl md:text-2xl md:font-bold text-white">GUCCI</h1>
<h1 className="text-xl md:text-2xl md:font-bold text-white">PRADA</h1>
<h1 className="text-xl md:text-2xl md:font-bold text-white">Colvin Klein</h1>
</div>
     </div>
        </div>
    )
}