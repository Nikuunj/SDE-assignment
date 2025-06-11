import { getServerSession } from "next-auth";

async function getSession() {
    const session = await getServerSession();
    console.log(session);
    
    return session;
}

export default async function Home() {
    const session = await getSession();

    if(!session)  {
        return <>not log</>
    }
    return (
        <div className="text-white flex justify-center items-center min-h-screen">
            <div className="bg-gray-600 px-10 py-5 ">
                {JSON.stringify(session)}
            </div>
        </div>        
    );
}
