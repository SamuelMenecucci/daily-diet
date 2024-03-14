import { Header } from "@components/Header";
import { Container, Date, MealsContainer, Title } from "./styles";
import { Statistics } from "@components/Statistics";
import { Button } from "@components/Button";
import { MealCard } from "@components/MealCard";

export function Home() {
  return (
    <Container>
      <Header />

      <Statistics value={90.86} />

      <Title>Refeições</Title>

      <Button title={"Nova refeição"} icon="add" />

      <MealsContainer>
        <Date>12.08.22</Date>

        <MealCard hour={"20:00"} title={"X-tudo"} inDiet={true} />
      </MealsContainer>
    </Container>
  );
}
