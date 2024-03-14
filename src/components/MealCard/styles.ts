import { TouchableOpacity } from "react-native";
import styled, { css } from "styled-components/native";
import { Circle } from "phosphor-react-native";

export const Container = styled(TouchableOpacity)`
  width: 100%;
  height: 50px;

  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_400};
  border-radius: 6px;

  flex-direction: row;
  align-items: center;

  padding: 12px;
`;

export const MealHour = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XS}px;
  `}
`;

export const Divider = styled.View`
  width: 1px;
  height: 50%;

  background-color: ${({ theme }) => theme.COLORS.GRAY_400};

  margin: 12px;
`;

export const MealTitleAndMarker = styled.View`
  flex-direction: row;
  align-items: center;
  flex: 1;
  justify-content: space-between;
`;

export const MealTitle = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_600};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.MD}px;
  `}
`;

type MarkerProps = {
  inDiet: boolean;
};

export const Marker = styled(Circle).attrs<MarkerProps>(
  ({ theme, inDiet }) => ({
    size: 14,
    weight: "fill",
    color: inDiet ? theme.COLORS.GREEN_MID : theme.COLORS.RED_MID,
  })
)``;
