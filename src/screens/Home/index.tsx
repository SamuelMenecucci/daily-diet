import { Header } from "@components/Header";
import {
  Container,
  Date,
  MealsContainer,
  PercentageOfMealsContainer,
  Title,
} from "./styles";
import { PercentageOfMeals } from "@components/PercentageOfMeals";
import { Button } from "@components/Button";
import { MealCard } from "@components/MealCard";
import { useNavigation } from "@react-navigation/native";

export function Home() {
  const navigation = useNavigation();

  const handleShowStatistics = () => {
    navigation.navigate("statistics");
  };

  return (
    <Container>
      <Header />
      <PercentageOfMealsContainer onPress={handleShowStatistics}>
        <PercentageOfMeals value={90.86} />
      </PercentageOfMealsContainer>

      <Title>Refeições</Title>

      <Button title={"Nova refeição"} icon="add" />

      <MealsContainer>
        <Date>12.08.22</Date>

        <MealCard hour={"20:00"} title={"X-tudo"} inDiet={true} />
      </MealsContainer>
    </Container>
  );
}
