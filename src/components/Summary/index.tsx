import incomesImg from "../../assets/incomes.svg";
import expensesImg from "../../assets/expenses.svg";
import totalImg from "../../assets/total.svg";
import { Container } from "./styles";
import { useTransactions } from "../../hooks/useTransaction";

export const Summary = () => {
  const { transactions } = useTransactions();

  const formatNumberToBrl = (amount: number) => {
    return new Intl.NumberFormat("pt-br", {
      style: "currency",
      currency: "BRL",
    }).format(amount);
  };

  const summary = transactions.reduce(
    (acc, transaction) => {
      if (transaction.type === "deposit") {
        acc.deposits += transaction.amount;
        acc.total += transaction.amount;
      } else {
        acc.withdraws += transaction.amount;
        acc.total -= transaction.amount;
      }

      return acc;
    },
    {
      deposits: 0,
      withdraws: 0,
      total: 0,
    }
  );

  return (
    <Container>
      <div>
        <header>
          <span>Entradas</span>
          <img src={incomesImg} alt="Receitas" />
        </header>
        <strong>{formatNumberToBrl(summary.deposits)}</strong>
      </div>
      <div>
        <header>
          <span>Saídas</span>
          <img src={expensesImg} alt="Despesas" />
        </header>
        <strong> - {formatNumberToBrl(summary.withdraws)}</strong>
      </div>
      <div className="highlight-background">
        <header>
          <span>Totais</span>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>{formatNumberToBrl(summary.total)}</strong>
      </div>
    </Container>
  );
};
