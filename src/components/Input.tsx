import {
  FormControl,
  FormControlError,
  FormControlErrorText,
  Input as GluestackInput,
  InputField,
} from '@gluestack-ui/themed';
import { ComponentProps } from 'react';

type Props = ComponentProps<typeof InputField> & {
  errorMessage?: string | null;
  isInvalid?: boolean;
  isReadOnly?: boolean;
};

export function Input({
  isReadOnly = false,
  errorMessage = null,
  isInvalid = false,
  ...props
}: Props) {
  const invalid = !!errorMessage || isInvalid;

  return (
    <FormControl isInvalid={invalid} mb='$4' w='$full'>
      <GluestackInput
        isInvalid={invalid}
        h='$14'
        borderWidth='$0'
        borderRadius='$md'
        $focus={{
          borderWidth: 1,
          borderColor: invalid ? '$red500' : '$green500',
        }}
        isReadOnly={isReadOnly}
        opacity={isReadOnly ? 0.5 : 1}
        $invalid={{
          borderColor: '$red500',
          borderWidth: 1,
        }}
      >
        <InputField
          px='$4'
          bg='$gray700'
          color='$white'
          fontFamily='$body'
          placeholderTextColor='$gray300'
          {...props}
        />
      </GluestackInput>

      <FormControlError>
        <FormControlErrorText color='$red500'>
          {errorMessage}
        </FormControlErrorText>
      </FormControlError>
    </FormControl>
  );
}
