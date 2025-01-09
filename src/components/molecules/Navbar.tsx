import Image from "next/image"
import { NavbarItem } from "../atoms/NavbarItem"
import { BsBell,BsSearch } from "react-icons/bs";

export const Navbar = ()=>{

    return(
        <div className="w-full fixed top-0 z-40 ">
            <div className="flex flex-row items-center px-16 py-6 bg-zinc-900 bg-opacity-10">
                <Image src={'/images/logo.png'} alt="logo" height={12} width={150} />
                <div className="flex flex-row ml-8 gap-8">
                    <NavbarItem label="Home"/>
                    <NavbarItem label="About"/>
                    <NavbarItem label="TV Show"/>
                    <NavbarItem label="Movies"/>
                    <NavbarItem label="Latest"/>
                </div>

                <div className="flex flex-row ml-auto gap-8 items-center ">
                    <div className="text-gray-400 hover:text-gray-300 cursor-pointer transition">
                        <BsSearch/>
                    </div>
                    <div className="text-gray-400 hover:text-gray-300 cursor-pointer transition">
                        <BsBell/>
                    </div>

                    <div className="w-10 h-10 rounded text-gray-400 hover:text-gray-300 cursor-pointer transition">
                        <Image src={'/images/1.png'} alt="user-logo" width={60} height={9}/>
                    </div>
                    

                </div>
            </div>
        </div>
    )
}