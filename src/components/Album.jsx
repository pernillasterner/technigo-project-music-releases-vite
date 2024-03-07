import "./Album.css";
import { AlbumName } from "./Album/AlbumName";
import { ArtistName } from "./Album/ArtistName";
import { CoverImage } from "./Album/CoverImage";
import { albums } from "../data/albums.json";

export const Album = () => {
  const renderAlbums = albums.items.map(
    ({ id, name, images, artists, external_urls }) => (
      <div key={id} className="album__list">
        <CoverImage images={images} />
        <AlbumName name={name} external_urls={external_urls} />
        <ArtistName artists={artists} />
      </div>
    )
  );
  return <>{renderAlbums}</>;
};
