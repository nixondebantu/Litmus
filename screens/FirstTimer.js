import { AntDesign } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { Alert, Dimensions, Linking, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import Avatar from '../components/Avatar';

const { width, height } = Dimensions.get('window');
const buttonWidth = width * 0.8;

function FirstTimer({ onFinish, setUsername, setAvatar }) {
  const [name, setName] = useState('');
  const [tempAvatar, setTempAvatar] = useState(1); // Default tempAvatar is 1

  const linkPressed = async() =>{
    const url = 'https://github.com/nixondebantu/Litmus';
    const supported = await Linking.canOpenURL(url);

    if(supported) {
      await Linking.openURL(url);
    } else {
      console.log("Can't open this URL");
    }
  };
  const saveData = async () => {
    if (name === '') {
      Alert.alert('Please enter your name');
      return;
    }
    try {
      await AsyncStorage.setItem('userName', name);
      await AsyncStorage.setItem('userAvatar', JSON.stringify(tempAvatar));
      setUsername(name);
      setAvatar(tempAvatar);
      onFinish();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <LinearGradient
      colors={["#aa4b6b", "#6b6b83", "#3b8d99"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styles.container}>
      <View style={styles.userAvatar}>
        <Avatar img={tempAvatar} />
      </View>
      <TextInput
        placeholder="Enter Your Name"
        onChangeText={(text) => setName(text)}
        value={name}
        style={styles.nameInput}
      />
      <Text style={styles.avatarTxt}>Choose Avatar</Text>
      <View style={styles.avatarGrid}>
        {[1, 2, 3, 4, 5, 6].map((avatarNumber) => (
          <TouchableOpacity
            key={avatarNumber}
            onPress={() => setTempAvatar(avatarNumber)}
            style={styles.avatarTouchable}>
            <Avatar img={avatarNumber} />
          </TouchableOpacity>
        ))}
      </View>
      <View style={styles.bottom}>
        <Text style={styles.welcomeTxt}>Spark Your Potential with</Text>
        <Text style={[styles.welcomeTxt, { fontStyle: 'italic', marginBottom: height * 0.05 }]}>LITMUS</Text>
        <TouchableOpacity style={styles.btn} onPress={saveData}>
          <Text style={styles.btnTxt}>Continue</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.btn,{backgroundColor:'#fff'}]} onPress={linkPressed}>
          <Text style={styles.btnTxt}>More Info <AntDesign name="github" size={24} color="black" /></Text>
        </TouchableOpacity>
      </View>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  userAvatar: {
    marginTop: height * 0.08,
    marginBottom: height * 0.03,
  },
  welcomeTxt: {
    fontSize: width * 0.06,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#fff',
  },
  avatarTxt: {
    fontSize: width * 0.05,
    marginVertical: height * 0.03,
    color: '#fff',
  },
  nameInput: {
    fontSize: width * 0.05,
    textAlign: 'center',
    fontWeight: 'bold',
    width: '80%',
    color: '#fff',
    marginBottom: height * 0.02,
  },
  avatarGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarTouchable: {
    borderRadius: 50,
    overflow: 'hidden',
    width: '30%',
    marginVertical: height * 0.01,
    alignItems: 'center',
  },
  btn: {
    backgroundColor: 'yellow',
    borderRadius: 10,
    width: buttonWidth,
    marginBottom:10
  },
  btnTxt: {
    textAlign: 'center',
    fontSize: width * 0.07,
    padding: height * 0.005,
  },
  bottom: {
    alignItems: 'center',
    marginTop: height * 0.03,
  },
});

export default FirstTimer;
