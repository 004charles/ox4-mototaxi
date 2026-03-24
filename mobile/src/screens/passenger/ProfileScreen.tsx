import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TouchableOpacity,
    ScrollView,
    Switch
} from 'react-forms';
import {
    User,
    Bell,
    CreditCard,
    Shield,
    LogOut,
    ChevronRight,
    Settings
} from 'lucide-react-native';
import { COLORS, SPACING, BORDER_RADIUS, SHADOW } from '../../theme/theme';

export const ProfileScreen = ({ navigation }: any) => {
    const ProfileItem = ({ icon: Icon, title, value, onPress, isLogout }: any) => (
        <TouchableOpacity
            style={[styles.item, isLogout && styles.logoutItem]}
            onPress={onPress}
        >
            <View style={styles.itemLeft}>
                <View style={[styles.iconContainer, isLogout && styles.logoutIconContainer]}>
                    <Icon size={20} color={isLogout ? COLORS.error : COLORS.primary} />
                </View>
                <Text style={[styles.itemTitle, isLogout && styles.logoutText]}>{title}</Text>
            </View>
            <View style={styles.itemRight}>
                {value && <Text style={styles.itemValue}>{value}</Text>}
                {!isLogout && <ChevronRight size={18} color={COLORS.border} />}
            </View>
        </TouchableOpacity>
    );

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                <View style={styles.header}>
                    <View style={styles.avatarContainer}>
                        <Text style={styles.avatarText}>JS</Text>
                    </View>
                    <Text style={styles.userName}>João Silva</Text>
                    <Text style={styles.userEmail}>joao.silva@email.com</Text>
                    <TouchableOpacity style={styles.editButton}>
                        <Text style={styles.editButtonText}>Editar Perfil</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Configurações</Text>
                    <ProfileItem icon={Bell} title="Notificações" value="Aturadas" />
                    <ProfileItem icon={CreditCard} title="Pagamentos" value="Dinheiro" />
                    <ProfileItem icon={Shield} title="Privacidade e Segurança" />
                    <ProfileItem icon={Settings} title="Preferências do App" />
                </View>

                <View style={styles.section}>
                    <Text style={styles.sectionTitle}>Conta</Text>
                    <ProfileItem
                        icon={LogOut}
                        title="Sair da Conta"
                        onPress={() => navigation.navigate('Welcome')}
                        isLogout
                    />
                </View>

                <Text style={styles.versionText}>V 1.0.0 (OX4 Transporte)</Text>
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
        backgroundColor: COLORS.secondary,
        alignItems: 'center',
        paddingVertical: SPACING.xl,
        borderBottomWidth: 1,
        borderBottomColor: COLORS.border,
    },
    avatarContainer: {
        width: 90,
        height: 90,
        borderRadius: 45,
        backgroundColor: COLORS.primary,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: SPACING.md,
        ...SHADOW.light,
    },
    avatarText: {
        fontSize: 32,
        fontWeight: '800',
        color: COLORS.secondary,
    },
    userName: {
        fontSize: 22,
        fontWeight: '800',
        color: COLORS.text,
    },
    userEmail: {
        fontSize: 14,
        color: COLORS.textLight,
        marginTop: 2,
    },
    editButton: {
        marginTop: SPACING.md,
        paddingHorizontal: SPACING.lg,
        paddingVertical: 8,
        borderRadius: BORDER_RADIUS.round,
        borderWidth: 1,
        borderColor: COLORS.primary,
    },
    editButtonText: {
        color: COLORS.primary,
        fontWeight: '700',
    },
    section: {
        backgroundColor: COLORS.secondary,
        marginTop: SPACING.md,
        paddingVertical: SPACING.sm,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: COLORS.border,
    },
    sectionTitle: {
        fontSize: 13,
        fontWeight: '700',
        color: COLORS.textLight,
        textTransform: 'uppercase',
        marginLeft: SPACING.lg,
        marginVertical: SPACING.sm,
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: SPACING.lg,
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconContainer: {
        width: 36,
        height: 36,
        borderRadius: 8,
        backgroundColor: COLORS.card,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: SPACING.md,
    },
    itemTitle: {
        fontSize: 16,
        color: COLORS.text,
        fontWeight: '500',
    },
    itemRight: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    itemValue: {
        fontSize: 14,
        color: COLORS.textLight,
        marginRight: 8,
    },
    logoutItem: {
        marginTop: SPACING.xs,
    },
    logoutIconContainer: {
        backgroundColor: '#FFF0F0',
    },
    logoutText: {
        color: COLORS.error,
    },
    versionText: {
        textAlign: 'center',
        color: COLORS.border,
        fontSize: 12,
        marginTop: SPACING.xl,
        marginBottom: SPACING.xl,
    },
});
