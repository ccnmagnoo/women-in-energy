import NextAuth from 'next-auth/next';
import FacebookProvider from 'next-auth/providers/facebook';

export const authOptions = {
  //Configuration access providers
  providers: [
    FacebookProvider({
      clientId: '',
      clientSecret: '',
    }),
  ],
};

export default NextAuth(authOptions);
