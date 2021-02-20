import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import {NavigationContainer} from '@react-navigation/native'
import {View, Text, StyleSheet, Button} from 'react-native'

import { PostScreen } from './Screens/PostScreen'
import { MainScreen } from './Screens/MainScreen'

interface RoutesProps {

}

const Stack = createStackNavigator()

export const Routes: React.FC<RoutesProps> = () => {
   return(
      <NavigationContainer>
         <Stack.Navigator initialRouteName="Main">
            <Stack.Screen name='Main' component={MainScreen} 
               options={{
                  headerTitle:'Главная'
               }} />
            <Stack.Screen name='Post' component={PostScreen} />
         </Stack.Navigator>
      </NavigationContainer>
   )
}


const styles = StyleSheet.create({
   center:{
      flex:1,
      justifyContent:'center',
      alignItems:'center'
   }
})