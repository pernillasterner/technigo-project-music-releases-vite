import { Album } from "./components/Album/Album";
import { Hero } from "./components/Header/Hero";
import { albums } from "./data/albums.json";

export const App = () => {
  const renderHero = albums.items
    .slice(10, 11)
    .map(({ id, images, artists }) => (
      <Hero key={id} images={images[0]} artists={artists} />
    ));

  return (
    <main>
      {renderHero}
      <section className="section__album">
        <Album />
      </section>
    </main>
  );
};
