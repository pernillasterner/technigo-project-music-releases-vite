import PropTypes from "prop-types";

export const AlbumName = ({ name, external_urls }) => {
  const albumInfo = {
    url: external_urls.spotify,
    name: name,
  };

  return (
    <>
      <a href={albumInfo.url} className="album-title" target="_blank">
        {albumInfo.name}
      </a>
    </>
  );
};

AlbumName.propTypes = {
  name: PropTypes.string.isRequired,
  external_urls: PropTypes.object.isRequired,
};
