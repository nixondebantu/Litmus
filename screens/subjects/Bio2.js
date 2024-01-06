import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import InfoCard from '../../components/InfoCard';

export default function ICT({ route, navigation }) {
  const { name } = route.params;

  const [chapterList, setChapterList] = useState([
    { id: 1, name: 'প্রাণীর বিভিন্নতা ও শ্রেণিবিন্যাস' },
    { id: 2, name: 'প্রাণীর পরিচিতি' },
    { id: 3, name: 'পরিপাক ও শোষণ' },
    { id: 4, name: 'রক্ত সঞ্চালন' },
    { id: 5, name: 'শ্বাসক্রিয়া ও শ্বসন' },
    { id: 6, name: 'চলন ও অঙ্গচালনা' },
    { id: 7, name: 'বর্জ্য ও নিষ্কাশন (MAT)' },
    { id: 8, name: 'সমন্বয় ও নিয়ন্ত্রণ (MAT)' },
    { id: 9, name: 'মানব জীবনের ধারাবাহিকতা (MAT)' },
    { id: 10, name: 'মানবদেহের প্রতিরক্ষা (MAT)' },
    { id: 11, name: 'জিনতত্ব ও বিবর্তন' },
    { id: 12, name: 'প্রাণীর আচরণ (MAT)' },
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
