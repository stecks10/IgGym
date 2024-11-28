import {
  ButtonSpinner,
  Button as GluestackButton,
  Text,
} from '@gluestack-ui/themed';
import { ComponentProps } from 'react';

type ButtonProps = ComponentProps<typeof GluestackButton> & {
  title: string;
  isLoading?: boolean;
};

export function Button({ title, isLoading = false, ...rest }: ButtonProps) {
  return (
    <GluestackButton
      w='$full'
      h='$14'
      bg='$green700'
      borderWidth='$0'
      borderRadius='$md'
      rounded='$sm'
      $active-bg='$green300'
      disabled={isLoading}
      {...rest}
    >
      {isLoading ? (
        <ButtonSpinner color='$white' />
      ) : (
        <Text color='$white' fontFamily='$heading' fontSize='$sm'>
          {title}
        </Text>
      )}
    </GluestackButton>
  );
}
