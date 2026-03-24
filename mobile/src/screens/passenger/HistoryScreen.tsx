import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    FlatList,
    TouchableOpacity
} from 'react-native';
import { MapPin, Calendar, ChevronRight } from 'lucide-react-native';
import { COLORS, SPACING, BORDER_RADIUS, SHADOW } from '../../theme/theme';

const MOCK_HISTORY = [
    {
        id: '1',
        date: 'Hoje, 14:30',
        origin: 'Rua Principal, 123',
        destination: 'Aeroporto Internacional',
        price: 'Kz 3.500',
        status: 'Finalizada',
    },
    {
        id: '2',
        date: 'Ontem, 09:15',
        origin: 'Pizzaria Napolitana',
        destination: 'Minha Casa',
        price: 'Kz 1.200',
        status: 'Finalizada',
    },
    {
        id: '3',
        date: '25 Fev, 18:00',
        origin: 'Shopping Luanda',
        destination: 'Rua das Flores, 45',
        price: 'Kz 2.000',
        status: 'Cancelada',
    },
];

export const HistoryScreen = () => {
    const renderItem = ({ item }: { item: typeof MOCK_HISTORY[0] }) => (
        <TouchableOpacity style={styles.historyCard}>
            <View style={styles.cardHeader}>
                <View style={styles.dateRow}>
                    <Calendar size={14} color={COLORS.textLight} />
                    <Text style={styles.dateText}>{item.date}</Text>
                </View>
                <Text style={[
                    styles.statusText,
                    item.status === 'Cancelada' ? { color: COLORS.error } : { color: COLORS.success }
                ]}>
                    {item.status}
                </Text>
            </View>

            <View style={styles.addressSection}>
                <View style={styles.addressRow}>
                    <View style={[styles.dot, { backgroundColor: COLORS.border }]} />
                    <Text style={styles.addressText} numberOfLines={1}>{item.origin}</Text>
                </View>
                <View style={styles.line} />
                <View style={styles.addressRow}>
                    <View style={[styles.dot, { backgroundColor: COLORS.primary }]} />
                    <Text style={styles.addressText} numberOfLines={1}>{item.destination}</Text>
                </View>
            </View>

            <View style={styles.cardFooter}>
                <Text style={styles.priceText}>{item.price}</Text>
                <ChevronRight size={20} color={COLORS.border} />
            </View>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <title style={styles.headerTitle}>Minhas Corridas</title>
            </View>

            <FlatList
                data={MOCK_HISTORY}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                contentContainerStyle={styles.listContent}
                ListEmptyComponent={
                    <View style={styles.emptyContainer}>
                        <Text style={styles.emptyText}>Você ainda não realizou nenhuma corrida.</Text>
                    </View>
                }
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.card,
    },
    header: {
        backgroundColor: COLORS.secondary,
        padding: SPACING.lg,
        alignItems: 'center',
        borderBottomWidth: 1,
        borderBottomColor: COLORS.border,
    },
    headerTitle: {
        fontSize: 20,
        fontWeight: '800',
        color: COLORS.primary,
    },
    listContent: {
        padding: SPACING.md,
    },
    historyCard: {
        backgroundColor: COLORS.secondary,
        borderRadius: BORDER_RADIUS.lg,
        padding: SPACING.md,
        marginBottom: SPACING.md,
        ...SHADOW.light,
    },
    cardHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: SPACING.sm,
    },
    dateRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    dateText: {
        fontSize: 12,
        color: COLORS.textLight,
        marginLeft: 4,
    },
    statusText: {
        fontSize: 12,
        fontWeight: '700',
    },
    addressSection: {
        paddingVertical: SPACING.sm,
    },
    addressRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    dot: {
        width: 6,
        height: 6,
        borderRadius: 3,
        marginRight: 10,
    },
    addressText: {
        fontSize: 14,
        color: COLORS.text,
        flex: 1,
    },
    line: {
        width: 1,
        height: 10,
        backgroundColor: COLORS.border,
        marginLeft: 2.5,
        marginVertical: 2,
    },
    cardFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: SPACING.sm,
        paddingTop: SPACING.sm,
        borderTopWidth: 1,
        borderTopColor: COLORS.card,
    },
    priceText: {
        fontSize: 16,
        fontWeight: '800',
        color: COLORS.primary,
    },
    emptyContainer: {
        paddingTop: 100,
        alignItems: 'center',
    },
    emptyText: {
        color: COLORS.textLight,
    },
});
