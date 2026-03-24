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

export const RegisterScreen = ({ navigation }: any) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
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
                        <Text style={styles.title}>Crie sua conta</Text>
                        <Text style={styles.subtitle}>Junte-se ao OX4 Transporte hoje.</Text>
                    </View>

                    <View style={styles.form}>
                        <OX4Input
                            label="Nome Completo"
                            placeholder="João Silva"
                            value={name}
                            onChangeText={setName}
                        />
                        <OX4Input
                            label="Telefone"
                            placeholder="(00) 00000-0000"
                            value={phone}
                            onChangeText={setPhone}
                            keyboardType="phone-pad"
                        />
                        <OX4Input
                            label="E-mail"
                            placeholder="exemplo@email.com"
                            value={email}
                            onChangeText={setEmail}
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />
                        <OX4Input
                            label="Senha"
                            placeholder="Crie uma senha forte"
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry
                        />

                        <OX4Button
                            title="Criar conta"
                            onPress={() => navigation.navigate('PassengerApp')}
                            style={styles.button}
                        />
                    </View>

                    <View style={styles.footer}>
                        <Text style={styles.footerText}>Já tem uma conta? </Text>
                        <TouchableOpacity onPress={() => navigation.navigate('PassengerAuth')}>
                            <Text style={styles.loginText}>Entre aqui</Text>
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
        marginTop: 20,
        marginBottom: 30,
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
    button: {
        marginTop: SPACING.lg,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'center',
        paddingVertical: SPACING.xl,
    },
    footerText: {
        color: COLORS.textLight,
    },
    loginText: {
        color: COLORS.primary,
        fontWeight: '700',
    },
});
