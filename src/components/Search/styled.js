import styled from "styled-components";

export const Input = styled.input`
  background: #f6f7f7;
  border: none;
  border-radius: 12px;
  width: 35em;
  padding: 0.5em;
  margin-bottom: 10px;

  @media (max-width: 750px) {
    width: 18em;
    align-self: baseline;
    margin: auto 1em;
  }
`;

export const SearchBarContainer = styled.div`
  display: flex;
  align-items: center;
  padding-top: 100px;

  @media (max-width: 750px) {
    flex-direction: column;
  }
`;

export const CategoriesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media (max-width: 750px) {
    flex-direction: column;
    align-items: baseline;
    margin: 1em;
  }
`;
