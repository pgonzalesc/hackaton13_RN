import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text, Image, Dimensions } from 'react-native';
import Api from '../../src/api';
import Slider from '../../src/components/Slider/Podcast/Slider';
import Categories from '../../src/components/Categories';
import Header from '../../src/components/Header';

const {height, width} = Dimensions.get('window');

const Home = ({navigation})=> {
    const [podcast, setPodcast] = useState([]);
    const [categories, setCategories] = useState([]);
    const [error, setError] = useState('');

    useEffect(() => {
        Api.podcastApi
        .getPodcast()
        .then((data) => {
            if (data.errors) {
                //console.warn('get api error', data);
                setError(data.errors);
            } else {
                console.log('Podcast', data);
                setPodcast(data);
            }
        })
        .catch((e) => {
            //console.warn('get api order catch', e);
            setError(e.errors);
        });

        Api.podcastApi
        .getCategories()
        .then((data) => {
            if (data.errors) {
                console.warn('get api error', data);
                setError(data.errors);
            } else {
                console.log('Categories', data);
                setCategories(data);
            }
        })
        .catch((e) => {
            //console.warn('get api order catch', e);
            setError(e.errors);
        });
    }, []);

    return (
        <View style={styles.container}>
            <Header/>
            <Categories data={categories}/>
            <View style={{flex: 1}}>
                <Slider navigation={navigation} data={podcast}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: 'center', 
        justifyContent: 'center',
        marginHorizontal: 25,
        marginVertical: 40,
    },
    
});

export default Home;