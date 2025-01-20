import styled from "styled-components";

export const StyledLocal = styled.div`
  display: flex;
  justify-content: center; /* Centraliza horizontalmente */
  width: 100%;

  iframe {
    width: 50%;
    height: 400px;
    margin-bottom: 50px;
     
    box-shadow: 10px 14px 14px rgba(0, 0, 0, 1.25); /* Adiciona sombra em baixo */

    @media (max-width: 768px) {
      width: 80%; /* Ajuste para telas menores */
      height: 300px; /* Ajuste para telas menores */
    }

    @media (max-width: 480px) {
      width: 
      100%; /* Ajuste para telas ainda menores */
      height: 200px; /* Ajuste para telas ainda menores */
    }
  }
`;
