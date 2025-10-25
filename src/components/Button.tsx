import {
  ButtonSpinner,
  Button as GlueStackButton,
  Text,
} from '@gluestack-ui/themed';
import { ComponentProps } from 'react';

type ButtonVariant = 'default' | 'primary' | 'dark';

type Props = ComponentProps<typeof GlueStackButton> & {
  title: string;
  variantCustomProp?: ButtonVariant;
  isLoading?: boolean;
};

type VariantStyle = {
  bg: string;
  activeBg: string;
  textColor: string;
};

const variantStyles: Record<ButtonVariant, VariantStyle> = {
  default: {
    bg: '$gray500',
    activeBg: '$gray400',
    textColor: '$gray200',
  },
  primary: {
    bg: '$blueLight',
    activeBg: '$blue600',
    textColor: '$gray700',
  },
  dark: {
    bg: '$gray100',
    activeBg: '$gray200',
    textColor: '$gray700',
  },
};

export function Button({
  title,
  isLoading = false,
  variantCustomProp = 'default',
  onPress,
  disabled,
  ...rest
}: Props) {
  const styles = variantStyles[variantCustomProp];

  return (
    <GlueStackButton
      {...rest}
      w="$full"
      h="$12"
      px="$4"
      borderWidth={'$0'}
      borderColor={'transparent'}
      bg={styles.bg}
      rounded="$sm"
      $active-bg={styles.activeBg}
      disabled={isLoading || disabled}
      onPress={onPress}
    >
      {isLoading ? (
        <ButtonSpinner />
      ) : (
        <Text
          color={styles.textColor}
          fontFamily="$heading"
          fontSize={'$sm'}
        >
          {title}
        </Text>
      )}
    </GlueStackButton>
  );
}
