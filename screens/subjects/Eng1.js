import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import InfoCard from '../../components/InfoCard';
import TitleBar from '../../components/TitleBar';

export default function ICT({ route, navigation }) {
  const { name } = route.params;

  const [chapterList, setChapterList] = useState([
    { id: 1, name: 'People or Institution Making History' },
    { id: 2, name: 'Education Life' },
    { id: 3, name: 'Dreams' },
    { id: 4, name: 'Youthful Achievers' },
    { id: 5, name: 'Relationships' },
    { id: 6, name: 'Adolescence' },
    { id: 7, name: 'Lifestyle' },
    { id: 8, name: 'Human Rights' },
    { id: 9, name: 'Tour\'s and Travels' },
    { id: 10, name: 'Flow chart' },
    { id: 11, name: 'Summary' },
    { id: 12, name: 'Fill in the blanks with clues' },
    { id: 13, name: 'Fill in the blanks without clues' },
    { id: 14, name: 'Rearrange' },
    { id: 15, name: 'Graph and Chart' },
    { id: 16, name: 'Story Writing' },
    { id: 17, name: 'Letter' },
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

