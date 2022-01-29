import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity, View } from 'react-native';
import { styles } from '../styles/MapScreenStyles';
import Map from '../components/Map';
import { createStackNavigator } from '@react-navigation/stack';
import NavigateCard from '../components/NavigateCard';
import RideOptions from '../components/RideOptions';
import NavFavorites from '../components/NavFavorites';
import { Icon } from 'react-native-elements';

export default function MapScreen() {
    const Stack = createStackNavigator();
    const navigation = useNavigation()
    const stackOptions = {
        headerShown: false
    }

    return (
        <View style={styles.screenContainer}>
            <TouchableOpacity 
            style={styles.menuBtn}
            onPress={() => navigation.navigate("HomeScreen")}
            >
                <Icon name="menu"/>
            </TouchableOpacity>
            <View style={styles.mapContainer}>
                <Map/>
            </View>
            <View style={styles.nonMapViewContainer}>
                <Stack.Navigator>
                    <Stack.Screen
                        name='NavigateCard'
                        component={NavigateCard}
                        options={stackOptions}
                    />
                    <Stack.Screen
                        name='RideOptions'
                        component={RideOptions}
                        options={stackOptions}
                    />
                </Stack.Navigator>
            </View>
        </View>
    )
}