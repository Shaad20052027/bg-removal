import React from 'react'
import { assets } from '../assets/assets'
import { Link } from 'react-router-dom'
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react"

const NavBar = () => {
  return (
    <div className='flex items-center justify-between mx-4 py-3 lg:mx-44'>
        
        <Link to='/'>
            <img className='w-32 sm:w-44' src={assets.logo} alt="" />
        </Link>

        <div>
            <SignedOut>
                <SignInButton mode="modal" afterSignInUrl="/">
                    <button className='bg-zinc-800 text-white flex items-center gap-4 px-6 py-2 sm:px-8 sm:py-3 text-sm rounded-full'>
                        Get Started
                        <img className='w-3 sm:w-4' src={assets.arrow_icon} alt="" />
                    </button>
                </SignInButton>
            </SignedOut>

            <SignedIn>
                <UserButton afterSignOutUrl="/" />
            </SignedIn>
        </div>

    </div>
  )
}

export default NavBar