import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import InfoCard from '../../components/InfoCard';

export default function ICT({ route, navigation }) {
  const { name } = route.params;

  const [chapterList, setChapterList] = useState([
    { id: 1, name: 'জটিল সংখ্যা' },
    { id: 2, name: 'বহুপদি ও বহুপদি সমীকরণ' },
    { id: 3, name: 'কণিক' },
    { id: 4, name: 'বিপরীত ত্রিকোণমিতিক ফাংশন ও সমীকরণ' },
    { id: 5, name: 'স্থিতিবিদ্যা' },
    { id: 6, name: 'সমতলে বস্তুকণার গতি' },
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
