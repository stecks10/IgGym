import { Input as GluestackInput, InputField } from '@gluestack-ui/themed';
import { ComponentProps } from 'react';

type InputProps = ComponentProps<typeof InputField>;

export function Input({ ...props }: InputProps) {
  return (
    <GluestackInput
      bg='$gray700'
      h='$14'
      px='$4'
      borderRadius='$md'
      borderColor='$gray500'
      $focus={{
        borderWidth: '$1',
        borderColor: '$green500',
      }}
    >
      <InputField color='$white' placeholderTextColor='$gray300' {...props} />
    </GluestackInput>
  );
}
