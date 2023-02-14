import NextAuth from "next-auth";
import SpotifyProvider from "next-auth/providers/spotify";
import { spotifyApi } from "../../../lib/spotyf";
async function refreshAccessToken(token) {
  try {
    spotifyApi.setAccessToken(token.accessToken);
    spotifyApi.setRefreshToken(token.refreshToken);

    const { body: refreshAccessToken } = await spotifyApi.refreshAccessToken();
    console.log("refreshed access token", refreshAccessToken);

    return {
      ...token,
      accessToken: refreshAccessToken.access_token,
      accessTokenExpires: Date.now() + refreshAccessToken.expires_in * 1000, // handle expires_in
      //spotifyApi
      refreshAccessToken:
        refreshAccessToken.refresh_token ?? token.refreshToken, // if refresh token is not returned, use the old one
    };
  } catch (error) {
    console.log(error);
    return {
      ...token,
      error: "RefreshAccessTokenError",
    };
  }
}

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    SpotifyProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      authorization: LOGIN_URL,
    }),
    // ...add more providers here
  ],
  secret: process.env.JWT_sSECRET,
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt(token, account, user) {
      //initially sign in
      if (account && user) {
        return {
          ...token,
          accessToken: account.accessToken,
          refreshToken: account.refreshToken,
          username: account.providerAccountId,
          accessTokenExpires: account.expires_at * 1000, // handle expires_at as seconds
        };
      }
      if (Date.now() < token.accessTokenExpires) {
        console.log("token is still valid");
        return token;
      }
      console.log("token is expired");
      return await refreshAccessToken(token);
    },
    //  session
    async session(session, token) {
      session.user.accessToken = token.accessToken;
      session.user.refreshToken = token.refreshToken;
      session.user.username = token.username;

      return session;
    },
  },
});
