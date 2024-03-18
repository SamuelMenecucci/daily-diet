import { TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import styled, { css } from "styled-components/native";

export const Container = styled(SafeAreaView)`
  padding: 24px;
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
`;

export const PercentageOfMealsContainer = styled(TouchableOpacity)`
  width: 100%;
  height: 102px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILY.REGULAR};
    font-size: ${theme.FONT_SIZE.LG}px;
  `}

  margin-top: 40px;
  margin-bottom: 16px;
`;

export const MealsContainer = styled.View`
  margin: 32px 0;
`;

export const Date = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.XL}px;\
  `}

  margin-bottom: 8px;
`;
