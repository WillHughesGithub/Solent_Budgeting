import { useState } from "react";
import CategoriesForm from "./CategoriesForm";
import { useCategory } from "../../contexts/CategoryContext";
import { AddCategory, CloseButton } from "../Input/styled";
import {
  CategoryContainer,
  Container,
  ContainerAddCategory,
  ContainerMobile,
} from "./styled";

const CategoriesList = ({ showOnClick }) => {
  const [modal, setModal] = useState(false);

  const ShowModal = () => {
    return (
      <CategoryContainer>
        {modal && (
          <ContainerAddCategory>
            <ContainerMobile />
            <Container onSubmit={closeModal}>
              <CloseButton onClick={closeModal} />
              <CategoriesForm onSubmit={addCategory} />
            </Container>
          </ContainerAddCategory>
        )}
      </CategoryContainer>
    );
  };
  const { state: categories, setState: setCategories } = useCategory();

  const addCategory = (category) => {
    const newCategories = [category, ...categories];
    setCategories(newCategories);
  };

  const toggleModal = () => {
    setModal((previous) => !previous);
  };

  const closeModal = () => {
    setModal(false);
  };

  return (
    <>
      <AddCategory hiddenOnMobile={showOnClick} onClick={toggleModal}>
        Add New Category
      </AddCategory>
      <ShowModal modal={modal} setModal={setModal} />
    </>
  );
};
export default CategoriesList;
