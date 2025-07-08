'use client'
import { useState } from "react"
import localFont from 'next/font/local'
import { IoIosMenu } from "react-icons/io"
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'

const minecraftFont = localFont({
  src: "../../public/fonts/MinecraftBold-nMK1.otf"
})

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const toggleNavBar = () => setIsOpen(!isOpen)
  const [userButton, setUserButton] = useState(false);

  return (
    <header>
      <div className="relative flex items-center justify-center mt-4">
        <a className={`${minecraftFont.className} text-2xl select-none`} href="/">Laced Truth</a>

        <div className="hidden md:flex absolute right-0 space-x-4 mr-4 items-center">
          <a href="/what" className="text-gray-400 hover:text-gray-200">What's this?</a>
          <a href="/about" className="text-gray-400 hover:text-gray-200">About Us</a>
          
          <SignedOut>
            <SignInButton>
          <a className="text-gray-400 hover:text-gray-200 hover:cursor-pointer">Login</a>

            </SignInButton>
            <SignUpButton>
          <a className="text-gray-400 hover:text-gray-200 hover:cursor-pointer">Register</a>
              
            </SignUpButton>
          </SignedOut>
          <div className="text-white bg-white">
            <SignedIn>
            <UserButton  showName appearance={{
              variables:{
                colorText: ''
              }
            }}/>
          </SignedIn>
          </div>
        </div>

        <div className="md:hidden">
          <button onClick={toggleNavBar} className="absolute right-0 top-2 mr-2">
            {isOpen ? 'X' : <IoIosMenu />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden w-48 p-4 rounded-lg shadow-lg absolute right-2 top-12 bg-black">
            <a href="/what" className="block mb-2 hover:text-gray-200">What's this?</a>
            <a href="/about" className="block mb-2 hover:text-gray-200">About Us</a>
            <SignedOut>
              <SignInButton><a className="block mb-2 hover:text-gray-200 hover:cursor-pointer">Login</a></SignInButton>
              <SignUpButton><a className="block mb-2 hover:text-gray-200 hover:cursor-pointer">Register</a></SignUpButton>
            </SignedOut>

            <SignedIn>
              <UserButton showName appearance={{
              variables:{
                colorText: ''
              }
            }}/>
            </SignedIn>
          </div>
        )}
      </div>
    </header>
  )
}
