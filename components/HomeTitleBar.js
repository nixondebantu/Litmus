import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Progress from 'react-native-progress';
import Avatar from './Avatar';

function HomeTitleBar(props) {
  return (
    <LinearGradient 
      colors={["#aa4b6b","#6b6b83","#3b8d99"]} 
      start={{x: 0, y: 0}} 
      end={{x: 1, y: 0}} 
      style={styles.container}>
      <View style={styles.content}>
        <Avatar />
        <Text style={styles.text}>Turjo Deb</Text>
        <Text style={styles.text}>{props.title}Total Progress: {props.done}%</Text>
        <Progress.Bar 
          progress={props.done/100} 
          width={200}
          color='#FFF'
          animated={true}
          indeterminateAnimationDuration={1000}
          borderRadius={40} />
      </View>
    </LinearGradient>
  );
}

const styles=StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin:0,
    backgroundColor:'#341e9d'
  },
  content: {
    padding: 20,
    alignItems: 'center',
  },
  text: {
    color:'#FFF',
    fontWeight:'bold',
    fontSize:20,
    marginBottom:10,
    textAlign:'center'
  }
});

export default HomeTitleBar;
