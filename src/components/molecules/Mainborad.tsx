import { AiOutlineInfoCircle } from "react-icons/ai"

const Mainborad = () => {
  return (
    <div className="w-full relative">
        <video src={'/videos/1.mp4'}
            autoPlay 
            muted
            loop
            width={'100%'}
        />

        <div className="absolute top-[40%] ml-16">
            <p className="text-white text-6xl h-full w-[40%]">
               Avengers Infinity war 2021
            </p>
            <p className="text-white text-lg w-[70%] mt-8 font-sans">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo alias deleniti fugit asperiores.
            </p>

            <div className="mt-3 flex items-center gap-3">
                <button className="bg-white flex items-center bg-opacity-40 rounded py-2 px-4 font-semibold hover:bg-opacity-50 transition duration-200">
                    <AiOutlineInfoCircle className="mr-1"/>
                    More Info
                </button>

                <button className="bg-white flex items-center bg-opacity-90 rounded py-2 px-4 font-semibold hover:bg-opacity-95 transition duration-200">
                   
                    Play Now
                </button>
            </div>
        </div>

    </div>
  )
}

export {Mainborad}