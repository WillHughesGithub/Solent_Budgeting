import React, { useState } from "react";
import {
  ColorCategory,
  CategoriesContainer,
  OverviewDate,
  CategoryContainer,
  CategoryPrice,
  ColorAndTextContainer,
} from "./styled";
import CategoriesForm from "./CategoriesForm";

const CategoryGroup = ({ categories }) => {
  return categories.map((category, index) => (
    <div key={index}>
      <CategoryContainer key={category.id}>
        <ColorAndTextContainer>
          <ColorCategory
            value={category.payload.value}
            color={category.payload.color}
          />
          {category.payload.text}
        </ColorAndTextContainer>
        <CategoryPrice>
          {category.payload.coin}
          {category.payload.price}
        </CategoryPrice>
      </CategoryContainer>
    </div>
  ));
};

const Categories = ({ categoriesObj, categories, updateCategory }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  const submitUpdate = (value) => {
    updateCategory(edit.id, value);
    setEdit({
      id: null,
      value: "",
    });
  };

  if (edit.id) {
    return <CategoriesForm edit={edit} onSubmit={submitUpdate} />;
  }

  if (categoriesObj) {
    const dates = Object.keys(categoriesObj);
    return dates.map((date) => {
      const dateCategories = categories.filter((c) => c.payload.date === date);
      let total = 0;
      dateCategories.forEach((element) => (total += element.payload.price));
      return (
        <CategoriesContainer>
          <OverviewDate>
            {date}
            <div> £{total}</div>
          </OverviewDate>
          <CategoryGroup categories={categoriesObj[date]} />
        </CategoriesContainer>
      );
    });
  }

  return <CategoryGroup categories={categories} />;
};

export default Categories;
