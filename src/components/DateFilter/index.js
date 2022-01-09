import React, { useState } from 'react';
import { ColorCategory } from '../Input/styled';
import CategoriesForm from './CategoriesForm';

const Categories = ({ categories, updateCategory }) => {
  const [edit, setEdit] = useState({
    id: null,
    value: '',
  });

  const submitUpdate = (value) => {
    updateCategory(edit.id, value);
    setEdit({
      id: null,
      value: '',
    });
  };

  if (edit.id) {
    return <CategoriesForm edit={edit} onSubmit={submitUpdate} />;
  }

  return categories.map((category, index) => (
    <div key={index}>
      <div
        key={category.id}
      >
        {category.payload.text}
        <ColorCategory
          value={category.payload.value}
          color={category.payload.color}
        />
        {category.payload.date}
      </div>
    </div>
  ));
};

export default Categories;
