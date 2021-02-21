import React from 'react'
import {StyleSheet, FlatList, SafeAreaView} from 'react-native'
import { Post } from '../component/Post'
import {DATA} from '../data/DataHindi'

export const HindiScreen = () => {
   return(
      <SafeAreaView style={styles.wrapper}>
         <FlatList 
            data={DATA}
            keyExtractor={post => post.id.toString()} 
            renderItem={({item})=>(<Post post={item} />)}/>
      </SafeAreaView>
   )
 }

const styles = StyleSheet.create({
   wrapper:{
      padding:10
   }
})