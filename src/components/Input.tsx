import {
  FormControl,
  InputField,
  Input as GlueStackInput,
  FormControlError,
  FormControlErrorText,
} from '@gluestack-ui/themed';
import { ComponentProps } from 'react';

type Props = ComponentProps<typeof InputField> & {
  isReadOnly?: boolean;
  errorMessage?: string | null;
  isInvalid?: boolean;
};

export function Input({
  isReadOnly = false,
  errorMessage = null,
  isInvalid = false,
  ...rest
}: Props) {
  const invalid = isInvalid || !!errorMessage;

  return (
    <FormControl isInvalid={isInvalid} w="$full" mb="$4">
      <GlueStackInput
        isInvalid={invalid}
        h="$12"
        borderWidth="$0"
        borderRadius="$md"
        $focus={{
          borderWidth: 1,
          borderColor: invalid ? '$red500' : '$green500',
        }}
        isReadOnly={isReadOnly}
        opacity={isReadOnly ? 0.6 : 1}
        $invalid={{
          borderWidth: 1,
          borderColor: '$red500',
        }}
      >
        <InputField
          bg="$gray700"
          color="$gray200"
          p="$4"
          fontFamily="$body"
          placeholderTextColor="$gray400"
          {...rest}
        />
      </GlueStackInput>

      <FormControlError>
        <FormControlErrorText color="$red500">
          {errorMessage}
        </FormControlErrorText>
      </FormControlError>
    </FormControl>
  );
}
