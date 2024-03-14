import {
  Container,
  Divider,
  Marker,
  MealHour,
  MealTitle,
  MealTitleAndMarker,
} from "./styles";

type Props = {
  hour: string;
  title: string;
  inDiet: boolean;
};

export function MealCard({ hour, inDiet, title }: Props) {
  return (
    <Container>
      <MealHour>{hour}</MealHour>

      <Divider />

      <MealTitleAndMarker>
        <MealTitle>{title}</MealTitle>

        <Marker inDiet={inDiet} />
      </MealTitleAndMarker>
    </Container>
  );
}
