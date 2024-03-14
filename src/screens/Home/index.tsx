import { Header } from "@components/Header";
import { Container } from "./styles";
import { Statistics } from "@components/Statistics";

export function Home() {
  return (
    <Container>
      <Header />

      <Statistics value={90.86} />
    </Container>
  );
}
