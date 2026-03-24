import React, { useState, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    Dimensions,
    Image,
    TouchableOpacity
} from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE, Polyline } from 'react-native-maps';
import { Phone, MessageCircle, Star, X } from 'lucide-react-native';
import { OX4Button } from '../../components/OX4Button';
import { OX4Card } from '../../components/OX4Card';
import { COLORS, SPACING, BORDER_RADIUS, SHADOW } from '../../theme/theme';

const { width, height } = Dimensions.get('window');

// Mock route coordinates
const ROUTE_COORDS = [
    { latitude: -8.839, longitude: 13.233 },
    { latitude: -8.845, longitude: 13.245 },
];

export const ActiveRideScreen = ({ navigation }: any) => {
    return (
        <View style={styles.container}>
            <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                initialRegion={{
                    latitude: -8.842,
                    longitude: 13.239,
                    latitudeDelta: 0.02,
                    longitudeDelta: 0.02,
                }}
            >
                <Polyline
                    coordinates={ROUTE_COORDS}
                    strokeWidth={4}
                    strokeColor={COLORS.primary}
                />
                <Marker coordinate={ROUTE_COORDS[0]} title="Origem" />
                <Marker coordinate={ROUTE_COORDS[1]} title="Destino" />
            </MapView>

            <SafeAreaView style={styles.overlay}>
                <View style={styles.header}>
                    <OX4Card style={styles.statusCard}>
                        <Text style={styles.statusText}>Motorista a caminho • 4 min</Text>
                    </OX4Card>
                </View>

                <View style={styles.bottomContainer}>
                    <OX4Card style={styles.driverCard}>
                        <View style={styles.driverInfo}>
                            <View style={styles.driverPhotoPlaceholder}>
                                <Text style={{ fontSize: 30 }}>👨🏽‍✈️</Text>
                            </View>
                            <View style={styles.driverDetails}>
                                <Text style={styles.driverName}>Carlos Oliveira</Text>
                                <View style={styles.ratingRow}>
                                    <Star size={14} color={COLORS.warning} fill={COLORS.warning} />
                                    <Text style={styles.ratingText}>4.9 (124 viagens)</Text>
                                </View>
                                <Text style={styles.vehicleInfo}>Yamaha Fazer • LD-92-31-OX</Text>
                            </View>
                        </View>

                        <View style={styles.actionsRow}>
                            <TouchableOpacity style={styles.actionButton}>
                                <Phone size={24} color={COLORS.primary} />
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.actionButton}>
                                <MessageCircle size={24} color={COLORS.primary} />
                            </TouchableOpacity>
                            <OX4Button
                                title="Cancelar"
                                variant="danger"
                                onPress={() => navigation.navigate('Home')}
                                style={styles.cancelButton}
                            />
                        </View>

                        {/* Simulate trip end after some time for demo purposes */}
                        <TouchableOpacity
                            onPress={() => navigation.navigate('RideSummary')}
                            style={{ marginTop: 10, alignSelf: 'center' }}
                        >
                            <Text style={{ color: COLORS.textLight, fontSize: 10 }}>[Simular Fim da Corrida]</Text>
                        </TouchableOpacity>
                    </OX4Card>
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
        pointerEvents: 'box-none',
    },
    header: {
        padding: SPACING.md,
        alignItems: 'center',
        pointerEvents: 'auto',
    },
    statusCard: {
        backgroundColor: COLORS.primary,
        paddingVertical: SPACING.sm,
        paddingHorizontal: SPACING.lg,
        borderRadius: BORDER_RADIUS.round,
    },
    statusText: {
        color: COLORS.secondary,
        fontWeight: '700',
    },
    bottomContainer: {
        padding: SPACING.md,
        pointerEvents: 'auto',
    },
    driverCard: {
        padding: SPACING.lg,
        ...SHADOW.light,
    },
    driverInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: SPACING.lg,
    },
    driverPhotoPlaceholder: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: COLORS.card,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: COLORS.border,
    },
    driverDetails: {
        marginLeft: SPACING.md,
        flex: 1,
    },
    driverName: {
        fontSize: 18,
        fontWeight: '700',
        color: COLORS.text,
    },
    ratingRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 2,
    },
    ratingText: {
        fontSize: 13,
        color: COLORS.textLight,
        marginLeft: 4,
    },
    vehicleInfo: {
        fontSize: 14,
        color: COLORS.primary,
        fontWeight: '600',
    },
    actionsRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    actionButton: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: COLORS.card,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: COLORS.border,
    },
    cancelButton: {
        flex: 1,
        marginLeft: SPACING.md,
    },
});
