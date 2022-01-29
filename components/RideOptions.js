import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { FlatList, Image, SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { Icon } from 'react-native-elements';
import { styles } from '../styles/MapScreenStyles';
import { rideOptions } from '../json/rideOptions';
import { useSelector } from 'react-redux';
import { selectTravelTimeInformation } from '../slices/navSlice';

export default function RideOptions() {
    const navigation = useNavigation()
    const [selected, setSelected] = useState(null)
    const travelTimeInfo = useSelector(selectTravelTimeInformation);
    const SURCHARGE_RATE = 1.5

    return (
        <SafeAreaView style={styles.rideOptions}>
            <View style={styles.rideOptionsTitleContainer}>
                <TouchableOpacity 
                    onPress={() => navigation.navigate("NavigateCard")}
                >
                    <Icon name="chevron-left" type="fontawesome"/>
                </TouchableOpacity>
                <Text style={styles.rideOptionsTitle}>Select a ride - {travelTimeInfo?.distance.text}</Text>
                <Icon name="arrow-left" style={styles.rideOptionsBackIconBalancer}/>
            </View>
            <FlatList
                data={rideOptions}
                keyExtractor={(item) => item.id}
                showsVerticalScrollIndicator={false}
                renderItem={({ item: {id, title, image, multiplier}, item}) => {
                    return (
                        <TouchableOpacity style={styles.rideOptionsItemContainer(id === selected?.id)}
                            onPress={() => {
                                setSelected(item)
                            }}
                        >
                            <Image
                                style={styles.rideOptionsListImage} 
                                source={item.image}
                            />
                            <View>
                                <Text style={styles.rideOptionsListTitle}>{title}</Text>
                                <Text style={styles.rideOptionsListSubtitle}>{travelTimeInfo?.duration.text}</Text>
                            </View>
                            <Text style={styles.rideOptionsListPrice}>{
                                new Intl.NumberFormat('en-CA', {
                                    style: 'currency',
                                    currency: "CAD"
                                }).format(
                                    ((travelTimeInfo?.duration.value * SURCHARGE_RATE * multiplier)/100)
                                )
                            }</Text>
                        </TouchableOpacity>
                    )
                }}
            />
            <TouchableOpacity style={styles.rideOptionsCTABtn(!selected)}
                disabled={!selected}
            >
                <Text style={styles.rideOptionsCTAText}>Choose {selected ? selected?.title : "a ride"}</Text>
            </TouchableOpacity>
        </SafeAreaView>
    )
}