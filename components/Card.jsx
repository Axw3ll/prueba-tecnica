import React from 'react';
import { View, Text, Image, StyleSheet, Pressable } from 'react-native';
import CardStyle from '../styles/CardStyle';

const Card = ({ character, quote, img, fet }) => {

    return (
        <>
            <View style={CardStyle.card}>
                <Image source={{ uri: img }} style={CardStyle.image} />
                <Text style={CardStyle.character}>{character}</Text>
                <Text style={CardStyle.quote}>{quote}</Text>
            </View>
            <Pressable
                style={({ pressed }) => [
                    CardStyle.pressable,
                    pressed && { backgroundColor: '#1a60cc' }, // Más oscuro cuando se presiona
                ]}
                onPress={fet}
            >
                <Text style={CardStyle.pressableText}>Siguiente</Text>
            </Pressable>
        </>


    );
};

export default Card;