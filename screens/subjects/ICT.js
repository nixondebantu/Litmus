import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import InfoCard from '../../components/InfoCard';

export default function ICT({ route, navigation }) {
  const { name } = route.params;

  const [chapterList, setChapterList] = useState([
    { id: 1, name: 'তথ্য ও যোগাযোগ প্রযুক্তি বিশ্ব ও বাংলাদেশ (আংশিক)' },
    { id: 2, name: 'কমিউনিকেশন সিস্টেম ও কম্পিউটারিং' },
    { id: 3, name: 'সংখ্যা পদ্ধতি ও ডিজিটাল ডিভাইস' },
    { id: 4, name: 'ওয়েব ডিজাইন পরিচিতি ও এইচটিএমএল' },
    { id: 5, name: 'প্রোগ্রামিং ভাষা' },
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
