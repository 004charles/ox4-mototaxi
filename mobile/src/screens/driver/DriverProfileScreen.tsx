import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    ScrollView,
    TouchableOpacity,
    Dimensions
} from 'react-native';
import {
    User,
    Truck,
    CheckCircle,
    DollarSign,
    BarChart3,
    ChevronRight,
    LogOut
} from 'lucide-react-native';
import { OX4Card } from '../../components/OX4Card';
import { COLORS, SPACING, BORDER_RADIUS, SHADOW } from '../../theme/theme';

const { width } = Dimensions.get('window');

export const DriverProfileScreen = ({ navigation }: any) => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.header}>
                    <View style={styles.profileHeader}>
                        <View style={styles.avatarPlaceholder}>
                            <Text style={{ fontSize: 36 }}>👨🏽‍✈️</Text>
                        </View>
                        <View style={styles.headerInfo}>
                            <Text style={styles.driverName}>Carlos Oliveira</Text>
                            <View style={styles.statusBadge}>
                                <CheckCircle size={14} color={COLORS.success} />
                                <Text style={styles.statusText}>Cadastro Aprovado</Text>
                            </View>
                        </View>
                    </View>

                    <View style={styles.earningsCard}>
                        <Text style={styles.earningsTitle}>Ganhos da Semana</Text>
                        <Text style={styles.earningsValue}>Kz 45.200</Text>
                        <View style={styles.statsRow}>
                            <View style={styles.stat}>
                                <Text style={styles.statLabel}>Viagens</Text>
                                <Text style={styles.statVal}>64</Text>
                            </View>
                            <View style={styles.verticalDivider} />
                            <View style={styles.stat}>
                                <Text style={styles.statLabel}>Avaliação</Text>
                                <Text style={styles.statVal}>4.9 ★</Text>
                            </View>
                        </View>
                    </View>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Veículo Ativo</Text>
                    <OX4Card variant="flat" style={styles.vehicleCard}>
                        <Truck color={COLORS.primary} size={24} />
                        <View style={styles.vehicleDetails}>
                            <Text style={styles.vehicleModel}>Yamaha Fazer 250 BlueFlex</Text>
                            <Text style={styles.vehiclePlate}>LD-92-31-OX • Azul</Text>
                        </View>
                    </OX4Card>
                </View>

                <View style={styles.menuSection}>
                    <TouchableOpacity style={styles.menuItem}>
                        <View style={styles.menuItemLeft}>
                            <BarChart3 size={20} color={COLORS.textLight} />
                            <Text style={styles.menuItemText}>Histórico de Ganhos</Text>
                        </View>
                        <ChevronRight size={20} color={COLORS.border} />
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.menuItem}>
                        <View style={styles.menuItemLeft}>
                            <User size={20} color={COLORS.textLight} />
                            <Text style={styles.menuItemText}>Dados Bancários</Text>
                        </View>
                        <ChevronRight size={20} color={COLORS.border} />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.menuItem, { borderBottomWidth: 0 }]}
                        onPress={() => navigation.navigate('Welcome')}
                    >
                        <View style={styles.menuItemLeft}>
                            <LogOut size={20} color={COLORS.error} />
                            <Text style={[styles.menuItemText, { color: COLORS.error }]}>Sair do Portal</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <Text style={styles.footerText}>OX4 Transporte Parceiro v1.0</Text>
            </ScrollView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.card,
    },
    header: {
        backgroundColor: COLORS.primary,
        padding: SPACING.lg,
        paddingBottom: 40,
        borderBottomLeftRadius: 32,
        borderBottomRightRadius: 32,
    },
    profileHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: SPACING.xl,
        marginTop: 10,
    },
    avatarPlaceholder: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: COLORS.secondary,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 3,
        borderColor: 'rgba(255,255,255,0.3)',
    },
    headerInfo: {
        marginLeft: SPACING.md,
    },
    driverName: {
        fontSize: 22,
        fontWeight: '800',
        color: COLORS.secondary,
        marginBottom: 4,
    },
    statusBadge: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        paddingHorizontal: 12,
        paddingVertical: 4,
        borderRadius: 20,
    },
    statusText: {
        color: COLORS.secondary,
        fontSize: 12,
        fontWeight: '700',
        marginLeft: 6,
    },
    earningsCard: {
        backgroundColor: COLORS.secondary,
        borderRadius: BORDER_RADIUS.xl,
        padding: SPACING.lg,
        ...SHADOW.light,
    },
    earningsTitle: {
        fontSize: 14,
        color: COLORS.textLight,
        textAlign: 'center',
    },
    earningsValue: {
        fontSize: 32,
        fontWeight: '900',
        color: COLORS.primary,
        textAlign: 'center',
        marginVertical: 4,
    },
    statsRow: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: SPACING.md,
        paddingTop: SPACING.md,
        borderTopWidth: 1,
        borderTopColor: COLORS.border,
    },
    stat: {
        alignItems: 'center',
    },
    statLabel: {
        fontSize: 12,
        color: COLORS.textLight,
    },
    statVal: {
        fontSize: 16,
        fontWeight: '700',
        color: COLORS.text,
    },
    verticalDivider: {
        width: 1,
        height: '100%',
        backgroundColor: COLORS.border,
    },
    section: {
        padding: SPACING.lg,
        marginTop: 10,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: '800',
        color: COLORS.text,
        marginBottom: SPACING.md,
    },
    vehicleCard: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: SPACING.md,
    },
    vehicleDetails: {
        marginLeft: SPACING.md,
    },
    vehicleModel: {
        fontWeight: '700',
        color: COLORS.text,
    },
    vehiclePlate: {
        fontSize: 13,
        color: COLORS.textLight,
    },
    menuSection: {
        backgroundColor: COLORS.secondary,
        marginHorizontal: SPACING.lg,
        borderRadius: BORDER_RADIUS.lg,
        marginBottom: SPACING.xl,
        ...SHADOW.light,
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: SPACING.lg,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.card,
    },
    menuItemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    menuItemText: {
        marginLeft: SPACING.md,
        fontSize: 15,
        fontWeight: '600',
        color: COLORS.text,
    },
    footerText: {
        textAlign: 'center',
        fontSize: 12,
        color: COLORS.border,
        marginBottom: SPACING.xl,
    }
});
