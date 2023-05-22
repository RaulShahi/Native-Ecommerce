import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  useWindowDimensions,
} from 'react-native';
import React, {useCallback, useState} from 'react';

const ImageCarousel = ({images}: {images: string[]}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const windowWidth = useWindowDimensions().width;

  const listScrollHandler = useCallback(({viewableItems}) => {
    if (viewableItems.length > 0) {
      setActiveIndex(viewableItems?.[0]?.index || 0);
    }
  }, []);
  return (
    <View style={styles.root}>
      <FlatList
        data={images}
        renderItem={({item}) => (
          <Image
            style={[styles.image, {width: windowWidth - 40}]}
            source={{uri: item}}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToAlignment="center"
        snapToInterval={windowWidth - 20}
        decelerationRate={'fast'}
        viewabilityConfig={{
          viewAreaCoveragePercentThreshold: 50,
        }}
        onViewableItemsChanged={listScrollHandler}
      />
      <View style={styles.dotContainer}>
        {images.map((image, index) => (
          <View
            style={[
              styles.dot,
              {
                backgroundColor: index === activeIndex ? '#c9c9c9' : '#ededed',
              },
            ]}
            key={index}
          />
        ))}
      </View>
    </View>
  );
};

export default ImageCarousel;

const styles = StyleSheet.create({
  root: {},
  image: {
    margin: 10,
    height: 250,
    resizeMode: 'contain',
  },
  dotContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  dot: {
    width: 10,
    height: 10,
    backgroundColor: '#ededed',
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#c9c9c9',
    margin: 5,
  },
});
