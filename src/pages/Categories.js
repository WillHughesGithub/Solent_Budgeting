import {
  CategoriesBox,
  CategoriesPageContainer,
  PageContainer,
} from "../components/Categories/styled";
import Search from "../components/Search";

const Categories = () => {
  return (
    <PageContainer>
      <CategoriesPageContainer>
        <CategoriesBox>
          <Search />
        </CategoriesBox>
      </CategoriesPageContainer>
    </PageContainer>
  );
};

export default Categories;
