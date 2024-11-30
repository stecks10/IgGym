import { HistoryCard } from '@components/HistoryCard';
import { ScreenHeader } from '@components/ScreenHeader';
import { Heading, SectionList, Text, VStack } from '@gluestack-ui/themed';
import { useState } from 'react';

export function History() {
  const [exercises, setExercises] = useState([
    {
      title: '22.07.24',
      data: ['Puxada frontal', 'Remada unilateral'],
    },
    {
      title: '23.07.24',
      data: ['Puxada frontal'],
    },
  ]);

  return (
    <VStack flex={1}>
      <ScreenHeader title='Histórico' />

      <SectionList
        sections={exercises}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => <HistoryCard />}
        renderSectionHeader={({ section }) => (
          <Heading color='$gray200' fontSize='$md' mt='$10' mb='$3'>
            {section.title}
          </Heading>
        )}
        contentContainerStyle={
          exercises.length === 0
            ? { flex: 1, justifyContent: 'center' }
            : undefined
        }
        ListEmptyComponent={() => (
          <Text color='$gray200' textAlign='center'>
            Não há exercícios registrados ainda. {'\n'}
            Vamos fazer exercícios hoje?
          </Text>
        )}
        showsVerticalScrollIndicator={false}
      />
    </VStack>
  );
}
