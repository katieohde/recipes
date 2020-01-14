import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import CategoriesScreen from '../screens/CategoriesScreen';
import CategoryMeals from '../screens/CategoryMealScreen';
import MealDetailScreen from '../screens/MealDetailScreen'

const MealsNavigator = createStackNavigator({
  Categories: CategoriesScreen,
  CategoryMeals: {
    screen: CategoryMeals
  },
  MealDetails: MealDetailScreen
});

export default createAppContainer(MealsNavigator);