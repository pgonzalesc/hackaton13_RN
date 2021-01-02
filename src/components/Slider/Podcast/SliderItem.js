import React from 'react';
import {View, StyleSheet, Text, Image, Dimensions, TouchableOpacity} from 'react-native';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: width / 2, //4
    height: height / 3,  //5.5
    backgroundColor: '#D4F1FA',
    margin: 15,
    borderRadius: 10,
  },
  textView: {
      //marginTop: 10,
  },
  image: {
    width: width / 3, //4
    height: height / 4, //2.8
    borderRadius: 10,
  },
  itemTitle: {
    color: '#212121',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  itemAuthor: {
    color: '#054AA3',
    fontSize: 15,
    marginTop: 5,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

const SliderItem = ({item, onPress}) => {
    //console.log(item);
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.textView}>
          <Text style={styles.itemTitle}>{item.title}</Text>
        </View>
        <Image
          style={styles.image}
          source={{
            uri: item.image,
          }}
        />
        <View style={styles.textView}>
          <Text style={styles.itemAuthor}>{item.author}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default SliderItem;
