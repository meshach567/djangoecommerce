import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) {
          throw new Error('Missing email or password');
        }

        // In a real-world scenario, you would authenticate against your backend API
        if (
          credentials.email === process.env.NEXT_EMAIL_LOGIN &&
          credentials.password === process.env.NEXT_PASSWORD_LOGIN
        ) {
          return {
            id: '1',
            name: 'Admin User',
            email: 'admin@example.com',
          };
        } else {
          throw new Error('Invalid credentials');
        }
      },
    }),
  ],
  pages: {
    signIn: '/login',
  },
  callbacks: {
    async jwt({ token, user }) {
      return { ...token, ...user };
    },
    async session({ session, token }) {
      session.user = token as any;
      return session;
    },
  },
});

export { handler as GET, handler as POST };