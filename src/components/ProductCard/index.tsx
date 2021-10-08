import React from 'react';
import {StyleSheet} from 'react-native';
import theme from '../../styles/theme';
import * as S from './styles';

import ChipotleImage from '../../assets/images/chipotle.png';

export default function ProductCard() {
  return (
    <S.Wrapper style={styles.shadow}>
      <S.ImageWrapper>
        <S.Image source={ChipotleImage} />
      </S.ImageWrapper>
      <S.Info>
        <S.Title>Chipotle Cheesy Chicken</S.Title>
        <S.Price>$20.95</S.Price>
      </S.Info>
      <S.Category>Chicken Burger</S.Category>
    </S.Wrapper>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: theme.colors.black,
    shadowOffset: {
      width: 20,
      height: 20,
    },
    shadowOpacity: 20,
    shadowRadius: 4.65,
    elevation: 12,
  },
});
