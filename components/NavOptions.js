import React from 'react';
import { FlatList, Text, TouchableOpacity, View, Image } from 'react-native';
import { navOptionsData }  from "../json/navOptionsData"
import { styles } from "../styles/HomeScreenStyles";
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectOrigin } from '../slices/navSlice';

export default function NavOptions() {
    const navigation = useNavigation()
    const origin = useSelector(selectOrigin)

    return (
        <>
            <FlatList
                data={navOptionsData}
                keyExtractor={(item) => item.id}
                horizontal
                renderItem={({ item }) => (
                    <TouchableOpacity 
                        style={styles.navOptionsContainer(!origin)}
                        onPress={() => navigation.navigate(item.screen)}
                        disabled={!origin}
                    >
                        <View style={styles.navOptionsImgContainer}>
                            <Image
                                source={item.image}
                                style={styles.navOptionsImg}
                            />
                        </View>
                        <Text style={styles.navOptionsTitle}>{item.title}</Text>
                        <Icon 
                            style={styles.navOptionsIcon}
                            type='antdesign'
                            name="arrowright"
                            color="white"
                        />
                    </TouchableOpacity>
                )}
            />
        </>
    )
} 