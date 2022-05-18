import logoImg from "../../assets/logo.svg";
import { Button, Container, Content } from "./styles";

interface HeaderProps {
  onNewTransactionRequest: () => void;
}

export const Header = ({ onNewTransactionRequest }: HeaderProps) => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="gb money" />
        <Button type="button" onClick={onNewTransactionRequest}>
          Nova transação
        </Button>
      </Content>
    </Container>
  );
};
