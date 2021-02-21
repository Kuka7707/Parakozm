import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import { UrduScreen } from './Screens/UrduScreen'


interface HomeStackProps{

}

const Stack = createStackNavigator()

export const HomeStack: React.FC<HomeStackProps> = ()=>{
   return(
      <Stack.Navigator initialRouteName="Urdu">
         <Stack.Screen name='Urdu' component={UrduScreen} 
            options={{
            headerTitle:'Urdu'
            }} />
      </Stack.Navigator>
   )
}




            