"use client"

import { signOut } from "next-auth/react"

function SignOut() {
  return (
    <button className="cursor-pointer h-full w-full px-5 py-2 bg-red-600/90 dark:bg-red-800  text-base md:text-lg rounded-lg focus:ring-2 ring-red-600/40 transition-all duration-500
    hover:ring-4" onClick={() => signOut()}>SignOut</button>
  )
}

export default SignOut