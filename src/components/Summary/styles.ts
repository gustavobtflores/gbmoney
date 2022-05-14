import styled from "styled-components";

export const Container = styled.main`
  gap: 2rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  margin-top: -2rem;

  div {
    display: flex;
    padding: 0 2rem;
    flex-direction: column;
    height: 8.5rem;
    background-color: var(--shape);
    border-radius: 0.25rem;
    justify-content: center;
    color: var(--text-title);

    &.highlight-background {
      background-color: var(--green);
      color: var(--white);
    }
  }

  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  strong {
    font-size: 2.25rem;
    font-weight: 500;
    margin-top: 1rem;
    display: block;

    span {
      font-weight: 400;
    }
  }
`;
