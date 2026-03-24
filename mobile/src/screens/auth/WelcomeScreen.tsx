import React from 'react';
import { View, Text, StyleSheet, Image, SafeAreaView, StatusBar } from 'react-native';
import { OX4Button } from '../../components/OX4Button';
import { COLORS, SPACING } from '../../theme/theme';

export const WelcomeScreen = ({ navigation }: any) => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="light-content" backgroundColor={COLORS.primary} />

            <View style={styles.logoContainer}>
                {/* Placeholder for OX4 Logo */}
                <View style={styles.logoCircle}>
                    <Text style={styles.logoText}>OX4</Text>
                </View>
                <Text style={styles.appName}>Transporte</Text>
                <Text style={styles.tagline}>Sua moto, seu destino, sua agilidade.</Text>
            </View>

            <View style={styles.buttonContainer}>
                <OX4Button
                    title="Sou Passageiro"
                    onPress={() => navigation.navigate('PassengerAuth')}
                    style={styles.button}
                />
                <OX4Button
                    title="Sou Motorista"
                    onPress={() => navigation.navigate('DriverAuth')}
                    variant="secondary"
                    style={styles.button}
                />
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.primary,
        justifyContent: 'space-between',
    },
    logoContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    logoCircle: {
        width: 120,
        height: 120,
        borderRadius: 60,
        backgroundColor: COLORS.secondary,
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: SPACING.md,
    },
    logoText: {
        fontSize: 40,
        fontWeight: '900',
        color: COLORS.primary,
    },
    appName: {
        fontSize: 32,
        fontWeight: '800',
        color: COLORS.secondary,
        letterSpacing: 2,
    },
    tagline: {
        fontSize: 16,
        color: '#B0C4DE',
        marginTop: SPACING.sm,
    },
    buttonContainer: {
        padding: SPACING.xl,
        backgroundColor: COLORS.secondary,
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
    },
    button: {
        marginVertical: SPACING.sm,
    },
});
