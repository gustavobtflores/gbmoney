import styled from "styled-components";

export const Container = styled.header`
  background: var(--blue);
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 0 1rem 10rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 2rem;
`;

export const Button = styled.button`
  border-radius: 0.25rem;
  padding: 0rem 2rem;
  border: none;
  background-color: var(--blue-light);
  color: var(--white);
  font-weight: 600;
  font-size: 1rem;
  height: 3rem;
  transition: filter 0.2s ease;

  &:hover {
    filter: brightness(90%);
  }
`;
