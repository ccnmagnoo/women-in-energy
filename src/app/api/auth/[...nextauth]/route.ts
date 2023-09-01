import NextAuth from 'next-auth/next';
import FacebookProvider from 'next-auth/providers/facebook';
import InstagramProvider from 'next-auth/providers/instagram';
import GoogleProvider from 'next-auth/providers/google';

//res https://www.youtube.com/watch?v=YCEnpcCYlyo

const authOptions = {
  //Configuration access providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID as string,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET as string,
    }),
    InstagramProvider({
      clientId: '',
      clientSecret: '',
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
