import FancyText from "@/components/FancyText"
import Link from "next/link"

function page() {
  return (
    <div className="flex flex-col min-h-screen justify-center">
        <FancyText words={'Every Thursday at 12pm, new items drop from curated thrift stores'} className={''}/>
        <div className="fixed bottom-8 right-5 ">
            
            <Link href="/getstart" className="h-full w-full px-7 py-2 md:px-9 md:py-3 bg-red-600/90 dark:bg-red-800  text-xl md:text-2xl rounded-lg focus:ring-2 ring-red-600/40 transition-all duration-500
                hover:ring-4">Next</Link>
        </div> 
    </div>
  )
}

export default page