import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import InfoCard from '../../components/InfoCard';
import TitleBar from '../../components/TitleBar';

export default function Bio1({ route, navigation }) {
  const { name } = route.params;
  
  const [chapterList, setChapterList] = useState([
    { id: 1, name: 'কোষ ও এর গঠন' },
    { id: 2, name: 'কোষ বিভাজন' },
    { id: 3, name: 'কোষ রসায়ন (MAT)' },
    { id: 4, name: 'অণুজীব' },
    { id: 5, name: 'শৈবাল ও ছত্রাক (MAT)' },
    { id: 6, name: 'ব্রায়োফাইটা ও টেরিডোফাইটা (MAT)' },
    { id: 7, name: 'নগ্নবীজী ও আবৃতবীজী উদ্ভিদ' },
    { id: 8, name: 'টিস্যু ও টিস্যুতন্ত্র' },
    { id: 9, name: 'উদ্ভিদ শারীরতত্ব' },
    { id: 10, name: 'উদ্ভিদ প্ৰজনন (MAT)' },
    { id: 11, name: 'জীবপ্রযুক্তি' },
    { id: 12, name: 'জীবের পরিবেশ, বিস্তার ও সংরক্ষণ (MAT)' },
  ]);

  const [averageProgress, setAverageProgress] = useState(0);
  
  useFocusEffect(
    React.useCallback(() => {
      const loadProgress = async () => {
        const updatedChapterList = await Promise.all(chapterList.map(async (chapter) => {
          const progress = await AsyncStorage.getItem(`@progress/${chapter.name}`);
          return { ...chapter, done: progress !== null ? Number(progress) : 0 };
        }));
        setChapterList(updatedChapterList);
      
        const totalProgress = updatedChapterList.reduce((total, chapter) => total + Number(chapter.done), 0);
        const avgProgress = (totalProgress / updatedChapterList.length).toFixed(2);
        setAverageProgress(avgProgress);
      
        try {
          await AsyncStorage.setItem(`@progress/${name}`, avgProgress.toString());
        } catch (error) {
          console.error('Error saving average progress:', error);
        }
      };      
      loadProgress();
    }, [])
  );

  return (
    <View style={{flex:1}}>
      <TitleBar done={averageProgress} />
      <ScrollView style={{}}>
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
