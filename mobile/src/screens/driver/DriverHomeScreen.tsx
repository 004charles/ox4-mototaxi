import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    SafeAreaView,
    Switch,
    TouchableOpacity
} from 'react-native';
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { User, DollarSign, List } from 'lucide-react-native';
import { OX4Card } from '../../components/OX4Card';
import { COLORS, SPACING, BORDER_RADIUS, SHADOW } from '../../theme/theme';

const { width, height } = Dimensions.get('window');

export const DriverHomeScreen = ({ navigation }: any) => {
    const [isOnline, setIsOnline] = useState(false);

    return (
        <View style={styles.container}>
            <MapView
                provider={PROVIDER_GOOGLE}
                style={styles.map}
                initialRegion={{
                    latitude: -8.839,
                    longitude: 13.233,
                    latitudeDelta: 0.01,
                    longitudeDelta: 0.01,
                }}
                showsUserLocation
            />

            <SafeAreaView style={styles.overlay}>
                <View style={styles.header}>
                    <OX4Card style={styles.statusCard}>
                        <View style={styles.statusRow}>
                            <Text style={[styles.statusText, { color: isOnline ? COLORS.success : COLORS.textLight }]}>
                                {isOnline ? 'ONLINE' : 'OFFLINE'}
                            </Text>
                            <Switch
                                value={isOnline}
                                onValueChange={setIsOnline}
                                trackColor={{ false: COLORS.border, true: COLORS.success }}
                                thumbColor={COLORS.secondary}
                            />
                        </View>
                    </OX4Card>
                </View>

                <View style={styles.bottomContainer}>
                    <View style={styles.statsRow}>
                        <OX4Card style={styles.statCard}>
                            <DollarSign size={20} color={COLORS.primary} />
                            <Text style={styles.statValue}>Kz 8.500</Text>
                            <Text style={styles.statLabel}>Hoje</Text>
                        </OX4Card>
                        <OX4Card style={styles.statCard}>
                            <List size={20} color={COLORS.primary} />
                            <Text style={styles.statValue}>12</Text>
                            <Text style={styles.statLabel}>Corridas</Text>
                        </OX4Card>
                    </View>

                    {!isOnline ? (
                        <OX4Card style={styles.offlineCard}>
                            <Text style={styles.offlineTitle}>Você está Offline</Text>
                            <Text style={styles.offlineSubtitle}>Fique online para começar a receber solicitações de passageiros próximos.</Text>
                        </OX4Card>
                    ) : (
                        <TouchableOpacity
                            onPress={() => navigation.navigate('IncomingRequest')}
                            style={{ alignSelf: 'center', marginTop: 10 }}
                        >
                            <Text style={{ color: COLORS.textLight, fontSize: 10 }}>[Simular Solicitação Recebida]</Text>
                        </TouchableOpacity>
                    )}
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
    header: {
        alignItems: 'center',
        paddingTop: SPACING.md,
        pointerEvents: 'auto',
    },
    statusCard: {
        width: '60%',
        paddingVertical: 10,
        paddingHorizontal: SPACING.lg,
        borderRadius: BORDER_RADIUS.round,
        ...SHADOW.light,
    },
    statusRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    statusText: {
        fontWeight: '900',
        fontSize: 16,
        letterSpacing: 1,
    },
    bottomContainer: {
        paddingBottom: SPACING.lg,
        pointerEvents: 'auto',
    },
    statsRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: SPACING.md,
    },
    statCard: {
        width: '48%',
        alignItems: 'center',
        paddingVertical: SPACING.md,
    },
    statValue: {
        fontSize: 18,
        fontWeight: '800',
        color: COLORS.text,
        marginTop: 4,
    },
    statLabel: {
        fontSize: 12,
        color: COLORS.textLight,
    },
    offlineCard: {
        alignItems: 'center',
        padding: SPACING.xl,
        backgroundColor: 'rgba(255, 255, 255, 0.95)',
    },
    offlineTitle: {
        fontSize: 18,
        fontWeight: '800',
        color: COLORS.text,
        marginBottom: 4,
    },
    offlineSubtitle: {
        fontSize: 14,
        color: COLORS.textLight,
        textAlign: 'center',
    },
});
