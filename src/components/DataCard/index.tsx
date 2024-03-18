import { Container, DataNumber, Title, variation } from "./styles";

type Props = {
  title: string;
  quantity: number;
  type?: variation;
};

export function DataCard({ title, quantity, type = "primary" }: Props) {
  return (
    <Container type={type}>
      <DataNumber>{quantity}</DataNumber>

      <Title>{title}</Title>
    </Container>
  );
}
