import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { AppParamList } from './AppParamList'
import { MaterialIcons, MaterialCommunityIcons } from '@expo/vector-icons'
import { HomeStack } from './HomeStack'
import { HindiStack } from './HindiStack'


interface AppTabsProps{

}

const Tabs = createBottomTabNavigator<AppParamList>()

export const AppTabs: React.FC<AppTabsProps> = ({}) => {
   return(
      <Tabs.Navigator 
         screenOptions={({ route }) => ({
            tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === 'Urdu') {
               iconName = "islam"
               return <MaterialCommunityIcons name="islam" size={24} color="black" />
            } else if (route.name === 'Hindi') {
               iconName = "hinduism"
               return <MaterialCommunityIcons name="hinduism" size={24} color="black" />;
            }else if (route.name === 'Video') {
               iconName = "video"
               return <MaterialIcons name="ondemand-video" size={24} color="black" />;
            }
            // You can return any component that you like here!
            return <MaterialIcons name={iconName} size={size} color={color} />;
            },
         })}
         tabBarOptions={{
            activeTintColor: 'green',
            inactiveTintColor: 'gray',
         }}>
         <Tabs.Screen name='Urdu' component={HomeStack}/>
         <Tabs.Screen name='Hindi' component={HindiStack}/>
         <Tabs.Screen name='Video' component={HomeStack}/>
      </Tabs.Navigator>
   )
}