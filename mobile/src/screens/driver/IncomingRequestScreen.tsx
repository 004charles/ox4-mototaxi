import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    Dimensions,
    TouchableOpacity
} from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE, Polyline } from 'react-native-maps';
import { MapPin, Navigation, Star, X, Check } from 'lucide-react-native';
import { OX4Card } from '../../components/OX4Card';
import { COLORS, SPACING, BORDER_RADIUS, SHADOW } from '../../theme/theme';

const { width, height } = Dimensions.get('window');

export const IncomingRequestScreen = ({ navigation }: any) => {
    return (
        <View style={styles.container}>
            <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                initialRegion={{
                    latitude: -8.839,
                    longitude: 13.233,
                    latitudeDelta: 0.02,
                    longitudeDelta: 0.02,
                }}
            >
                <Marker coordinate={{ latitude: -8.839, longitude: 13.233 }} title="Passageiro" />
            </MapView>

            <SafeAreaView style={styles.overlay}>
                <View style={styles.topBar}>
                    <View style={styles.timerCircle}>
                        <Text style={styles.timerText}>15s</Text>
                    </View>
                </View>

                <View style={styles.bottomContainer}>
                    <OX4Card style={styles.requestCard}>
                        <Text style={styles.requestTitle}>Nova Solicitação!</Text>

                        <View style={styles.passengerInfo}>
                            <View style={styles.photoPlaceholder}>
                                <Text style={{ fontSize: 24 }}>👨🏾</Text>
                            </View>
                            <View style={styles.passengerDetails}>
                                <Text style={styles.passengerName}>Mateus Alberto</Text>
                                <View style={styles.ratingRow}>
                                    <Star size={12} color={COLORS.warning} fill={COLORS.warning} />
                                    <Text style={styles.ratingText}>4.8</Text>
                                </View>
                            </View>
                            <Text style={styles.price}>Kz 1.200</Text>
                        </View>

                        <View style={styles.divider} />

                        <View style={styles.routeInfo}>
                            <View style={styles.routeItem}>
                                <Navigation size={16} color={COLORS.success} />
                                <Text style={styles.routeText}>2.1 km • 4 min para buscar</Text>
                            </View>
                            <View style={styles.routeItem}>
                                <MapPin size={16} color={COLORS.primary} />
                                <Text style={styles.routeText} numberOfLines={1}>Rua Amílcar Cabral, Luanda</Text>
                            </View>
                        </View>

                        <View style={styles.actions}>
                            <TouchableOpacity
                                style={[styles.actionBtn, styles.declineBtn]}
                                onPress={() => navigation.goBack()}
                            >
                                <X size={28} color={COLORS.error} />
                                <Text style={styles.btnLabel}>Recusar</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={[styles.actionBtn, styles.acceptBtn]}
                                onPress={() => navigation.navigate('DriverHome')}
                            >
                                <Check size={28} color={COLORS.secondary} />
                                <Text style={[styles.btnLabel, { color: COLORS.secondary }]}>Aceitar</Text>
                            </TouchableOpacity>
                        </View>
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
        padding: SPACING.md,
        pointerEvents: 'box-none',
    },
    topBar: {
        alignItems: 'center',
        paddingTop: SPACING.md,
    },
    timerCircle: {
        width: 60,
        height: 60,
        borderRadius: 30,
        backgroundColor: 'rgba(0, 51, 102, 0.9)',
        borderWidth: 3,
        borderColor: COLORS.secondary,
        alignItems: 'center',
        justifyContent: 'center',
        ...SHADOW.light,
    },
    timerText: {
        color: COLORS.secondary,
        fontWeight: '900',
        fontSize: 18,
    },
    bottomContainer: {
        paddingBottom: SPACING.lg,
        pointerEvents: 'auto',
    },
    requestCard: {
        padding: SPACING.lg,
        ...SHADOW.light,
    },
    requestTitle: {
        fontSize: 20,
        fontWeight: '900',
        color: COLORS.primary,
        textAlign: 'center',
        marginBottom: SPACING.md,
    },
    passengerInfo: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: SPACING.md,
    },
    photoPlaceholder: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: COLORS.card,
        alignItems: 'center',
        justifyContent: 'center',
    },
    passengerDetails: {
        marginLeft: SPACING.md,
        flex: 1,
    },
    passengerName: {
        fontSize: 16,
        fontWeight: '700',
        color: COLORS.text,
    },
    ratingRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    ratingText: {
        fontSize: 12,
        color: COLORS.textLight,
        marginLeft: 4,
    },
    price: {
        fontSize: 20,
        fontWeight: '900',
        color: COLORS.primary,
    },
    divider: {
        height: 1,
        backgroundColor: COLORS.border,
        marginVertical: SPACING.md,
    },
    routeInfo: {
        marginBottom: SPACING.lg,
    },
    routeItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 4,
    },
    routeText: {
        fontSize: 14,
        color: COLORS.text,
        marginLeft: SPACING.sm,
    },
    actions: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    actionBtn: {
        width: '48%',
        height: 70,
        borderRadius: BORDER_RADIUS.md,
        alignItems: 'center',
        justifyContent: 'center',
    },
    declineBtn: {
        backgroundColor: '#FFF0F0',
        borderWidth: 1,
        borderColor: COLORS.error,
    },
    acceptBtn: {
        backgroundColor: COLORS.primary,
    },
    btnLabel: {
        fontSize: 14,
        fontWeight: '800',
        marginTop: 2,
        color: COLORS.error,
    },
});
