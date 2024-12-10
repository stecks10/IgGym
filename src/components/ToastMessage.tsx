import {
  Toast,
  ToastDescription,
  ToastTitle,
  VStack,
} from '@gluestack-ui/themed';

type Props = {
  id: string;
  title: string;
  description?: string;
  action?: 'error' | 'success';
};

export function ToastMessage({ id, title, description, action }: Props) {
  return (
    <Toast
      nativeID={`toast-${id}`}
      action={action}
      bgColor={action === 'success' ? '$green500' : '$red500'}
      mt={'$10'}
    >
      <VStack space='xs' w={'$full'}>
        <ToastTitle color='$white' fontFamily='$heading'>
          {title}
        </ToastTitle>

        {description && (
          <ToastDescription color='$white' fontSize='$sm'>
            {description}
          </ToastDescription>
        )}
      </VStack>
    </Toast>
  );
}
