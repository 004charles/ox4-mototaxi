import React from 'react';
import { View, StyleSheet, ViewStyle } from 'react-native';
import { COLORS, SPACING, BORDER_RADIUS, SHADOW } from '../theme/theme';

interface OX4CardProps {
    children: React.ReactNode;
    style?: ViewStyle;
    variant?: 'elevated' | 'outlined' | 'flat';
}

export const OX4Card: React.FC<OX4CardProps> = ({
    children,
    style,
    variant = 'elevated'
}) => {
    return (
        <View style={[
            styles.base,
            variant === 'elevated' && styles.elevated,
            variant === 'outlined' && styles.outlined,
            variant === 'flat' && styles.flat,
            style
        ]}>
            {children}
        </View>
    );
};

const styles = StyleSheet.create({
    base: {
        padding: SPACING.md,
        borderRadius: BORDER_RADIUS.lg,
        backgroundColor: COLORS.secondary,
    },
    elevated: {
        ...SHADOW.light,
    },
    outlined: {
        borderWidth: 1,
        borderColor: COLORS.border,
    },
    flat: {
        backgroundColor: COLORS.card,
    },
});
