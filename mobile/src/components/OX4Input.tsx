import React from 'react';
import {
    View,
    TextInput,
    Text,
    StyleSheet,
    TextInputProps,
    ViewStyle
} from 'react-native';
import { COLORS, SPACING, BORDER_RADIUS } from '../theme/theme';

interface OX4InputProps extends TextInputProps {
    label?: string;
    error?: string;
    containerStyle?: ViewStyle;
}

export const OX4Input: React.FC<OX4InputProps> = ({
    label,
    error,
    containerStyle,
    ...props
}) => {
    return (
        <View style={[styles.container, containerStyle]}>
            {label && <Text style={styles.label}>{label}</Text>}
            <TextInput
                style={[
                    styles.input,
                    error ? styles.inputError : null,
                    props.multiline ? styles.multiline : null,
                ]}
                placeholderTextColor={COLORS.textLight}
                {...props}
            />
            {error && <Text style={styles.errorText}>{error}</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: SPACING.md,
        width: '100%',
    },
    label: {
        fontSize: 14,
        fontWeight: '600',
        color: COLORS.primary,
        marginBottom: SPACING.xs,
        marginLeft: 4,
    },
    input: {
        backgroundColor: COLORS.card,
        borderWidth: 1,
        borderColor: COLORS.border,
        borderRadius: BORDER_RADIUS.md,
        paddingHorizontal: SPACING.md,
        paddingVertical: 12,
        fontSize: 16,
        color: COLORS.text,
    },
    inputError: {
        borderColor: COLORS.error,
    },
    multiline: {
        height: 100,
        textAlignVertical: 'top',
    },
    errorText: {
        color: COLORS.error,
        fontSize: 12,
        marginTop: 4,
        marginLeft: 4,
    },
});
