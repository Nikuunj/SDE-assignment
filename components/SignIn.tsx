"use client"

import { signIn, signOut } from "next-auth/react"

function SignIn() {
  return (
    <div>
        <button className="bg-red-300 px-5 py-2 rounded-lg m-3 z-50" onClick={() => signIn()}>Sign in</button>
        <button className="bg-red-300 px-5 py-2 rounded-lg m-3" onClick={() => signOut()}>Sign out</button>
    </div>
  )
}

export default SignIn