import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import { swiggy_api_URL } from "../constants";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import RestaurantMenu from "./RestaurantMenu";
// Body Component for body section: It contain all restaurant cards
// We are mapping restaurantList array and passing JSON data to RestaurantCard component as props with unique key as index
const Body = () => {
  // useState: To create a state variable, searchText is local state variable
  const [searchText, setSearchText] = useState("");
  const [restaurants, setRestaurants] = useState([]);
  const [filterRestros, setFilterRestros] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  function filterData(searchText, restaurants) {
    if (searchText.length === 0) {
      setErrorMessage("");
    }
    const filterData = restaurants.filter((restaurant) =>
      restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase())
    );
    if (filterData.length == 0) {
      setErrorMessage("No matches restaurant found");
    } else {
      setErrorMessage("");
    }
    return filterData;
  }

  useEffect(() => {
    getRestaurants();
  }, []);

  async function getRestaurants() {
    // handle the error using try... catch
    try {
      const response = await fetch(swiggy_api_URL);
      const json = await response.json();

      // initialize checkJsonData() function to check Swiggy Restaurant data
      async function checkJsonData(jsonData) {
        for (let i = 0; i < jsonData?.data?.cards.length; i++) {
          // initialize checkData for Swiggy Restaurant data
          let checkData =
            json?.data?.cards[i]?.card?.card?.gridElements?.infoWithStyle
              ?.restaurants;

          // if checkData is not undefined then return it
          if (checkData !== undefined) {
            return checkData;
          }
        }
      }

      // call the checkJsonData() function which return Swiggy Restaurant data
      const resData = await checkJsonData(json);

      // update the state variable restaurants with Swiggy API data
      setRestaurants(resData);
      setFilterRestros(resData);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          className="search-input"
          placeholder="Search a restaurant you want..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}></input>
        <button
          className="search-btn"
          onClick={() => {
            // filter the data
            const data = filterData(searchText, restaurants);
            // update the state of restaurants list
            setFilterRestros(data);
          }}>
          Search
        </button>
      </div>

      {errorMessage && <div className="error-container">{errorMessage}</div>}

      {restaurants.length == 0 ? (
        <Shimmer />
      ) : (
        <div className="restaurant-list">
          {filterRestros.map((restaurant) => {
            return (
              <Link to={"/restaurant/" + restaurant?.info?.id}>
                <RestaurantCard
                  key={restaurant?.info?.id}
                  {...restaurant?.info}
                />
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Body;
