import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import { View, Text, FlatList, Button, Image, StyleSheet } from 'react-native';

const CarList = ({ navigation }) => {
    const [cars, setCars] = useState([]);

    const fetchCarList = () => {
        fetch('http://localhost:8080/car')
            .then(response => response.json())
            .then(data => setCars(data))
            .catch(error => console.error('Error fetching cars', error));
    };

    useEffect(() => {
        fetchCarList();
    }, []);

    useFocusEffect(
        useCallback(() => {
            fetchCarList();
        }, [])
    );

    const navigateToCarForm = () => {
        navigation.navigate('CarForm');
    };

    return (
        <View style={styles.container}>
            <FlatList
                data={cars}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) => (
                    <View style={styles.carContainer}>
                        <Image source={{ uri: item.image }} style={styles.carImage} />
                        <Text>Modelo: {item.title}</Text>
                        <Text>Preço: R${item.price} </Text>
                    </View>
                )}
            />
            <Button title="Add Car" onPress={navigateToCarForm} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 10,
    },
    carContainer: {
        marginBottom: 20,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    carImage: {
        width: 200,
        height: 100,
        marginBottom: 10,
    },
});

export default CarList;