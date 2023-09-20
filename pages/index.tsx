import React from 'react';
import {signIn, useSession} from 'next-auth/react';

export default function () {
    const session  = useSession();
    return (
        <>
            <button onClick={() => signIn()}>Sign Up</button>
            {console.log(session)}
        </>
    );
}
