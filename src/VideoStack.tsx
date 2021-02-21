import React from 'react'
import {createStackNavigator} from '@react-navigation/stack'
import { VideoScreen } from './Screens/VideoScreen'



interface VideoStackkProps{

}

const Stack = createStackNavigator()

export const VideoStack: React.FC<VideoStackkProps> = ()=>{
   return(
      <Stack.Navigator initialRouteName="Video">
         <Stack.Screen name='Video' component={VideoScreen} 
            options={{
            headerTitle:'Video'
            }} />
      </Stack.Navigator>
   )
}
