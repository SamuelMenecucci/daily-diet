import { Container, Icon, Text, Value } from "./styles";

type Props = {
  value: number;
};

export function PercentageOfMeals({ value }: Props) {
  return (
    <Container isBelow={value < 60}>
      <Value>{value}%</Value>
      <Text>das refeições dentro da dieta</Text>

      <Icon isBelow={value < 60} />
    </Container>
  );
}
