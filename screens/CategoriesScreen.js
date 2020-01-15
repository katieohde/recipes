import React from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';

import { CATEGORIES } from '../data/data';
import CategoryGridTile from '../components/CategoryGridTile';

const CategoriesScreen = props => {
  const renderGridItem = (itemData) => {
    return <CategoryGridTile title={itemData.item.title} onSelect={() => {
      props.navigation.navigate({
          routeName: 'CategoryMealScreen',
          params: {
            categoryId: itemData.item.id
          }   
        });
      }}
    }} />;
  };

  return (
    <FlatList data={CATEGORIES} renderItem={renderGridItem} numColumns={2} />
  );
};

CategoriesScreen.navigationOptions = {
  headerTitle: 'Meal Categories'
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default CategoriesScreen;