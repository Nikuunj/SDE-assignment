import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials"



const handler = NextAuth({
    pages: {
        signIn: '/auth/signin'
    },
    providers: [
        CredentialsProvider({
        name: 'email',
        credentials: {
            name: { label: 'Name', type: 'text', placeholder: 'Name' },
            email: { label: 'Email', type: 'text', placeholder: 'Email' },
            password: { label: 'Password', type: 'password', placeholder: 'Password' },
        },
        async authorize(credentials: Record<"name" | "email" | "password", string> | undefined) {
            if (!credentials) return null;

            return {
                id: credentials.email,
                name: credentials.name,
                email: credentials.email
            };
        },
      })
    ],
    secret: process.env.NEXTAUTH_SECRET
})

export { handler as GET, handler as POST }