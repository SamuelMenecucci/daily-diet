import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";
import { Plus, Trash, PencilSimpleLine } from "phosphor-react-native";

export const Container = styled(TouchableOpacity)`
  width: 100%;
  height: 50px;

  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  border-radius: 6px;

  justify-content: center;
  align-items: center;

  flex-direction: row;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.WHITE};
    font-size: ${theme.FONT_SIZE.SM}px;
    font-family: ${theme.FONT_FAMILY.BOLD};
  `}
`;

export const Icon = styled(Plus).attrs(({ theme }) => ({
  size: 18,
  color: theme.COLORS.WHITE,
}))`
  margin-right: 10px;
`;
