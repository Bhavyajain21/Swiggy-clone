import { useContext } from "react";
import { IMG_CDN_URL } from "../../constants";
import UserContext from "../../Utils/UserContext";

// Restaurant card component: Image, name, cuisine
const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  area,
  lastMileTravelString,
  costForTwoString,
  avgRating,
}) => {
  const { user } = useContext(UserContext);
  return (
    <div className="card">
      <img src={IMG_CDN_URL + cloudinaryImageId} />
      <h3>{name}</h3>
      <h5>{cuisines.join(", ")}</h5>
      <h6>{area}</h6>
    </div>
  );
};

export default RestaurantCard;
