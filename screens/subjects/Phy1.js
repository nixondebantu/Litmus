import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import InfoCard from '../../components/InfoCard';

export default function ICT({ route, navigation }) {
  const { name } = route.params;

  const [chapterList, setChapterList] = useState([
    { id: 1, name: 'ভৌত জগৎ ও পরিমাপ (স্ফেরোমিটার শুধু)' },
    { id: 2, name: 'ভেক্টর' },
    { id: 3, name: 'নিউটনিয়ান বলবিদ্যা' },
    { id: 4, name: 'কাজ ক্ষমতা ও শক্তি' },
    { id: 5, name: 'মহাকর্ষ ও অভিকর্ষ' },
    { id: 6, name: 'পদার্থের গাঠনিক ধর্ম( আংশিক )' },
    { id: 7, name: 'পর্যায়বৃত্ত গতি' },
    { id: 8, name: 'আদর্শ গ্যাস ও গ্যাসের গতিতত্ব' },
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
