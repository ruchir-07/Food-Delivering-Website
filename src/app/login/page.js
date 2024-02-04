'use client';

import {signIn} from "next-auth/react";
import Image from "next/image";
import { useState } from "react";

export default function LoginPage() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loginInProgress, setLoginInProgress] = useState(false);

    async function handleFormSubmit(e) {
        e.preventDefault();
        setLoginInProgress(true);
        // const {ok} = await fetch('/api/login', {
        //     method: 'POST',
        //     body: JSON.stringify({ email, password }),
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // });
        // if(ok){
        //     console.log('login successful');
        // }
        // else{
        //     console.log('login failed');
        // }
        await signIn('credentials', {
            email,
            password
        });
        setLoginInProgress(false);
    }

    return (
        <section className="mt-8">
            <h1 className="text-center text-primary text-4xl">
                Login
            </h1>
            <form onSubmit={handleFormSubmit} className="flex flex-col gap-4 max-w-xs mx-auto mt-8">
                <input type="email" name="email" placeholder="email" value={email} disabled={loginInProgress} onChange={e => setEmail(e.target.value)} />
                <input type="password" name="password" placeholder="password" value={password} disabled={loginInProgress} onChange={e => setPassword(e.target.value)} />
                <button type="submit" disabled={loginInProgress} >Login</button>
                <div className="my-4 text-center text-gray-500">or login with provider</div>
                <button className="flex gap-4 justify-center">
                    <Image src={'/google.png'} alt={'google'} width={24} height={24} />
                    Login with google
                </button>
            </form>
        </section>
    )
}