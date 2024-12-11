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
  isDisabled?: boolean;
};

export function Input({
  isReadOnly = false,
  errorMessage = null,
  isInvalid = false,
  isDisabled = false,
  ...props
}: Props) {
  const invalid = !!errorMessage || isInvalid;

  return (
    <FormControl isInvalid={invalid} mb='$4' w='$full' isDisabled={isDisabled}>
      <GluestackInput
        isInvalid={invalid}
        h='$14'
        borderWidth='$0'
        borderRadius='$md'
        isReadOnly={isReadOnly || isDisabled}
        isDisabled
        opacity={isReadOnly || isDisabled ? 0.5 : 1}
        $focus={
          !isDisabled
            ? {
                borderWidth: 1,
                borderColor: invalid ? '$red500' : '$green500',
              }
            : undefined
        }
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
          editable={!isDisabled}
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
