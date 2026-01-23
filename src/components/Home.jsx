import { useContext, useState } from "react";
import Header from "./Header";
import Categories from "./Categories";
import CardGrid from "./CardGrid";
import { ThemeContext } from "../context/ThemeSwitcher";
import "./component.css"

const Home = () => {
  const [category, setCategory] = useState("popular");
  const [rating, setRating] = useState(null);
  const [sortBy, setSortBy] = useState("date");

  const { theme } = useContext(ThemeContext);

  return (
    <div className={`app ${theme}`}>
      <Header setCategory={setCategory} />

      <Categories
        category={category}
        rating={rating}
        setRating={setRating}
        sortBy={sortBy}
        setSortBy={setSortBy}
      />

      <CardGrid
        category={category}
        rating={rating}
        sortBy={sortBy}
      />
    </div>
  );
};

export default Home;
