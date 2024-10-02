import React from 'react';
import { View, Image, ScrollView, StyleSheet, Dimensions } from 'react-native';

const ImageDisplayScreen = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../screens/img/steps.jpg')}
          resizeMode="contain"
        />
      </View>
    </ScrollView>
  );
};

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    top:'20'
  },
  imageContainer: {
    width: '100%',
    height: '100%',
  },
  image: {
    width: width,
    height: height,
  },
});

export default ImageDisplayScreen;
