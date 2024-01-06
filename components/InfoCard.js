import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const InfoCard = (props) => {
  return (
    <View>
      <TouchableOpacity onPress={props.onPress}>
        <View style={styles.cardWrapper}>
          <Text style={styles.persentage}>{props.done}% </Text>
          <Text style={styles.cardTitle}>{props.title}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cardWrapper: {
    // aspectRatio:1,
    alignItems: 'center', // Align children (percentage and title) in the center horizontally
    justifyContent: 'center', // Align children in the center vertically
    padding: 16, // Add padding for better appearance
    margin:20,
    backgroundColor: 'white', // Set the background color
    borderRadius: 20, // Add border radius for rounded corners
    shadowColor: '#341e9d',
    elevation: 15, // For Android shadow
  },
  persentage: {
    fontSize: 40,
    color: '#341e9d',
  },
  cardTitle: {
    fontSize: 20,
    color: '#341e9d',
    marginTop: 8, // Add margin to separate percentage and title
    textAlign:'center'
  },
});

export default InfoCard;
