import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import InfoCard from '../../components/InfoCard';

export default function ICT({ route, navigation }) {
  const { name } = route.params;

  const [chapterList, setChapterList] = useState([
    { id: 1, name: 'ল্যাবরেটরির নিরাপদ ব্যবহার (MAT)' },
    { id: 2, name: 'গুণগত রসায়ন (আংশিক)' },
    { id: 3, name: 'মৌলের পর্যায়বৃত্ত ধর্ম ও রাসায়নিক বন্ধন (আংশিক)' },
    { id: 4, name: 'রাসায়নিক পরিবর্তন (আংশিক)' },
    { id: 5, name: 'কর্মমূখী রসায়ন (আংশিক)' },
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
