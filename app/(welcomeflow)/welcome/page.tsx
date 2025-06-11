import Link from "next/link"


function page() {

    // const navigate 
    return (
        <div className="flex items-center min-h-screen justify-center">
            <p className="flex  z-20 bg-gradient-to-b from-neutral-200 text-center md:from-neutral-300/90 to-neutral-700 md:to-neutral-800 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-6xl">
                Welcome to Thursday
            </p>

            <div className="fixed bottom-8 right-5 ">
                <Link href="/msgnew" className="h-full w-full px-10 py-3 bg-red-800  text-2xl rounded-lg focus:ring-2 ring-red-600/40 transition-all duration-500
                hover:ring-4">Next</Link>
            </div>

        </div>
    )
}

export default page