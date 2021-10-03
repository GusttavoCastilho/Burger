import React from 'react';
import {StyleSheet, TextInputProps} from 'react-native';
import theme from '../../styles/theme';
import * as S from './styles';

export type InputProps = {
  icon?: React.ReactNode;
} & TextInputProps;

export default function TextInput({icon, ...props}: InputProps) {
  return (
    <S.Wrapper style={styles.shadow}>
      <S.TextInputWrapper>
        {!!icon && <S.Icon>{icon}</S.Icon>}
        <S.TextInput {...props} />
      </S.TextInputWrapper>
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
