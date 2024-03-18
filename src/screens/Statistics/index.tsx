import { PercentageOfMeals } from "@components/PercentageOfMeals";
import {
  Container,
  Content,
  InOutDietContainer,
  PercentageOfMealsContainer,
  Title,
} from "./styles";
import { useTheme } from "styled-components/native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { DataCard } from "@components/DataCard";

export function Statistics() {
  const [percentageValue, setPercentageValue] = useState(90.86);
  const theme = useTheme();

  const navigation = useNavigation();

  const handleBack = () => {
    navigation.goBack();
  };

  return (
    <Container
      style={{
        backgroundColor:
          percentageValue > 40
            ? theme.COLORS.GREEN_LIGHT
            : theme.COLORS.RED_LIGHT,
      }}
    >
      <PercentageOfMealsContainer onPress={handleBack}>
        <PercentageOfMeals value={percentageValue} icon="back" />
      </PercentageOfMealsContainer>

      <Content>
        <Title>Estatísticas gerais</Title>

        <DataCard
          quantity={22}
          title="melhor sequência de pratos dentro da dieta"
        />

        <DataCard quantity={109} title="refeições registradas" />

        <InOutDietContainer>
          <DataCard
            quantity={99}
            title="refeições dentro da dieta"
            type="inDiet"
          />
          <DataCard
            quantity={10}
            title="refeições fora da dieta"
            type="outDiet"
          />
        </InOutDietContainer>
      </Content>
    </Container>
  );
}
