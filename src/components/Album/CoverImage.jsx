import { PlayIcons } from "./PlayIcons";
import PropTypes from "prop-types";

export const CoverImage = ({ images }) => {
  const coverImage = {
    imgUrl: images[1].url,
    imgAlt: "Cover album image",
  };

  return (
    <div className="coverImage">
      <PlayIcons />
      <img src={coverImage.imgUrl} alt={coverImage.imgAlt} />
    </div>
  );
};

CoverImage.propTypes = {
  images: PropTypes.array.isRequired,
};
