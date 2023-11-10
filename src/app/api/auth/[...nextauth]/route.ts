import NextAuth from 'next-auth/next';
// import FacebookProvider from 'next-auth/providers/facebook';
// import InstagramProvider from 'next-auth/providers/instagram';
import GoogleProvider from 'next-auth/providers/google';

import { AuthOptions, Theme } from 'next-auth';
import app_logo from '@/app/static/mi-logo.svg';

//res https://www.youtube.com/watch?v=YCEnpcCYlyo
const theme: Theme = {
  colorScheme: 'light',
  brandColor: '#A233EC01',
  logo: app_logo,
  buttonText: '#A233EC01',
};

const authOptions: AuthOptions = {
  //Configuration access providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  theme: theme,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
