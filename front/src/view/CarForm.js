import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

const CarForm = ({ navigation }) => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [price, setPrice] = useState('');

  const handleAddCar = () => {
    // Implement logic to add a new car
    fetch('http://localhost:8080/car', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title,
        image,
        price: parseInt(price),
      }),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Car added successfully', data);
        navigation.navigate('CarList'); // Navigate back to the car list after adding
      })
      .catch(error => console.error('Error adding car', error));
      navigation.navigate('CarList');
  };

  return (
    <View>
      <TextInput placeholder="Title" value={title} onChangeText={setTitle} />
      <TextInput placeholder="Image URL" value={image} onChangeText={setImage} />
      <TextInput placeholder="Price" value={price} onChangeText={setPrice} keyboardType="numeric" />
      <Button title="Add Car" onPress={handleAddCar} />
    </View>
  );
};

export default CarForm;