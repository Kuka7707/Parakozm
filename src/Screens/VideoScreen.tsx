import React from 'react'
import {StyleSheet, FlatList, SafeAreaView} from 'react-native'
import { VideoPost } from '../component/VideoPost'
import {DATA} from '../data/DataVideo'


export const VideoScreen = ({}) => {
   return(
      <SafeAreaView style={styles.wrapper}>
         <FlatList 
            data={DATA}
            keyExtractor={post => post.id.toString()} 
            renderItem={({item})=>(<VideoPost post={item} />)}/>
      </SafeAreaView>
   )
 }

const styles = StyleSheet.create({
   wrapper:{
      padding:10
   }
})