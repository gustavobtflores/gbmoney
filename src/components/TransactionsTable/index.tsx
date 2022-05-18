import { useEffect, useState } from "react";
import { Container } from "./styles";
import axios from "axios";
import { api } from "../../services/api";

interface Transaction {
  id: number;
  title: string;
  amount: number;
  createdAt: string;
  category: string;
  type: string;
}

export const TransactionTable = () => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api("/transactions").then((res) => setTransactions(res.data.transactions));
  }, []);

  return (
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          {transactions.map(({ title, amount, category, createdAt, type }) => (
            <tr>
              <td>{title}</td>
              <td className={type}>
                {new Intl.NumberFormat("pt-BR", {
                  style: "currency",
                  currency: "BRL",
                }).format(amount)}
              </td>
              <td>{category}</td>
              <td>
                {new Intl.DateTimeFormat("pt-BR", {}).format(
                  new Date(createdAt)
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Container>
  );
};
