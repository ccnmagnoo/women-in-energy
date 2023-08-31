import NextAuth from 'next-auth/next';
import FacebookProvider from 'next-auth/providers/facebook';
import InstagramProvider from 'next-auth/providers/instagram';
import GoogleProvider from 'next-auth/providers/google';

//res https://www.youtube.com/watch?v=YCEnpcCYlyo

export const authOptions = {
  //Configuration access providers
  providers: [
    FacebookProvider({
      clientId: '',
      clientSecret: '',
    }),
    InstagramProvider({
      clientId: '',
      clientSecret: '',
    }),
    GoogleProvider({
      clientId: '',
      clientSecret: '',
    }),
  ],
};

export default NextAuth(authOptions);
