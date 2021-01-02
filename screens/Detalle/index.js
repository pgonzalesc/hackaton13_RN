import React from 'react';
import {StyleSheet, ScrollView, View, Text, Image, TouchableOpacity, Dimensions} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
const {height, width} = Dimensions.get('window');
const Detalle = ({navigation, route})=> {
    const {image, title, author, description} = route.params;
    return(
        <ScrollView style={styles.container}>
            <View>
                <TouchableOpacity onPress={()=>{navigation.navigate('Home');}}>
                    <Icon name={'md-arrow-back-outline'} size={30} color={'#212121'}/>
                </TouchableOpacity>
            </View>
            <View style={styles.containerImage}>
                <Image 
                    style={styles.image}
                    source={{
                        uri: image
                    }}
                />
            </View>
            <View style={styles.containerTitle}>
                <Text style={styles.textTitle}>{title}</Text>
                <Text style={styles.textDescription}>{description}</Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#C9E2FF',
        padding: 20,
    },
    containerTitle: {
        //backgroundColor: '#124A19',
        paddingVertical: 10,
    },
    containerImage: {
        flex: 1,
        alignItems: 'center', 
        justifyContent: 'center',
        marginTop: 10,
        marginBottom: 10,
    },
    textTitle: {
        //fontWeight: 'bold',
        fontSize: 30,
        color: '#27088C',
        textAlign: 'center',
        fontWeight: 'bold'
    },
    textDescription: {
        //fontWeight: 'bold',
        fontSize: 18,
        color: '#212121',
        //textAlign: 'center',
    },
    image: {
        width: width/1.5,
        height: height/2,
        //marginLeft: 15,
    },
});

export default Detalle;