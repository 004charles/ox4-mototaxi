import React from 'react';
import {
    TouchableOpacity,
    Text,
    StyleSheet,
    ActivityIndicator,
    ViewStyle,
    TextStyle
} from 'react-native';
import { COLORS, SPACING, BORDER_RADIUS, SHADOW } from '../theme/theme';

interface OX4ButtonProps {
    title: string;
    onPress: () => void;
    variant?: 'primary' | 'secondary' | 'outline' | 'danger';
    size?: 'sm' | 'md' | 'lg';
    loading?: boolean;
    disabled?: boolean;
    style?: ViewStyle;
    textStyle?: TextStyle;
}

export const OX4Button: React.FC<OX4ButtonProps> = ({
    title,
    onPress,
    variant = 'primary',
    size = 'md',
    loading = false,
    disabled = false,
    style,
    textStyle,
}) => {
    const getVariantStyle = () => {
        switch (variant) {
            case 'secondary':
                return styles.secondary;
            case 'outline':
                return styles.outline;
            case 'danger':
                return styles.danger;
            default:
                return styles.primary;
        }
    };

    const getTextStyle = () => {
        switch (variant) {
            case 'outline':
                return styles.outlineText;
            default:
                return styles.primaryText;
        }
    };

    const getSizeStyle = () => {
        switch (size) {
            case 'sm':
                return styles.sm;
            case 'lg':
                return styles.lg;
            default:
                return styles.md;
        }
    };

    return (
        <TouchableOpacity
            onPress={onPress}
            disabled={disabled || loading}
            style={[
                styles.base,
                getVariantStyle(),
                getSizeStyle(),
                (disabled || loading) && styles.disabled,
                style,
            ]}
        >
            {loading ? (
                <ActivityIndicator color={variant === 'outline' ? COLORS.primary : COLORS.secondary} />
            ) : (
                <Text style={[styles.baseText, getTextStyle(), textStyle]}>
                    {title}
                </Text>
            )}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    base: {
        borderRadius: BORDER_RADIUS.lg,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        ...SHADOW.light,
    },
    baseText: {
        fontWeight: '700',
        textAlign: 'center',
    },
    primary: {
        backgroundColor: COLORS.primary,
    },
    secondary: {
        backgroundColor: COLORS.secondary,
        borderWidth: 1,
        borderColor: COLORS.primary,
    },
    outline: {
        backgroundColor: 'transparent',
        borderWidth: 2,
        borderColor: COLORS.primary,
    },
    danger: {
        backgroundColor: COLORS.error,
    },
    primaryText: {
        color: COLORS.secondary,
    },
    outlineText: {
        color: COLORS.primary,
    },
    sm: {
        paddingVertical: SPACING.sm,
        paddingHorizontal: SPACING.md,
    },
    md: {
        paddingVertical: SPACING.md,
        paddingHorizontal: SPACING.lg,
    },
    lg: {
        paddingVertical: 18,
        paddingHorizontal: SPACING.xl,
    },
    disabled: {
        opacity: 0.6,
    },
});
