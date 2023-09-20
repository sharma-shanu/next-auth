import React from 'react';
import {signIn, useSession} from 'next-auth/react';
import { getServerSession } from 'next-auth';
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next'
import { authOptions } from './api/auth/[...nextauth]';

export default function (data:any) {
    return (
        <>
            <button onClick={() => signIn()}>Sign Up</button>
            {console.log(data)}
        </>
    );
}


export const getServerSideProps = async (context:any)=>{
    const {req,res} = context
    const data = await getServerSession(req,res,authOptions)
    return {
        props:data
    }

}