import "./Hero.css";
import PropTypes from "prop-types";

export const Hero = ({ images, artists }) => {
  const heroInfo = {
    imgUrl: images ? images.url : null,
    altText: "Hero Image",
    artistName: artists[0].name,
  };

  return (
    <div className="hero-container">
      {/* Use this if necessary */}
      <img src={heroInfo.imgUrl} alt={heroInfo.altText} />
      <div className="hero-text">
        <p>Playlist</p>
        <h1>{heroInfo.artistName}</h1>
        {/* <p>Current favorites and exciting new music. Cover: {artistName}</p> */}
        <p className="listeners">44 463 028 monthly listeners</p>
      </div>
    </div>
  );
};

Hero.propTypes = {
  artists: PropTypes.array.isRequired,
  images: PropTypes.object.isRequired,
};
