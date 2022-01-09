import styled from "styled-components";

export const FooterContainer = styled.footer`
height: 40px;
width: 100%;
background-color: red;
margin-bottom: 0;
display: flex;
justify-content: center;
align-items: center;
position: absolute;
z-index: 10;

@media (max-width: 750px){
    z-index: 0;
}
}
`;
export const Small = styled.small`
  color: white;
`;
