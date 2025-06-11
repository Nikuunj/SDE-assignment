import SignIn from "@/components/SignIn"
import Link from "next/link"


function page() {
  return (
    <div className="flex items-center min-h-screen justify-center">
        <p className="flex  z-20 bg-gradient-to-b from-neutral-400 text-center md:from-neutral-300/90 to-neutral-800 md:to-neutral-800 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-6xl">
            Create your thrift profile and start swiping
        </p>
        <div>
            <div className="fixed bottom-8 right-5 ">
                <SignIn /> 
            </div>
        </div>
    </div>
  )
}

export default page