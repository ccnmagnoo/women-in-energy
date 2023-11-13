import NextAuth from 'next-auth/next';
// import FacebookProvider from 'next-auth/providers/facebook';
// import InstagramProvider from 'next-auth/providers/instagram';
import Auth0Provider from 'next-auth/providers/auth0';
import GoogleProvider from 'next-auth/providers/google';
import { AuthOptions, Theme } from 'next-auth';

//res https://www.youtube.com/watch?v=YCEnpcCYlyo
const theme: Theme = {
  colorScheme: 'auto',
  brandColor: '#A233EC01',
  logo: undefined,
  buttonText: '#A233EC01',
};

const authOptions: AuthOptions = {
  //Configuration access providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    Auth0Provider({
      clientId: process.env.AUTH0_CLIENT_ID as string,
      clientSecret: process.env.AUTH0_CLIENT_SECRET as string,
      issuer: process.env.AUTH0_ISSUER as string,
    }),
  ],
  theme: theme,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
