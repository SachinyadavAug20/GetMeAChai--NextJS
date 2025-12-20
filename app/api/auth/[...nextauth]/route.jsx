import NextAuth from 'next-auth'
// import AppleProvider from 'next-auth/providers/apple'
// import FacebookProvider from 'next-auth/providers/facebook'
// import GoogleProvider from 'next-auth/providers/google'
// import EmailProvider from 'next-auth/providers/email'
import GitHubProvider from "next-auth/providers/github";
import mongoose from 'mongoose';
import User from '@/models/user';
import payment from '@/models/payment';
import connectDB from '@/db/connect';



export const authOptions = NextAuth({
    providers: [
        // OAuth authentication providers...
        // AppleProvider({
        //     clientId: process.env.APPLE_ID,
        //     clientSecret: process.env.APPLE_SECRET
        // }),
        // FacebookProvider({
        //     clientId: process.env.FACEBOOK_ID,
        //     clientSecret: process.env.FACEBOOK_SECRET
        // }),
        // GoogleProvider({
        //     clientId: process.env.GOOGLE_ID,
        //     clientSecret: process.env.GOOGLE_SECRET
        // }),
        // // Passwordless / email sign in
        // EmailProvider({
        //     server: process.env.MAIL_SERVER,
        //     from: 'NextAuth.js <no-reply@example.com>'
        // }),
        GitHubProvider({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        }),

    ],
    callbacks: {
        async signIn({ user, account, profile, email, credentials }) {

            if (account.provider === "github") {
                await connectDB();
                const currentUser = await User.findOne({ email: user.email||profile.email })
                if (!currentUser) {
                    const newUser =new User({
                        email: user.email||profile.email,
                        username: user.email.split("@")[0] || profile.email.split("@")[0],
                        // username: profile.username,
                        // profilePicURL: profile.avatar_url
                    })
                    await newUser.save();
                    user.name = newUser.username;
                }

            }
            return true
        }
    },
    async session({ session, user, token }) {
        const userDB = await User.findOne({ email: session.user.email })
        session.user.name = userDB?.username || session.user.name
        return session
    },
})
export { authOptions as GET, authOptions as POST }
