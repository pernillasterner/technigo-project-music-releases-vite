import { Album } from "./components/AlbumList/AlbumList";
import { Hero } from "./components/Hero/Hero";
import { Playlist } from "./components/PlayList/PlayList";

export const App = () => {
  return (
    <main>
      <Hero />
      <Playlist />
      <Album />
    </main>
  );
};
