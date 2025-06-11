"use client"

import { signIn } from "next-auth/react"

function SignIn() {
  return (
    <div>
        <button className="h-full w-full px-10 py-3 outline-none bg-red-800  text-2xl rounded-lg focus:ring-2 ring-red-600/40 transition-all duration-500
                hover:ring-4 z-40"   onClick={() => signIn()}>Get Started</button>
    </div>
  )
}

export default SignIn