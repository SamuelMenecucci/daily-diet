import { Back, Container, Icon, Text, Value } from "./styles";

type Props = {
  value: number;
  icon?: "back" | "open";
};

export function PercentageOfMeals({ value, icon = "open" }: Props) {
  return (
    <Container isBelow={value < 60}>
      <Value>{value}%</Value>
      <Text>das refeições dentro da dieta</Text>

      {icon === "open" ? (
        <Icon isBelow={value < 60} />
      ) : (
        <Back isBelow={value < 60} />
      )}
    </Container>
  );
}
