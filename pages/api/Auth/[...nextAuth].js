// import NextAuth from 'next-auth'
// import Providers from 'next-auth/providers'
// import GoogleProvider from 'next-auth/providers/google'


// export default NextAuth({
//   providers: [
//     GoogleProvider({
//       clientId: process.env.GOOGLE_ID,
//       clientSecret: process.env.GOOGLE_SECRET
//     })
//   ],
//   database: process.env.DB_URL,
//   session: {
//     jwt: true
//   },
//   jwt: {
//     secret: 'asdcvbtjhm'
//   },
//   callbacks: {
//     async jwt(token, user) {
//       if (user) {
//         token.id = user.id
//       }
//       return token
//     },
//     async session(session, token) {
//       session.user.id = token.id
//       return session
//     }
//   }
// })