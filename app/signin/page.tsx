"use client"
import { signIn } from "next-auth/react"

export default function SignIn() {
    return (
        <>
            <div>
                <h1>Welcome Back</h1>
                <p>Sign in to access your intelligence workspace.</p>
                <button onClick={()=> signIn("google", {callbackUrl: "/"})}>Sign in with Google</button>
            </div>
        </>
    )

}