import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import InfoCard from '../../components/InfoCard';

export default function ICT({ route, navigation }) {
  const { name } = route.params;

  const [chapterList, setChapterList] = useState([
    { id: 1, name: 'তাপগতিবিদ্যা' },
    { id: 2, name: 'স্থির তড়িৎ' },
    { id: 3, name: 'চল তড়িৎ' },
    { id: 4, name: 'ভৌত আলোক বিজ্ঞান' },
    { id: 5, name: 'আধুনিক পদার্থবিজ্ঞানের সূচনা' },
    { id: 6, name: 'পরমাণুর মডেল নিউক্লিয়ার পদার্থবিজ্ঞান' },
    { id: 7, name: 'সেমিকন্ডাক্টর ও ইলেকট্রনিক্স' },
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
