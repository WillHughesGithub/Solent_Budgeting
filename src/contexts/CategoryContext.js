import { useState, useContext, createContext, useEffect } from "react";

const CategoryContext = createContext(null);

function CategoryStore({ children }) {
  const [state, setState] = useState([]);

  useEffect(() => {
    localStorage.getItem("categories") &&
      setState(JSON.parse(localStorage.getItem("categories")));
  }, []);

  useEffect(() => {
    localStorage.setItem("categories", JSON.stringify(state));
  }, [state]);

  return (
    <CategoryContext.Provider value={{ state, setState }}>
      {children}
    </CategoryContext.Provider>
  );
}

function useCategory() {
  const context = useContext(CategoryContext);
  return context;
}

export { useCategory, CategoryStore };
