import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

const CategoryGridTile = props => {
  return ( 
    <TouchableOpacity style={styles.gridItem} 
      onPress={() => {
        
    >
      <View>
        <Text>{itemData.item.title}</Text>
      </View>
  </TouchableOpacity>);
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150
  }
});

export default CategoryGridTile;