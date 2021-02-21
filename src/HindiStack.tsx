import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import { HindiScreen } from './Screens/HindiScreen'



interface HindiStackProps{

}

const Stack = createStackNavigator()

export const HindiStack: React.FC<HindiStackProps> = ()=>{
   return(
      <Stack.Navigator initialRouteName="Hindi">
         <Stack.Screen name='Hindi' component={HindiScreen} 
            options={{
            headerTitle:'Hindi'
            }} />
      </Stack.Navigator>
   )
}




            