import { useEffect } from "react";
import { Container } from "./styles";
import axios from "axios";
import { api } from "../../services/api";

export const TransactionTable = () => {
  useEffect(() => {
    api("/transactions").then((res) => console.log(res.data));
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
          <tr>
            <td>Desenvolvimento de website</td>
            <td className="deposit">R$ 12.000</td>
            <td>Venda</td>
            <td>13/04/2021</td>
          </tr>
          <tr>
            <td>Aluguel</td>
            <td className="outcome">R$ 1.100</td>
            <td>Venda</td>
            <td>19/04/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
};
