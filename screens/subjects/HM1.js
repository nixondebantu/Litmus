import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import InfoCard from '../../components/InfoCard';
import TitleBar from '../../components/TitleBar';

export default function ICT({ route, navigation }) {
  const { name } = route.params;

  const [chapterList, setChapterList] = useState([
    { id: 1, name: 'ম্যাট্রিক্স ও নির্ণায়ক' },
    { id: 2, name: 'সরলরেখা' },
    { id: 3, name: 'বৃত্ত' },
    { id: 4, name: 'সংযুক্ত কোণর ত্রিকোণমিতিক অনুপাত' },
    { id: 5, name: 'অন্তরীকরণ' },
    { id: 6, name: 'যোগজীকরণ' },
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
