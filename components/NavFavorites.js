import React from 'react';
import { FlatList, Text, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { navFavorites } from '../json/navFavorites';
import { styles } from '../styles/HomeScreenStyles';

export default function NavFavorites() {
    return <FlatList
            data={navFavorites}
            ItemSeparatorComponent={() => (
                <View
                    style={styles.navFavSeparator}
                />
            )}
            keyExtractor={(item) => item.id}
            renderItem={({ item : {icon, location, destination}}) => (
                <TouchableOpacity style={styles.navFavContainer}>
                    <Icon
                        style={styles.navFavIcon}
                        name={icon}
                        type="ionicon"
                        color="white"
                        size={18}
                    />
                    <View>
                        <Text style={styles.navFavTitle}>{location}</Text>
                        <Text style={styles.navFavSubtitle}>{destination}</Text>
                    </View>
                </TouchableOpacity>
            )}
        />
}