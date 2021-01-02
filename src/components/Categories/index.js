import React from 'react';
import {StyleSheet, View, Text, Image, Dimensions, TouchableOpacity} from 'react-native';

const {height, width} = Dimensions.get('window');

const Categories = ({data})=> {
    //const {music, comedy, games, news} = route.params;
    //console.log('data',data[0]);
    const music = data[0].music;
    const comedy = data[0].comedy;//data[0].comedy;
    const games = data[0].games;
    const news = data[0].news;
    return(
        <View style={{flexDirection: 'row', justifyContent: 'center', alignItems:'center', marginVertical: 40,}}>
            <TouchableOpacity onPress={()=>console.log('comedy', comedy)} style={{marginRight: 25}}>
                <View style={{backgroundColor: '#F05F68', borderRadius: 30, padding: 10}}>
                    <Image 
                    style={styles.iconCategories}
                    source={{uri: 'https://image.flaticon.com/icons/png/512/23/23678.png'}}
                    />
                </View>
                <Text style={{textAlign: 'center'}}>Comedia</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>console.log('music', music)} style={{marginRight: 25}}>
                <View style={{backgroundColor: '#0CDFF5', borderRadius: 30, padding: 10}}>
                    <Image 
                    style={styles.iconCategories}
                    source={{uri: 'https://image.flaticon.com/icons/png/512/122/122320.png'}}
                    />
                </View>
                <Text style={{textAlign: 'center'}}>Musica</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>console.log('games', games)}  style={{marginRight: 25}}>
                <View style={{backgroundColor: '#09AB75', borderRadius: 30, padding: 10}}>
                    <Image 
                    style={styles.iconCategories}
                    source={{uri: 'https://aux.iconspalace.com/uploads/1458485011411104546.png'}}
                    />
                </View>
                <Text style={{textAlign: 'center'}}>Juegos</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>console.log('news', news)} >
                <View style={{backgroundColor: '#077CAB', borderRadius: 30, padding: 10}}>
                    <Image 
                    style={styles.iconCategories}
                    source={{uri: 'https://icons-for-free.com/iconfiles/png/512/events+news+newspaper+icon-1320086461674084705.png'}}
                    />
                </View>
                <Text style={{textAlign: 'center'}}>Noticias</Text>
            </TouchableOpacity>
        </View> 
    );
}

const styles = StyleSheet.create({
    iconCategories: {
        height: height/18,
        width: width/10,
    }
});

export default Categories;