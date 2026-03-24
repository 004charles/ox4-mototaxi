import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import { MapPin, ArrowLeft, Clock, CreditCard } from 'lucide-react-native';
import { OX4Button } from '../../components/OX4Button';
import { OX4Card } from '../../components/OX4Card';
import { COLORS, SPACING, BORDER_RADIUS } from '../../theme/theme';

export const RequestRideScreen = ({ navigation }: any) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <ArrowLeft color={COLORS.primary} size={24} />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>Solicitar Corrida</Text>
                <View style={{ width: 24 }} />
            </View>

            <ScrollView style={styles.content}>
                <OX4Card style={styles.locationCard}>
                    <View style={styles.locationRow}>
                        <View style={[styles.dot, { backgroundColor: COLORS.success }]} />
                        <View style={styles.locationTextContainer}>
                            <Text style={styles.label}>Origem</Text>
                            <Text style={styles.address}>Minha Localização Atual</Text>
                        </View>
                    </View>
                    <View style={styles.line} />
                    <View style={styles.locationRow}>
                        <View style={[styles.dot, { backgroundColor: COLORS.error }]} />
                        <View style={styles.locationTextContainer}>
                            <Text style={styles.label}>Destino</Text>
                            <Text style={styles.address}>Rua Major Kanhangulo, Luanda</Text>
                        </View>
                    </View>
                </OX4Card>

                <Text style={styles.sectionTitle}>Opções Disponíveis</Text>

                <TouchableOpacity style={styles.rideOptionSelected}>
                    <View style={styles.rideInfo}>
                        <Text style={{ fontSize: 32 }}>🏍️</Text>
                        <View style={styles.rideDetails}>
                            <Text style={styles.rideType}>Moto Econômica</Text>
                            <Text style={styles.rideTime}>3 min de distância</Text>
                        </View>
                    </View>
                    <Text style={styles.price}>Kz 1.200</Text>
                </TouchableOpacity>

                <View style={styles.infoRow}>
                    <View style={styles.infoItem}>
                        <Clock size={16} color={COLORS.textLight} />
                        <Text style={styles.infoText}>~12 min de viagem</Text>
                    </View>
                    <View style={styles.infoItem}>
                        <CreditCard size={16} color={COLORS.textLight} />
                        <Text style={styles.infoText}>Dinheiro</Text>
                    </View>
                </View>
            </ScrollView>

            <View style={styles.footer}>
                <OX4Button
                    title="Confirmar Corrida"
                    onPress={() => navigation.navigate('ActiveRide')}
                    size="lg"
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.secondary,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: SPACING.md,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.border,
    },
    headerTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: COLORS.primary,
    },
    content: {
        flex: 1,
        padding: SPACING.md,
    },
    locationCard: {
        marginBottom: SPACING.lg,
    },
    locationRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        marginRight: SPACING.md,
    },
    locationTextContainer: {
        flex: 1,
        paddingVertical: SPACING.xs,
    },
    label: {
        fontSize: 12,
        color: COLORS.textLight,
    },
    address: {
        fontSize: 15,
        fontWeight: '600',
        color: COLORS.text,
    },
    line: {
        height: 20,
        width: 2,
        backgroundColor: COLORS.border,
        marginLeft: 4,
        marginVertical: 2,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: '700',
        color: COLORS.text,
        marginBottom: SPACING.md,
    },
    rideOptionSelected: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: COLORS.card,
        borderRadius: BORDER_RADIUS.lg,
        padding: SPACING.md,
        borderWidth: 2,
        borderColor: COLORS.primary,
    },
    rideInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    rideDetails: {
        marginLeft: SPACING.md,
    },
    rideType: {
        fontSize: 16,
        fontWeight: '700',
        color: COLORS.text,
    },
    rideTime: {
        fontSize: 13,
        color: COLORS.textLight,
    },
    price: {
        fontSize: 18,
        fontWeight: '800',
        color: COLORS.primary,
    },
    infoRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: SPACING.lg,
    },
    infoItem: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    infoText: {
        fontSize: 13,
        color: COLORS.textLight,
        marginLeft: SPACING.xs,
    },
    footer: {
        padding: SPACING.lg,
        backgroundColor: COLORS.secondary,
        borderTopWidth: 1,
        borderTopColor: COLORS.border,
    },
});
