import logoImg from "../../assets/logo.svg";
import { Button, Container, Content } from "./styles";

export const Header = () => {
  return (
    <Container>
      <Content>
        <img src={logoImg} alt="gb money" />
        <Button type="button">Nova transação</Button>
      </Content>
    </Container>
  );
};
