import { Button } from "./../Header/styles";
import styled from "styled-components";
import { darken } from "polished";

export const Container = styled.form`
  display: flex;
  flex-direction: column;

  h2 {
    color: var(--text-title);
    font-size: 1.5rem;
    margin-bottom: 2rem;
    text-align: left;
  }

  input {
    border-radius: 0.25rem;
    border: 1px solid #d7d7d7;
    padding: 20px 24px;
    width: 100%;
    transition: border 0.2s ease;
    background-color: #e7e9ee;

    &::placeholder {
      color: var(--text-body);
    }

    &:focus {
      outline: none;
      border: 1px solid var(--blue);
    }
  }

  input,
  button {
    margin-top: 16px;
  }

  button[type="submit"] {
    width: 100%;
    background-color: var(--green);
    border: none;
    padding: 20px 0;
    color: var(--white);
    transition: background-color 0.2s ease;
    font-weight: 600;

    &:hover {
      background-color: var(--green-hover);
    }
  }
`;

export const TransactionTypeContainer = styled.div`
  display: flex;
  gap: 1rem;
  width: 100%;

  button {
    flex: 1 1 auto;
    background-color: transparent;
    border: 1.5px solid #d7d7d7;
    border-radius: 0.25rem;
    padding: 20px 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    max-height: 4rem;

    &:hover {
      border-color: ${darken(0.1, "#d7d7d7")};
    }

    img {
      width: 24px;
      height: auto;
    }

    span {
      font-size: 1rem;
      display: inline-block;
    }
  }
`;
