import { useState, useEffect } from "react";
import Categories from "../Categories/Categories";
import { useCategory } from "../../contexts/CategoryContext";
import CategoriesList from "../Categories/CategoriesList";
import { CategoriesContainer, Input, SearchBarContainer } from "./styled";

const Search = () => {
  const [search, setSearch] = useState("");
  const { state: categories } = useCategory();
  const [filteredCategory, setFilteredCategory] = useState(categories);

  const expenses = [];
  categories.reduce(function (res, value) {
    if (!res[value.payload.text]) {
      res[value.payload.text] = {
        id: value.id,
        payload: {
          text: value.payload.text,
          color: value.payload.color,
        },
      };
      expenses.push(res[value.payload.text]);
    }
    return res;
  }, {});

  useEffect(() => {
    if (search) {
      const showCategory = expenses.filter((item) =>
        item.payload.text.includes(search)
      );
      setFilteredCategory(showCategory);
    } else {
      setFilteredCategory(expenses);
    }
  }, [search, categories]);

  return (
    <>
      <SearchBarContainer>
        <Input
          type="text"
          onChange={(event) => setSearch(event.target.value)}
          placeholder="Search a category"
        />
        <CategoriesList />
      </SearchBarContainer>
      <CategoriesContainer>
        <Categories categories={filteredCategory} />
      </CategoriesContainer>
    </>
  );
};

export default Search;
