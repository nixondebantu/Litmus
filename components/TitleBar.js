import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Progress from 'react-native-progress';

function TitleBar(props) {
  return (
    <LinearGradient 
      colors={["#aa4b6b","#6b6b83","#3b8d99"]} 
      start={{x: 0, y: 0}} 
      end={{x: 1, y: 0}} 
      style={styles.container}>
      <View style={{padding:20}}>
        <Text style={{color:'#FFF',fontWeight:'bold',fontSize:20,marginBottom:10,textAlign:'center'}}>{props.title} Progress: {props.done}%</Text>
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
    alignItems:'center',
    backgroundColor:'#341e9d'
  }
});

export default TitleBar;
