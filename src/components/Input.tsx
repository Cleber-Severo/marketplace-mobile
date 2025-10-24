import {
  FormControl,
  InputField,
  Input as GlueStackInput,
  FormControlError,
  FormControlErrorText,
} from '@gluestack-ui/themed';
import { ComponentProps, useState } from 'react';

import { Eye, EyeSlash } from 'phosphor-react-native';
import { StyleProp, TouchableOpacity, ViewStyle } from 'react-native';

type Props = ComponentProps<typeof InputField> & {
  isReadOnly?: boolean;
  errorMessage?: string | null;
  isInvalid?: boolean;
};

const visibilityStyles = {
  position: 'absolute',
  right: 10,
  top: '50%',
  transform: [{ translateY: -10 }],
} as StyleProp<ViewStyle>;

export function Input({
  isReadOnly = false,
  errorMessage = null,
  isInvalid = false,
  type,
  ...rest
}: Props) {
  const [typeControll, setTypeControl] = useState(type);

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
        position="relative"
      >
        <InputField
          bg="$gray700"
          color="$gray200"
          p="$4"
          fontFamily="$body"
          placeholderTextColor="$gray400"
          type={typeControll}
          {...rest}
        />
        {type === 'password' && (
          <TouchableOpacity
            onPress={() => {
              setTypeControl(prev =>
                prev === 'password' ? 'text' : 'password'
              );
            }}
            style={visibilityStyles}
          >
            {typeControll === 'password' ? (
              <Eye size={20} color="#7C7C8A" />
            ) : (
              <EyeSlash size={20} color="#7C7C8A" />
            )}
          </TouchableOpacity>
        )}
      </GlueStackInput>

      <FormControlError>
        <FormControlErrorText color="$red500">
          {errorMessage}
        </FormControlErrorText>
      </FormControlError>
    </FormControl>
  );
}
