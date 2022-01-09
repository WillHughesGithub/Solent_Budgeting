import { useState, useEffect, useRef } from "react";
import { ButtonRed, Input } from "../Input/styled";
import { colors } from "./CategoryItem";
import { CategoryAddInput, Form, H1, ErrorMessage } from "./styled";
import { useCategory } from "../../contexts/CategoryContext";

const CategoriesForm = (props) => {
  const dateWords = {
    weekday: "long",
    day: "numeric",
    month: "short",
    year: "numeric",
  };

  const { state: categories } = useCategory();
  const placeholder = categories ? `category-${categories.length + 1}` : "category-1";
  const [input, setInput] = useState(props?.edit?.value || placeholder);
  const inputRef = useRef(null);
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  const [color, setColor] = useState(randomColor);
  const [error, setError] = useState(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const validateText = (text) => {
    const categoryTextExist = categories.some(c => c.payload.text === text);
    if (categoryTextExist) {
      setError({
        field: "text",
        message : "A category with same name already exists!",
      });
      return false;
    }    

    return true;
  }

  const validateColor = (color) => {
    const colorExist = categories.some(c => c.payload.color === color);
    if (colorExist) {
      setError({
        field: "color",
        message: "This color is already used by another category! Click to change it."
      });
      return false;
    }    

    return true;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setError(null);

    if (!validateText(input)) {
      event.stopPropagation();
      return;
    }

    if (!validateColor(color)) {
      event.stopPropagation();
      return;
    }

    props.onSubmit({
      id: Math.floor(Math.random() * 1000),
      payload: {
        color,
        text: input,
        date: new Date().toLocaleString("en-us", dateWords),
        price: Math.floor(Math.random() * 10),
        coin: "£",        
      },
    });

    setInput("");
  };

  const handleColorChange = (event) => {
    const color = event.target.value.toString();
    setColor(color);

    if (validateColor(color) && error && error.field === "color") {
      setError(null);
    }
  };

  const handleTextChange = (event) => {
    const text = event.target.value
    setInput(text);

    if (validateText(text) && error && error.field === "text") {
      setError(null);
    }    
  }

  const handleTextBlur = () => {
    if (validateText(input) && error && error.field === "text") {
      setError(null);
    }     
  }

  return (
    <>
      <H1>Create a Category</H1>
      <Form onSubmit={handleSubmit}>
        <Input
          className="input-color"
          type="color"
          list="presets"
          value={color}
          onChange={handleColorChange}
        />

        <datalist id="presets">
          {colors.map((el) => (
            <option key={el} value={el} />
          ))}
        </datalist>

        <CategoryAddInput 
          ref={inputRef}
          value={input}
          onChange={handleTextChange}
          onBlur={handleTextBlur}
        />

        {error ? <ErrorMessage>{error.message}</ErrorMessage> : null}       

        <ButtonRed
          type="submit"
          placeholder="Create"
        >
          {" "}
          Create{" "}
        </ButtonRed>
      </Form>
    </>
  );
};

export default CategoriesForm;
