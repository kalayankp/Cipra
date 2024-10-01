import React from 'react';
import { View, Text, Image, ScrollView, StyleSheet } from 'react-native';

const ImageDisplayScreen = ({ route }) => {
  const { images } = route.params;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {images.map((item, index) => (
        <View key={index} style={styles.imageContainer}>
          <Text style={styles.dateText}>{item.date}</Text>
          <Text style={styles.recommendationText}>{item.recommendation}</Text>
          <Image
            style={styles.image}
            source={item.imageUrl} // Use local image references directly
            resizeMode="contain"
          />
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  imageContainer: {
    marginBottom: 30, // Space between each image item
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 10,
    backgroundColor: '#fff', // Background for each image container
    shadowColor: '#000', // Shadow for elevation effect
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  dateText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#34495E',
    marginBottom: 5,
  },
  recommendationText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#34495E',
    textAlign: 'center',
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: undefined,
    aspectRatio: 1,
    borderRadius: 10,
  },
});

export default ImageDisplayScreen;
