import SpotifyWebApi from "spotify-web-api-node";
const scopes = [
  "user-read-private",
  "user-read-email",
  "user-read-playback-state",
  "user-modify-playback-state",
  "user-read-currently-playing",
  "streaming",
  "app-remote-control",
  "user-read-playback-position",
  "user-read-recently-played",
  "user-top-read",
  "playlist-read-private",
  "playlist-read-collaborative",
  "playlist-modify-public",
  "playlist-modify-private",
  "user-library-read",
  "user-library-modify",
].join(", ");
const prarams = {
  scopes,
};
const queryParamString = new URLSearchParams(prarams);
const LOGIN_URL = `https://accounts.spotify.com/authorize?${queryParamString}`;
const spotifyApi = new SpotifyWebApi({
  clientId: process.env.SPOTIFY_CLIENT_ID,
  clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
});

export default spotyf;

export { LOGIN_URL, spotifyApi };
