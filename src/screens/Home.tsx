import { ExerciseCard } from '@components/ExerciseCard';
import { Group } from '@components/Group';
import { HomeHeader } from '@components/HomeHeader';
import { ToastMessage } from '@components/ToastMessage';
import { Heading, HStack, Text, useToast, VStack } from '@gluestack-ui/themed';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { AppNavigatorRoutesProps } from '@routes/app.routes';
import { AppError } from '@utils/AppError';
import { useCallback, useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { api } from '../service/api';

export function Home() {
  const toast = useToast();
  const [groups, setGroups] = useState<string[]>([]);

  const [groupSelected, setGroupSelected] = useState('Costas');
  const [exercises, setExercises] = useState([]);

  const navigation = useNavigation<AppNavigatorRoutesProps>();

  function handleOpenExerciseDetails() {
    navigation.navigate('exercise');
  }

  async function fetchGroups() {
    try {
      const response = await api.get('/groups');
      setGroups(response.data);
    } catch (error) {
      const isAppError = error instanceof AppError;
      const title = isAppError
        ? error.message
        : 'Não foi possível carregar os grupos musculares';
      console.log(error);

      toast.show({
        render: ({ id }) => (
          <ToastMessage id={id} title={title} action='error' />
        ),
      });
    }
  }

  async function fetchExercisesByGroup() {
    try {
      const response = await api.get(`/exercises/bygroup/${groupSelected}`);
      setExercises(response.data);
    } catch (error) {
      const isAppError = error instanceof AppError;
      const title = isAppError
        ? error.message
        : 'Não foi possível carregar os exercícios';
      console.log(error);

      toast.show({
        render: ({ id }) => (
          <ToastMessage id={id} title={title} action='error' />
        ),
      });
    }
  }

  useEffect(() => {
    fetchGroups();
  }, []);

  useFocusEffect(
    useCallback(() => {
      fetchExercisesByGroup();
    }, [groupSelected])
  );

  return (
    <VStack flex={1}>
      <HomeHeader />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Group
            name={item}
            isActive={groupSelected.toLowerCase() === item.toLowerCase()}
            onPress={() => setGroupSelected(item)}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 32 }}
        style={{ marginVertical: 40, maxHeight: 44, minHeight: 44 }}
      />

      <VStack px='$8' flex={1}>
        <HStack justifyContent='space-between' mb={'$5'} alignItems='center'>
          <Heading color='$gray200' fontSize={'$md'} fontFamily='$heading'>
            Exercícios
          </Heading>

          <Text color='$gray200' fontSize={'$sm'} fontFamily='$body'>
            {exercises.length}
          </Text>
        </HStack>

        <FlatList
          key={groupSelected}
          data={exercises}
          keyExtractor={(item) => item}
          renderItem={() => (
            <ExerciseCard onPress={handleOpenExerciseDetails} />
          )}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      </VStack>
    </VStack>
  );
}
