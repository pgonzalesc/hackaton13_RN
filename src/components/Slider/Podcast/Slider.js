import React from 'react';
import { View, StyleSheet, FlatList, Animated } from 'react-native';
import SliderItem from './SliderItem';

const styles = StyleSheet.create({
  dot: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

const AnimatedFlatList = Animated.createAnimatedComponent(FlatList);

const Slider = ({navigation,data}) => {
    //console.log(data);
  const scrollX = new Animated.Value(0);
  const detail = (item) => {
    navigation.navigate('Podcast', item);
  };

  if (data && data.length) {
    return (
      <View style={{flex: 1}}>
        <AnimatedFlatList
          data={data}
          keyExtractor={(item, index) => 'key' + index}
          vertical
          scrollEnabled
          snapToAlignment="center"
          scrollEventThrottle={16}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          renderItem={(item) => {
            return <SliderItem item={item.item} onPress={()=>detail(item.item)}/>;
          }}
          onScroll={Animated.event(
            [{nativeEvent: {contentOffset: {x: scrollX}}}],
            {
                //listener: (event) => console.log(event),
                useNativeDriver: true,
            },
          )}
        />
      </View>
    );
  }
  return null;
};

export default Slider;
