"use client"

import { signOut } from "next-auth/react"

function SignOut() {
  return (
    <div className="h-full w-full px-7 py-2 md:px-9 md:py-3 bg-red-800  text-xl md:text-2xl rounded-lg focus:ring-2 ring-red-600/40 transition-all duration-500
    hover:ring-4" onClick={() => signOut()}>SignOut</div>
  )
}

export default SignOut