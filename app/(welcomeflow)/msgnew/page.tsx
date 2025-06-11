import Link from "next/link"

function page() {
  return (
    <div className="flex flex-col min-h-screen justify-center">
        <p className="flex  z-20 bg-gradient-to-b from-neutral-400 text-center md:from-neutral-300/90 to-neutral-800 md:to-neutral-800 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-6xl">
            Every Thursday at 12pm, new items drop from curated thrift stores
        </p>
        <div className="fixed bottom-8 right-5 ">
            
            <Link href="/getstart" className="h-full w-full px-10 py-3 bg-red-800  text-2xl rounded-lg focus:ring-2 ring-red-600/40 transition-all duration-500
                hover:ring-4">Next</Link>
        </div> 
    </div>
  )
}

export default page