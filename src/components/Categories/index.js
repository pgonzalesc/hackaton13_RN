import React from 'react';
import {StyleSheet, View, Text, Image, Dimensions} from 'react-native';

const {height, width} = Dimensions.get('window');

const Categories = ()=> {
    return(
        <View style={{flexDirection: 'row', justifyContent: 'center', alignItems:'center', marginVertical: 40,}}>
            <View style={{marginRight: 25}}>
                <View style={{backgroundColor: '#F05F68', borderRadius: 30, padding: 10}}>
                    <Image 
                    style={styles.iconCategories}
                    source={{uri: 'https://image.flaticon.com/icons/png/512/23/23678.png'}}
                    />
                </View>
                <Text style={{textAlign: 'center'}}>Comedia</Text>
            </View>
            <View style={{marginRight: 25}}>
                <View style={{backgroundColor: '#0CDFF5', borderRadius: 30, padding: 10}}>
                    <Image 
                    style={styles.iconCategories}
                    source={{uri: 'https://image.flaticon.com/icons/png/512/122/122320.png'}}
                    />
                </View>
                <Text style={{textAlign: 'center'}}>Musica</Text>
            </View>
            <View style={{marginRight: 25}}>
                <View style={{backgroundColor: '#09AB75', borderRadius: 30, padding: 10}}>
                    <Image 
                    style={styles.iconCategories}
                    source={{uri: 'https://aux.iconspalace.com/uploads/1458485011411104546.png'}}
                    />
                </View>
                <Text style={{textAlign: 'center'}}>Juegos</Text>
            </View>
            <View>
                <View style={{backgroundColor: '#077CAB', borderRadius: 30, padding: 10}}>
                    <Image 
                    style={styles.iconCategories}
                    source={{uri: 'https://icons-for-free.com/iconfiles/png/512/events+news+newspaper+icon-1320086461674084705.png'}}
                    />
                </View>
                <Text style={{textAlign: 'center'}}>Noticias</Text>
            </View>
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