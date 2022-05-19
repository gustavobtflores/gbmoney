import Modal from "react-modal";

import { Container, RadioBox, TransactionTypeContainer } from "./styles";
import { FormEvent, useContext, useState } from "react";
import { api } from "../../services/api";

import closeImg from "../../assets/close-button.svg";
import incomeImg from "../../assets/incomes.svg";
import outcomeImg from "../../assets/expenses.svg";
import { useTransactions } from "../../hooks/useTransaction";

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

Modal.setAppElement("#root");

export const NewTransactionModal = ({ isOpen, onRequestClose }: NewTransactionModalProps) => {
  const { createTransaction } = useTransactions();

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState(0);
  const [category, setCategory] = useState("");
  const [type, setType] = useState<"deposit" | "withdrawal">("deposit");

  const handleCreateNewTransaction = async (event: FormEvent) => {
    event.preventDefault();

    await createTransaction({ title, amount, category, type });

    setTitle("");
    setAmount(0);
    setCategory("");
    setType("deposit");

    onRequestClose();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} overlayClassName="react-modal-overlay" className="react-modal-content">
      <button className="react-modal-close" type="button" onClick={onRequestClose}>
        <img src={closeImg} alt="Fechar modal" />
      </button>
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>

        <input type="text" placeholder="Título" value={title} onChange={(event) => setTitle(event.target.value)} />

        <input
          type="number"
          placeholder="Valor"
          value={amount}
          onChange={(event) => {
            setAmount(Number(event.target.value));
          }}
        />

        <TransactionTypeContainer>
          <RadioBox type="button" isActive={type === "deposit"} onClick={() => setType("deposit")} activeColor="green">
            <img src={incomeImg} alt="Receita" />
            <span>Entrada</span>
          </RadioBox>
          <RadioBox
            type="button"
            onClick={() => {
              setType("withdrawal");
            }}
            isActive={type === "withdrawal"}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Despesa" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input type="text" placeholder="Categoria" value={category} onChange={(event) => setCategory(event.target.value)} />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  );
};
