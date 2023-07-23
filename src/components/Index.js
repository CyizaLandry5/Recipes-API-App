import React, { useEffect, useState } from "react";
import logo from "../img/logo.png";
import searchIcon from "../img/search-icon-png-21.png";
import axios from "axios";
import Collections from "./Collections";

function Header() {
  var [keyword, setKeyword] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [error, setError] = useState();

  async function handleSearch() {
    const url = `https://api.spoonacular.com/food/search?query=${keyword}&apiKey=49c15433e5594e3cb1110edc018b0f84`;
    try {
      const { data } = await axios.get(url);
      setRecipes(data.searchResults);
      setError(null);
    } catch (err) {
      setError(err.message);
      setRecipes(null);
    }
  }

  function handlePress(event) {
    if (event.key === "Enter") {
      handleSearch();
    }
  }

  useEffect(()=>{
    handleSearch()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

  return (
    <>
      <div className="flex container py-3 items-center justify-around">
        <div className="flex gap-4 items-center">
          <img src={logo} alt="" className="h-[60px] rounded-full" />
          <h1 className="text-4xl font-bold text-orange-500">LandryRecipes</h1>
        </div>
        <div className="relative">
          <input
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
            type="text"
            onKeyPress={handlePress}
            placeholder="Search ..."
            className="border bg-orange-50 border-orange-500 ps-5 py-2 min-w-[400px] rounded-full"
          />

          <button
            onClick={handleSearch}
            className="absolute z-50 top-3 right-4"
          >
            <img src={searchIcon} className="h-[20px]" alt="" />
          </button>
        </div>
      </div>

      {error && <h1 className="text-center text-xl text-red-500">{error}</h1>}

      {!error && !recipes && <div className="text-center text-3xl">Loading</div>}

      {recipes && (
        <div className="container px-12 my-10">
          <Collections data={recipes} />
        </div>
      )}
    </>
  );
}

export default Header;
