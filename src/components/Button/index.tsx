import { TouchableOpacityProps } from "react-native";
import { Container, Icon, Title } from "./styles";

type Props = {
  title: string;
  icon?: "add" | "remove" | "edit";
} & TouchableOpacityProps;
export function Button({ title, icon }: Props) {
  return (
    <Container>
      {icon && <Icon />}
      <Title>{title}</Title>
    </Container>
  );
}
