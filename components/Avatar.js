import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

const Avatar = () => {
    const MaleAvatar5 = require('../assets/img/MaleAvatar-5.jpeg');
  return (
    <View style={[styles.avatarContainer, { width: 80, height: 80 }]}>
      <Image source={MaleAvatar5} style={styles.avatarImage} />
    </View>
  );
};

const styles = StyleSheet.create({
  avatarContainer: {
    borderRadius: 50,
    backgroundColor: '#3498db', // Set a default background color
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatarImage: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
  },
  avatarText: {
    fontSize: 18,
    color: 'white',
  },
});

export default Avatar;
