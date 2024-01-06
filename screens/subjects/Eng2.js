import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import InfoCard from '../../components/InfoCard';

export default function ICT({ route, navigation }) {
  const { name } = route.params;

  const [chapterList, setChapterList] = useState([
    { id: 1, name: 'Prepositions' },
    { id: 2, name: 'Completing Sentence with Phrase' },
    { id: 3, name: 'Completing Sentence' },
    { id: 4, name: 'Right Form of Verb' },
    { id: 5, name: 'Narration' },
    { id: 6, name: 'Modifier' },
    { id: 7, name: 'Connectors' },
    { id: 8, name: 'Synonym-Antonym' },
    { id: 9, name: 'Punctuation & Capitalization' },
    { id: 10, name: 'Application' },
    { id: 11, name: 'Paragraph' },
  ]);

  useFocusEffect(
    React.useCallback(() => {
      const loadProgress = async () => {
        const updatedChapterList = await Promise.all(chapterList.map(async (chapter) => {
          const progress = await AsyncStorage.getItem(`@progress/${chapter.name}`);
          return { ...chapter, done: progress !== null ? Number(progress) : 0 };
        }));
        setChapterList(updatedChapterList);
      };
      loadProgress();
    }, [])
  );

  return (
    <View>
      <ScrollView>
        {chapterList.map((chapter) => (
          <InfoCard key={chapter.id} 
            done={chapter.done} 
            title={chapter.name}
            onPress={()=>navigation.navigate(chapter.name,{name:chapter.name})} />
        ))}
      </ScrollView>
    </View>
  );
}
