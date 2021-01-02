import React from 'react';
import {StyleSheet, View, Text, Image, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

const Header = () => {
    return (
        <View style={styles.containerTitle}>
            <Text style={styles.textTitle}>Podcasts</Text>
            <Image 
            style={styles.iconProfile}
            source={{uri: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80'}}
            />
        </View> 
    );
}

const styles = StyleSheet.create({
    containerTitle: {
        flexDirection: 'row',
    },
    textTitle:  {
        fontWeight: 'bold',
        fontSize: 40,
        marginRight: '40%',
    },
    iconProfile: {
        height: height/16,
        width: width/10,
        borderRadius: 20,
    },
});

export default Header;