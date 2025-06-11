
import SignOut from "@/components/SignOut";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import Question from "@/components/Question";

async function getSession() {
    const session = await getServerSession();
    console.log(session);
    
    return session;
}

export default async function Home() {
    const session = await getSession();
    if(!session) {
        redirect('/welcome')
    }
    return (
        <div className="text-white flex justify-center items-center text-wrap min-h-screen">
            {/* <div className="bg-gray-600 px-4 py-2">
                {JSON.stringify(session.user)}
            </div> */}
            <Question />
                <div className={"fixed top-5 right-5"}>
                    <SignOut />
                </div>
        </div>        
    );
}
