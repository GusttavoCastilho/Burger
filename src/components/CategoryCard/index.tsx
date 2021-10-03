import React, {useState} from 'react';
import {ImageSourcePropType, StyleSheet} from 'react-native';
import theme from '../../styles/theme';
import * as S from './styles';

import ArrowWhite from '../../assets/icons/arrow-right.svg';
import ArrowRed from '../../assets/icons/arrow-right-red.svg';

export type CategoryCardProps = {
  image: ImageSourcePropType;
  title: string;
  isActive?: boolean;
};

export default function CategoryCard({
  image,
  title,
  isActive = false,
}: CategoryCardProps) {
  const [onPress, setOnPress] = useState(isActive);

  const onChange = () => {
    const status = !onPress;
    setOnPress(status);
  };
  return (
    <S.Wrapper style={styles.shadow} isActive={onPress} onPress={onChange}>
      <S.ImageWrapper isActive={onPress}>
        <S.Image source={image} />
      </S.ImageWrapper>

      <S.Title isActive={onPress}>{title}</S.Title>
      <S.Button isActive={onPress}>
        {onPress ? <ArrowRed /> : <ArrowWhite />}
      </S.Button>
    </S.Wrapper>
  );
}

const styles = StyleSheet.create({
  shadow: {
    shadowColor: theme.colors.black,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
});
