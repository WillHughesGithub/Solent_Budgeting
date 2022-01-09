import styled from "styled-components";

export const ColorCategory = styled.div`
  background-color: ${(props) => props.color};
  width: 2.3em;
  height: 2.3em;
  border-radius: 100%;
  margin-right: 15px;
`;

export const OverviewDate = styled.div`
  font-weight: 200;
  text-align: left;
  width: 100%;
  border-bottom: 1px solid;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
`;

export const CategoriesContainer = styled.div`
  font-weight: 200;
  font-size: 15px;
  width: 15em;
  display: flex;
  flex-direction: column;
  padding: 0 5em 2em 0;

  @media (max-width: 750px) {
    flex-direction: column;
    margin: 25px;
    padding: 0;
    width: -webkit-fill-available;
  }
`;

export const CategoryContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 10px;
  justify-content: space-between;
  width: 200px;

  @media (max-width: 780px) {
    width: auto;
  }
`;

export const TransactionsContainer = styled.div`
  text-align: center;
  padding-top: 5em;
`;

export const DailyExpensesContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 8em;
  justify-content: space-between;
  align-items: start;
  width: fit-content;

  @media (max-width: 750px) {
    padding: 3em 0;
    align-items: self-start;
    justify-content: center;
  }
`;

export const CategoriesPageContainer = styled.div`
  display: flex;
  padding: 10em;
  justify-content: center;

  @media (max-width: 750px) {
    flex-direction: column;
    padding: 0;
    justify-content: center;
  }
`;

export const CategoriesBox = styled.div``;

export const ContainerMobile = styled.div`
  @media (max-width: 750px) {
    background: rgba(1, 1, 1, 0.6);
    position: fixed;
    top: 55px;
    right: 0;
    left: 0;
    bottom: 0;
    width: 100vw;
    height: 100vh;
    z-index: 2;
  }
`;

export const Container = styled.div`
  position: fixed;
  background-color: white;
  display: flex;
  flex-direction: column;
  z-index: 3;
  top: 26px;
  right: 0;
  left: 0;
  bottom: 0;
  padding: 5em;

  @media (max-width: 750px) {
    top: 50%;
    height: 52%;
    padding: 0;
    bottom: 0;
    border-radius: 10px;
    background-color: rgba(255, 255, 255, 0.95);
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  }
`;

export const H1 = styled.h1`
  text-align: center;
`;

export const ContainerAddCategory = styled.div`
  display: flex;
  position: absolute;
`;

export const CategoryPrice = styled.div`
  margin-left: 25px;
`;

export const CategoryAddInput = styled.input`
  background: #f6f7f7;
  border: 1px solid;
  border-radius: 15px;
  width: 20em;
  height: 1.8em;
  margin: 1em 0;
  font-size: 11px;
  padding: 0.3em;
`;

export const PageContainer = styled.div`
  min-height: calc(100vh - 40px);
`;

export const TitleContainer = styled.div`
  font-size: 15px;
`;

export const ColorAndTextContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const ErrorMessage = styled.p`
  font-size: 13px;
  color: #B91C1C;
  margin-top: 0;
`