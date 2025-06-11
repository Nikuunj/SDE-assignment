import FancyText from "@/components/FancyText"
import Link from "next/link"


function page() {

    // const navigate 
    return (
        <div className="flex items-center min-h-screen justify-center">
            <FancyText words={"Welcome to Thursday"} />
            <div className="fixed bottom-8 right-5 ">
                <Link href="/msgnew" className="h-full w-full px-7 py-2 md:px-9 md:py-3 bg-red-800  text-xl md:text-2xl rounded-lg focus:ring-2 ring-red-600/40 transition-all duration-500
                hover:ring-4">Next</Link>
            </div>

        </div>
    )
}

export default page