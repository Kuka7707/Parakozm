import React from 'react'
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native'


export const Post = ({post})=>{
   return(
      <TouchableOpacity activeOpacity={0.5}>
         <View style={styles.post}>
            <Text style={styles.date}>{new Date(post.date).toLocaleDateString()}</Text>
            <Text style={styles.text}>{post.title.rendered}</Text>
            <Text>{post.content.rendered}</Text>
         </View>
      </TouchableOpacity>
   )
}

const styles = StyleSheet.create({
   post:{
      flexDirection:'column',
      alignItems:'center',
      padding: 20,
      borderWidth: 1,
      borderColor: 'green',
      borderRadius:10,
      marginBottom:30,
   },
   text:{
      fontSize:15,
      color:'green'
   },
   date:{
      fontSize:12,
      color:'green'
   }
})