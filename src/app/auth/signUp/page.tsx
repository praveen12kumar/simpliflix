"use client"

import Input from "@/components/atoms/Input";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignUp() {
    const router = useRouter();

    const [username, setUsername] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");

  return (
    <div
      className="w-screen h-screen relative bg-no-repeat bg-center bg-fixed bg-cover"
      style={{ backgroundImage: "url('/images/background.jpg')" }}
    >
      <div className="w-full h-full bg-black/80">
        <nav className="px-32 py-6">
          <Image 
            src="/images/logo.png" 
            alt="logo" 
            width={150} 
            height={15} 
            priority 
          />
        </nav>
        <div className="flex justify-center">
            <div className="w-2/6 bg-black bg-opacity-75 p-16 self-center mt-2 rounded ">
                <h3 className="mb-6 font-medium text-3xl text-center text-white uppercase">Sign Up</h3>
                <div className="flex flex-col gap-4">
                <Input 
                    placeholder="Enter Username"
                    type="text"
                    onChange={(e)=> setUsername(e.target.value)}
                    value={username}                                                                                                                
                />

                <Input 
                    placeholder="Enter Email"
                    type="email"
                    onChange={(e)=> setEmail(e.target.value)}
                    value={email}                                                                                                                
                />
                    
                <Input 
                    placeholder="Enter Password"
                    type="password"
                    onChange={(e)=> setPassword(e.target.value)}
                    value={password}                                                                                                                
                />

                <button
                    className="bg-red-500 py-3 w-full mt-10 text-white rounded-md hover:bg-red-700 transition duration-300"
                    >
                                Sign Up
                </button>
                <p className="text-xs mt-10 text-neutral-400 text-center ">
                    Already have an account &nbsp;
                    <span
                        className="text-white ml-1 cursor-pointer hover:underline"
                        onClick={()=> router.push("/auth/signIn")}
                    >
                    Sign In now
                    </span>
                </p>

                </div>
            </div>
        </div>
      </div>
    </div>
  );
}
