import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

const Avatar = (props) => {
    const avatars = [
        require('../assets/img/MaleAvatar-1.png'),
        require('../assets/img/MaleAvatar-2.png'),
        require('../assets/img/MaleAvatar-3.jpg'),
        require('../assets/img/MaleAvatar-4.png'),
        require('../assets/img/MaleAvatar-5.jpg'),
        require('../assets/img/MaleAvatar-6.jpg')
    ];

    return (
        <View style={[styles.avatarContainer, { width: 80, height: 80 }]}>
            <Image source={avatars[props.img - 1]} style={styles.avatarImage} />
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
});

export default Avatar;
