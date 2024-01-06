import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import InfoCard from '../../components/InfoCard';

export default function Bng2({ route, navigation }) {
  const { name } = route.params;

  const [chapterList, setChapterList] = useState([
    { id: 1, name: 'বাংলা উচ্চারণের নিয়ম' },
    { id: 2, name: 'বাংলা বানানের নিয়ম' },
    { id: 3, name: 'বাংলা ভাষার ব্যাকরণিক শব্দশ্রেণী' },
    { id: 4, name: 'বাংলা শব্দ গঠন- উপসর্গ ও সমাস' },
    { id: 5, name: 'বাক্যতত্ত্ব' },
    { id: 6, name: 'বাংলা ভাষার অপপ্রয়োগ ও শুদ্ধ প্রয়োগ' },
    { id: 7, name: 'পারিভাষিক শব্দ ও অনুবাদ' },
    { id: 8, name: 'দিনলিপি' },
    { id: 9, name: 'প্রতিবেদন' },
    { id: 10, name: 'বৈদুতিক চিঠি ও আবেদনপত্র' },
    { id: 11, name: 'সারাংশ ও সারমর্ম' },
    { id: 12, name: 'ভাবসম্প্রসারণ' },
    { id: 13, name: 'সংলাপ' },
    { id: 14, name: 'খুদে গল্প' },
    { id: 15, name: 'প্রবন্ধ রচনা' },
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
