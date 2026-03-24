import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    ScrollView
} from 'react-native';
import { CheckCircle2, Star } from 'lucide-react-native';
import { OX4Button } from '../../components/OX4Button';
import { OX4Card } from '../../components/OX4Card';
import { COLORS, SPACING, BORDER_RADIUS } from '../../theme/theme';

export const RideSummaryScreen = ({ navigation }: any) => {
    const [rating, setRating] = useState(0);

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={styles.header}>
                    <CheckCircle2 color={COLORS.success} size={80} strokeWidth={1.5} />
                    <Text style={styles.title}>Corrida Finalizada!</Text>
                    <Text style={styles.subtitle}>Obrigado por viajar com a OX4.</Text>
                </View>

                <OX4Card style={styles.summaryCard}>
                    <View style={styles.priceContainer}>
                        <Text style={styles.priceLabel}>Valor Total</Text>
                        <Text style={styles.priceValue}>Kz 1.200</Text>
                    </View>

                    <View style={styles.divider} />

                    <View style={styles.tripDetail}>
                        <Text style={styles.detailLabel}>Origem</Text>
                        <Text style={styles.detailValue}>Minha Localização</Text>
                    </View>
                    <View style={styles.tripDetail}>
                        <Text style={styles.detailLabel}>Destino</Text>
                        <Text style={styles.detailValue}>Rua Major Kanhangulo</Text>
                    </View>
                </OX4Card>

                <View style={styles.ratingSection}>
                    <Text style={styles.ratingTitle}>Como foi sua viagem?</Text>
                    <Text style={styles.ratingSubtitle}>Avalie o motorista Carlos Oliveira</Text>

                    <View style={styles.starsRow}>
                        {[1, 2, 3, 4, 5].map((star) => (
                            <TouchableOpacity
                                key={star}
                                onPress={() => setRating(star)}
                                style={styles.starButton}
                            >
                                <Star
                                    size={40}
                                    color={rating >= star ? COLORS.warning : COLORS.border}
                                    fill={rating >= star ? COLORS.warning : 'transparent'}
                                />
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
            </ScrollView>

            <View style={styles.footer}>
                <OX4Button
                    title="Concluir"
                    onPress={() => navigation.navigate('Home')}
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
    scrollContent: {
        padding: SPACING.lg,
        alignItems: 'center',
    },
    header: {
        alignItems: 'center',
        marginTop: 40,
        marginBottom: 40,
    },
    title: {
        fontSize: 24,
        fontWeight: '800',
        color: COLORS.primary,
        marginTop: SPACING.md,
    },
    subtitle: {
        fontSize: 16,
        color: COLORS.textLight,
        marginTop: SPACING.xs,
    },
    summaryCard: {
        width: '100%',
        padding: SPACING.xl,
        marginBottom: 40,
    },
    priceContainer: {
        alignItems: 'center',
        marginBottom: SPACING.lg,
    },
    priceLabel: {
        fontSize: 14,
        color: COLORS.textLight,
    },
    priceValue: {
        fontSize: 32,
        fontWeight: '900',
        color: COLORS.primary,
    },
    divider: {
        height: 1,
        backgroundColor: COLORS.border,
        marginVertical: SPACING.md,
    },
    tripDetail: {
        marginVertical: SPACING.sm,
    },
    detailLabel: {
        fontSize: 12,
        color: COLORS.textLight,
    },
    detailValue: {
        fontSize: 14,
        fontWeight: '600',
        color: COLORS.text,
    },
    ratingSection: {
        alignItems: 'center',
        width: '100%',
    },
    ratingTitle: {
        fontSize: 18,
        fontWeight: '700',
        color: COLORS.text,
    },
    ratingSubtitle: {
        fontSize: 14,
        color: COLORS.textLight,
        marginBottom: SPACING.lg,
    },
    starsRow: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    starButton: {
        padding: SPACING.xs,
    },
    footer: {
        padding: SPACING.lg,
        borderTopWidth: 1,
        borderTopColor: COLORS.border,
    },
});
