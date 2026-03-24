import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    SafeAreaView,
    TextInput
} from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { Search, Navigation, Menu, MapPin } from 'lucide-react-native';
import { OX4Button } from '../../components/OX4Button';
import { COLORS, SPACING, BORDER_RADIUS, SHADOW } from '../../theme/theme';

const { width, height } = Dimensions.get('window');

// Mock data for nearby drivers
const NEARBY_DRIVERS = [
    { id: '1', latitude: -8.840, longitude: 13.235 },
    { id: '2', latitude: -8.842, longitude: 13.230 },
    { id: '3', latitude: -8.838, longitude: 13.240 },
];

export const HomeScreen = ({ navigation }: any) => {
    const [region, setRegion] = useState({
        latitude: -8.839, // Example: Luanda coordinates
        longitude: 13.233,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
    });

    return (
        <View style={styles.container}>
            <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                initialRegion={region}
                showsUserLocation
            >
                {NEARBY_DRIVERS.map((driver) => (
                    <Marker
                        key={driver.id}
                        coordinate={{ latitude: driver.latitude, longitude: driver.longitude }}
                    >
                        <View style={styles.driverMarker}>
                            <Text style={{ fontSize: 20 }}>🏍️</Text>
                        </View>
                    </Marker>
                ))}
            </MapView>

            <SafeAreaView style={styles.overlay}>
                <View style={styles.topBar}>
                    <TouchableOpacity style={styles.menuButton}>
                        <Menu color={COLORS.primary} size={24} />
                    </TouchableOpacity>
                </View>

                <View style={styles.bottomContainer}>
                    <View style={styles.searchCard}>
                        <TouchableOpacity
                            style={styles.searchButton}
                            onPress={() => navigation.navigate('RequestRide')}
                        >
                            <Search color={COLORS.primary} size={20} />
                            <Text style={styles.searchText}>Para onde vamos?</Text>
                        </TouchableOpacity>
                    </View>

                    <OX4Button
                        title="Solicitar Moto"
                        onPress={() => navigation.navigate('RequestRide')}
                        style={styles.requestButton}
                        size="lg"
                    />
                </View>
            </SafeAreaView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    map: {
        width: width,
        height: height,
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'space-between',
        padding: SPACING.md,
        pointerEvents: 'box-none',
    },
    topBar: {
        padding: SPACING.md,
        pointerEvents: 'auto',
    },
    menuButton: {
        width: 45,
        height: 45,
        borderRadius: 22.5,
        backgroundColor: COLORS.secondary,
        alignItems: 'center',
        justifyContent: 'center',
        ...SHADOW.light,
    },
    bottomContainer: {
        width: '100%',
        padding: SPACING.md,
        pointerEvents: 'auto',
    },
    searchCard: {
        backgroundColor: COLORS.secondary,
        borderRadius: BORDER_RADIUS.lg,
        padding: SPACING.md,
        marginBottom: SPACING.md,
        ...SHADOW.light,
    },
    searchButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: COLORS.card,
        borderRadius: BORDER_RADIUS.md,
        padding: 12,
    },
    searchText: {
        color: COLORS.textLight,
        marginLeft: SPACING.sm,
        fontSize: 16,
        fontWeight: '500',
    },
    requestButton: {
        ...SHADOW.light,
    },
    driverMarker: {
        backgroundColor: COLORS.secondary,
        padding: 2,
        borderRadius: 20,
        borderWidth: 2,
        borderColor: COLORS.primary,
        ...SHADOW.light,
    }
});
