import "./AlbumList.css";
import { AlbumName } from "../AlbumContent/AlbumName";
import { ArtistName } from "../AlbumContent/ArtistName";
import { CoverImage } from "../AlbumContent/CoverImage";
import { albums } from "../../data/albums.json";

export const Album = () => {
  console.log(albums);
  const renderAlbums = albums.items.map(
    ({ id, name, images, artists, external_urls }) => (
      <div key={id} className="album__list">
        <CoverImage images={images[1].url} />
        <AlbumName name={name} external_urls={external_urls} />
        <ArtistName artists={artists} />
      </div>
    )
  );

  return <section className="section__album">{renderAlbums}</section>;
};
