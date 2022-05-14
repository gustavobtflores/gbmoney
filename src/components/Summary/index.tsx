import incomesImg from "../../assets/incomes.svg";
import expensesImg from "../../assets/expenses.svg";
import totalImg from "../../assets/total.svg";
import { Container } from "./styles";

export const Summary = () => {
  return (
    <Container>
      <div>
        <header>
          <span>Entradas</span>
          <img src={incomesImg} alt="" />
        </header>
        <strong>R$ 0,00</strong>
      </div>
      <div>
        <header>
          <span>Saídas</span>
          <img src={expensesImg} alt="" />
        </header>
        <strong> - R$ 0,00</strong>
      </div>
      <div className="highlight-background">
        <header>
          <span>Totais</span>
          <img src={totalImg} alt="" />
        </header>
        <strong>R$ 0,00</strong>
      </div>
    </Container>
  );
};
