"use client"

import { signIn } from "next-auth/react"

function SignIn() {
  return (
    
    <button className="h-full w-full px-7 py-2 md:px-9 md:py-3 bg-red-600/90 dark:bg-red-800  text-xl md:text-2xl rounded-lg focus:ring-2 ring-red-600/40 transition-all duration-500
    hover:ring-4 cursor-pointer"   onClick={() => signIn()}>Get Started</button>

  )
}

export default SignIn