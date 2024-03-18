import styled, { css } from "styled-components/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity } from "react-native";

export const Container = styled(SafeAreaView)`
  flex: 1;
`;

export const PercentageOfMealsContainer = styled(TouchableOpacity)`
  width: 100%;
  height: 150px;
`;

export const Content = styled.View`
  background-color: ${({ theme }) => theme.COLORS.GRAY_100};
  border-radius: 20px 20px 0 0;

  flex: 1;
  padding: 0 24px;
`;

export const Title = styled.Text`
  ${({ theme }) => css`
    color: ${theme.COLORS.GRAY_700};
    font-family: ${theme.FONT_FAMILY.BOLD};
    font-size: ${theme.FONT_SIZE.LG}px;
  `}
  margin: 23px 0;
  text-align: center;
`;

export const InOutDietContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  column-gap: 15px;
`;
