import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    TouchableOpacity
} from 'react-native';
import { OX4Button } from '../../components/OX4Button';
import { OX4Input } from '../../components/OX4Input';
import { COLORS, SPACING } from '../../theme/theme';

export const DriverLoginScreen = ({ navigation }: any) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={{ flex: 1 }}
            >
                <ScrollView contentContainerStyle={styles.scrollContent}>
                    <View style={styles.header}>
                        <Text style={styles.title}>Portal do Motorista</Text>
                        <Text style={styles.subtitle}>Entre para começar a faturar.</Text>
                    </View>

                    <View style={styles.form}>
                        <OX4Input
                            label="E-mail ou Telefone do Motorista"
                            placeholder="exemplo@email.com"
                            value={email}
                            onChangeText={setEmail}
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />
                        <OX4Input
                            label="Senha"
                            placeholder="••••••••"
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry
                        />

                        <TouchableOpacity style={styles.forgotPassword}>
                            <Text style={styles.forgotPasswordText}>Esqueceu a senha?</Text>
                        </TouchableOpacity>

                        <OX4Button
                            title="Entrar como Motorista"
                            onPress={() => navigation.navigate('DriverApp')}
                            style={styles.loginButton}
                        />
                    </View>

                    <View style={styles.footer}>
                        <Text style={styles.footerText}>Ainda não é um parceiro? </Text>
                        <TouchableOpacity onPress={() => {/* Navegar para docs motorista */ }}>
                            <Text style={styles.registerText}>Saiba mais</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
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
        flexGrow: 1,
    },
    header: {
        marginTop: 40,
        marginBottom: 40,
    },
    title: {
        fontSize: 28,
        fontWeight: '800',
        color: COLORS.primary,
        marginBottom: SPACING.xs,
    },
    subtitle: {
        fontSize: 16,
        color: COLORS.textLight,
    },
    form: {
        flex: 1,
    },
    forgotPassword: {
        alignSelf: 'flex-end',
        marginBottom: SPACING.lg,
    },
    forgotPasswordText: {
        color: COLORS.primary,
        fontWeight: '600',
    },
    loginButton: {
        marginTop: SPACING.md,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingVertical: SPACING.xl,
    },
    footerText: {
        color: COLORS.textLight,
    },
    registerText: {
        color: COLORS.primary,
        fontWeight: '700',
    },
});
