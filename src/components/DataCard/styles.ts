import styled, { css } from "styled-components/native";

export type variation = "inDiet" | "outDiet" | "primary";

type Props = {
  type: variation;
};

export const Container = styled.View<Props>`
  background-color: ${({ theme, type }) =>
    type === "inDiet"
      ? theme.COLORS.GREEN_LIGHT
      : type === "outDiet"
      ? theme.COLORS.RED_LIGHT
      : theme.COLORS.GRAY_200};
  flex: 1;
  height: 89px;
  max-height: 89px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  row-gap: 8px;
  margin-bottom: 12px;
`;

export const DataNumber = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XL}px;
  `}
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_600};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.SM}px;
  `}
`;
