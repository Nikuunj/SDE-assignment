"use client"

import { useRef } from "react"
import InputBox from "./InputBox"
import { signIn } from "next-auth/react";

function Login() {
    const ref = useRef<HTMLInputElement[] | null[]>(Array(3).fill(0))

    async function onSubmit(){
        const name = ref.current[0]?.value;
        const email = ref.current[1]?.value
        const password = ref.current[2]?.value

        await signIn('credentials', {
            name : name,
            email: email,
            password: password,
            redirect: true,
            callbackUrl: 'http://localhost:3000'
        })

    }

    return (
        <div className="px-8 py-8 border border-zinc-700 flex flex-col gap-3">
            <div className="text-center text-2xl font-bold">Login Page</div>
            <InputBox refrence={(e) => ref.current[0] = e} placeHolder={"Name"} typeInput={"text"}/>
            <InputBox refrence={(e) => ref.current[1] = e} placeHolder={"Email"} typeInput={"text"}/>
            <InputBox refrence={(e) => ref.current[2] = e} placeHolder={"Password"} typeInput={"password"}/>
            <button onClick={onSubmit} className="cursor-pointer outline-none h-full w-full px-5 py-2 bg-red-800  text-lg rounded-sm focus:ring-2 ring-red-600/40 transition-all duration-500
                hover:ring-4">Sign In</button>
        </div>
    )
}

export default Login