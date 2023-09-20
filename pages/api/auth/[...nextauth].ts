import {AuthOptions} from 'next-auth';
import NextAuth from 'next-auth/next';
import GithubProvider from 'next-auth/providers/github';

export const authOptions: AuthOptions = {
    providers: [GithubProvider({clientId: 'sharma', clientSecret: 'shanu'})],
    secret: 'Shanu Sharm',
    session: {
        strategy: 'jwt',
        maxAge: 30 * 24 * 60 * 60, // 30 days
    },
    callbacks: {},
};

export default NextAuth(authOptions);
