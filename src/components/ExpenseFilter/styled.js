import styled from "styled-components";

export const ExpensesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 2em 10em;
  justify-content: space-evenly;


  @media (max-width: 780px) {
    padding: 0;
    justify-content: center;
    width: -webkit-fill-available;
  }
`;

export const OverviewPageContainer = styled.div`
  padding: 5em;
  text-align: center;

  @media (max-width: 750px) {
    padding: 5em 0;
  }
`;

export const ExpenseTotal = styled.h1`
  font-weight: bold;
  font-size: 5em;
  margin: 0;

  @media (max-width: 750px) {
    font-size: 2.5em;
    margin-bottom: 0;
  }
`;

export const DoughnoutContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const DoughnutStyle = styled.div`
  width: 10em;

  @media (max-width: 750px) {
    width: 13em;
  }
`;

export const H4 = styled.h4`
  margin-bottom: 0;
`;

export const OverviewContainerExpenses = styled.div`
  width: 100%;
`;
