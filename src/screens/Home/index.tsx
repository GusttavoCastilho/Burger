import React from 'react';
import {FlatList, Text, View} from 'react-native';

import TextInput from '../../components/TextInput';
import CategoryCard from '../../components/CategoryCard';
import * as S from './styles';

import SearchIcon from '../../assets/icons/search.svg';

import {CategoryProducts} from '../../constants/dummy';
import ProductCard from '../../components/ProductCard';

export default function Home() {
  return (
    <S.Wrapper>
      <S.Title>Hey!</S.Title>
      <S.Subtitle>Let's get your order</S.Subtitle>
      <TextInput
        icon={<SearchIcon width={18} height={18} />}
        placeholder="Search our delicious burguers"
      />
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={item => `${item.id}`}
        data={CategoryProducts}
        renderItem={({item, index}) => {
          return (
            <View
              style={{
                marginLeft: index == 0 ? 5 : 15,
                marginRight: index == CategoryProducts.length - 1 ? 24 : 20,
                paddingBottom: 5,
              }}>
              <CategoryCard
                isActive={item.isActive}
                image={item.image}
                title={item.title}
              />
            </View>
          );
        }}
      />
      <S.Section>
        <S.TextSection>Popular</S.TextSection>
        <S.ButtonSection>View all</S.ButtonSection>
      </S.Section>
      <ProductCard />
    </S.Wrapper>
  );
}
