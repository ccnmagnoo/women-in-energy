import NextAuth from 'next-auth/next';
import FacebookProvider from 'next-auth/providers/facebook';
import InstagramProvider from 'next-auth/providers/instagram';
import GoogleProvider from 'next-auth/providers/google';

import { AuthOptions, Theme } from 'next-auth';

//res https://www.youtube.com/watch?v=YCEnpcCYlyo
const theme: Theme = {
  colorScheme: 'light',
  brandColor: '#A233EC01',
  logo: '/_next/static/media/mi-logo.a7490708.svg',
  buttonText: '#A233EC01',
};

const authOptions: AuthOptions = {
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
  theme: theme,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
