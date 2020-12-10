import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

console.log(process.env.GITHUB_ID);
console.log(process.env.GITHUB_SECRET);

const options = {
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],

  database: process.env.DATABASE_URL,
};

export default (req, res) => NextAuth(req, res, options);
