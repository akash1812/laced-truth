'use client'
import { useState } from "react"
import localFont from 'next/font/local';
import { IoIosMenu } from "react-icons/io";

const minecraftFont = localFont({
  src: "../../public/fonts/MinecraftBold-nMK1.otf"
})

export default function Header(){
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavBar = ()=>{
        setIsOpen(!isOpen);
    };  

    return(
        <header>
        <div className="relative flex items-center justify-center mt-4">
        {/* <p className={`${minecraftFont.className} text-2xl select-none`}>Laced Truth</p> */}
        <a className={`${minecraftFont.className} text-2xl select-none`}
        href="/">Laced Truth</a>
        <div className="hidden md:block absolute right-0 space-x-4 mr-4">
          <a href="/what" className="text-gray-400 hover:text-gray-200">What's this?</a>
          <a href="/about" className="text-gray-400 hover:text-gray-200">About</a>
          <a href="/login" className="text-gray-400 hover:text-gray-200">Login</a>
          <a href="/register" className="text-gray-400 hover:text-gray-200">Register</a>
        </div>
        <div className="md:hidden">
            <button onClick={toggleNavBar} className="absolute right-0 top-2 mr-2">{isOpen ? 'X' : <IoIosMenu />}</button>
        </div>

         {isOpen && (
          <div className="md:hidden w-48 p-4 rounded-lg shadow-lg">
            <a href="/what" className="block mb-2 hover:text-gray-200">What's this?</a>
            <a href="/about" className="block mb-2 hover:text-gray-200">About</a>
            <a href="/login" className="block mb-2 hover:text-gray-200">Login</a>
            <a href="/register" className="block mb-2 hover:text-gray-200">Register</a>
          </div>
        )}
        
      </div>
        </header>
        
    )
}