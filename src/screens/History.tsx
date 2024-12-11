import { HistoryCard } from '@components/HistoryCard';
import { ScreenHeader } from '@components/ScreenHeader';
import { ToastMessage } from '@components/ToastMessage';
import { HistoryByDayDTO } from '@dtos/HistoryByDayDTO';
import { Heading, Text, useToast, VStack } from '@gluestack-ui/themed';
import { useFocusEffect } from '@react-navigation/native';
import { AppError } from '@utils/AppError';
import { useCallback, useState } from 'react';
import { SectionList } from 'react-native';
import { api } from '../service/api';

export function History() {
  const [isLoading, setIsLoading] = useState(true);
  const [exercises, setExercises] = useState<HistoryByDayDTO[]>([]);
  const toast = useToast();

  async function fetchHistory() {
    setIsLoading(true);
    const response = await api.get('/history');
    setExercises(response.data);
    try {
    } catch (error) {
      const isAppError = error instanceof AppError;
      const title = isAppError
        ? error.message
        : 'Não foi possível carregar o histórico de exercícios';

      toast.show({
        render: ({ id }) => (
          <ToastMessage id={id} title={title} action='error' />
        ),
      });
    } finally {
      setIsLoading(false);
    }
  }

  useFocusEffect(
    useCallback(() => {
      fetchHistory();
    }, [])
  );

  return (
    <VStack flex={1}>
      <ScreenHeader title='Histórico de Exercícios' />

      <SectionList
        sections={exercises}
        keyExtractor={(item) => item.id}
        renderItem={() => <HistoryCard />}
        renderSectionHeader={({ section }) => (
          <Heading color='$gray200' fontSize='$md' mt='$10' mb='$3'>
            {section.title}
          </Heading>
        )}
        style={{ paddingHorizontal: 32 }}
        contentContainerStyle={
          exercises.length === 0 && { flex: 1, justifyContent: 'center' }
        }
        ListEmptyComponent={() => (
          <Text color='$gray200' textAlign='center'>
            Não há exercícios registrados ainda. {'\n'}
            Vamos fazer execícios hoje?
          </Text>
        )}
        showsVerticalScrollIndicator={false}
      />
    </VStack>
  );
}
