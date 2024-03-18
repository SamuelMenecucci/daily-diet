import styled, { css } from "styled-components/native";
import { ArrowUpRight, ArrowLeft } from "phosphor-react-native";
import { TouchableOpacity } from "react-native";

type Props = {
  isBelow: boolean;
};

export const Container = styled.View<Props>`
  flex: 1;

  background-color: ${({ theme, isBelow }) =>
    isBelow ? theme.COLORS.RED_LIGHT : theme.COLORS.GREEN_LIGHT};

  border-radius: 8px;

  justify-content: center;
  align-items: center;

  position: relative;
`;

export const Value = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XXL}px;
  `}
`;

export const Text = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_600};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}
`;

export const Icon = styled(ArrowUpRight).attrs<Props>(({ theme, isBelow }) => ({
  size: 24,
  color: isBelow ? theme.COLORS.RED_DARK : theme.COLORS.GREEN_DARK,
}))`
  position: absolute;
  top: 10px;
  right: 10px;
`;

export const Back = styled(ArrowLeft).attrs<Props>(({ theme, isBelow }) => ({
  size: 24,
  color: isBelow ? theme.COLORS.RED_DARK : theme.COLORS.GREEN_DARK,
}))`
  position: absolute;
  top: 30px;
  left: 24px;
`;
