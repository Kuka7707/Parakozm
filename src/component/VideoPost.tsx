import React, {useRef} from 'react';
import { View, StyleSheet, Text,} from 'react-native';
import { Video } from 'expo-av';

export const VideoPost= ({post}) => {
  const video = useRef(null);
  return (
    <View style={styles.container}>
      <Text style={styles.date}>{new Date(post.date).toLocaleDateString()}</Text>
      <Text style={styles.text}>{post.title.rendered}</Text>
      <Video ref={video} style={styles.video} source={{ uri: post.video }} useNativeControls resizeMode="contain" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
   flexDirection:'column',
   alignItems:'center',
   padding: 15,
   borderWidth: 1,
   borderColor: 'green',
   borderRadius:10,
   marginBottom:30,
   flex:1
  },
  video: {
    alignSelf: 'center',
    width: 320,
    height: 200,
  },
  text:{
   fontSize:15,
   color:'green'
   },
   date:{
      fontSize:12,
      color:'green'
   },
});
