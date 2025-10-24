import {
  ButtonSpinner,
  Button as GlueStackButton,
  Text,
} from '@gluestack-ui/themed';

type ButtonVariant = 'default' | 'primary' | 'dark';

type Props = {
  title: string;
  variant?: ButtonVariant;
  isLoading?: boolean;
  onPress?: () => void;
  disabled?: boolean;
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
} as const;

export function Button({
  title,
  isLoading = false,
  variant = 'default' as ButtonVariant,
  onPress,
  disabled,
}: Props) {
  const styles = variantStyles[variant];

  return (
    <GlueStackButton
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
        <Text color={styles.textColor} fontFamily="$heading" fontSize={'$sm'}>
          {title}
        </Text>
      )}
    </GlueStackButton>
  );
}
