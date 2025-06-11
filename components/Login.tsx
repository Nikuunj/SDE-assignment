"use client"

import { useRef } from "react"
import InputBox from "./InputBox"
import { signIn } from "next-auth/react";
import { BackgroundGradient } from "./BackgroundGradient";

function Login() {
    const ref = useRef<HTMLInputElement[] | null[]>(Array(3).fill(0))

    async function onSubmit(e: React.FormEvent) {
        e.preventDefault(); 
        const name = ref.current[0]?.value;
        const email = ref.current[1]?.value
        const password = ref.current[2]?.value

        await signIn('credentials', {
            name : name,
            email: email,
            password: password,
            redirect: true,
            callbackUrl:  process.env.NEXTAUTH_URL ?? 'http://localhost:3000'
        })
    }


    return (
        <form onSubmit={onSubmit}>
            <BackgroundGradient className="rounded-lg max-w-sm px-2 py-8 transition-all duration-300 sm:px-10 sm:py-15 bg-zinc-100 dark:bg-black flex flex-col gap-3 text-black dark:text-white">
                <div className="text-center text-2xl font-bold">Login Page</div>
                <InputBox refrence={(e) => ref.current[0] = e} placeHolder={"Name"} typeInput={"text"}/>
                <InputBox refrence={(e) => ref.current[1] = e} placeHolder={"Email"} typeInput={"text"}/>
                <InputBox refrence={(e) => ref.current[2] = e} placeHolder={"Password"} typeInput={"password"}/>
                <button type="submit" className="cursor-pointer outline-none h-full w-full px-5 py-2 bg-red-800 text-lg rounded-sm focus:ring-2 ring-red-600/40 transition-all duration-500 hover:ring-4">
                    Sign In
                </button>
            </BackgroundGradient>
        </form>
    )
}

export default Login