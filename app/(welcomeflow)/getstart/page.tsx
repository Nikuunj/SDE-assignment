import FancyText from "@/components/FancyText"
import SignIn from "@/components/SignIn"


function page() {
  return (
    <div className="flex items-center min-h-screen justify-center">
        <FancyText words="Create your thrift profile and start swiping" />
        <div className="fixed bottom-8 right-5 ">
            <SignIn />
        </div>
    </div>
  )
}

export default page