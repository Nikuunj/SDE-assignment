"use client"

import { useRef } from "react"
import InputBox from "./InputBox"

function Login() {
    const ref = useRef<HTMLInputElement[] | null[]>(Array(3).fill(0))


    return (
        <div className="px-8 py-8 border border-zinc-700 flex flex-col gap-3">
            <div className="text-center text-2xl font-bold">Login Page</div>
            <InputBox refrence={(e) => ref.current[0] = e} placeHolder={"Name"} typeInput={"text"}/>
            <InputBox refrence={(e) => ref.current[1] = e} placeHolder={"Email"} typeInput={"text"}/>
            <InputBox refrence={(e) => ref.current[2] = e} placeHolder={"Password"} typeInput={"password"}/>
            <button className="">Sign In</button>
        </div>
    )
}

export default Login