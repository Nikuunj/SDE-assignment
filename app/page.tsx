
import SignOut from "@/components/SignOut";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";

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
        <div className="text-white flex justify-center items-center min-h-screen">
            <div className="bg-gray-600 px-10 py-5 flex flex-col gap-2">
                {JSON.stringify(session)}
                <SignOut />
            </div>
        </div>        
    );
}
