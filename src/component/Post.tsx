import React from 'react'
import {StyleSheet, TouchableOpacity, View, Text, Image} from 'react-native'


export const Post = ({post})=>{
   return(
      <TouchableOpacity activeOpacity={0.3}>
         <View style={styles.post}>
            <Text style={styles.date}>{new Date(post.date).toLocaleDateString()}</Text>
            <Text style={styles.text}>{post.title.rendered}</Text>
            <View style={styles.img}>
               <Image style={styles.image} source={{uri:post.img}}/>
            </View>
         </View>
      </TouchableOpacity>
   )
}

const styles = StyleSheet.create({
   post:{
      flexDirection:'column',
      alignItems:'center',
      padding: 15,
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
   },
   img:{
      flex:1,
      width:"100%",
      height:500,
      overflow:'hidden',
      marginTop:20

   },
   image: {
      flex: 1,
      resizeMode:"cover",
      justifyContent: "center",
      width:"100%",
      height:"100%"
    },
})