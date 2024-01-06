import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import InfoCard from '../../components/InfoCard';

export default function Bng1({ route, navigation }) {
  const { name } = route.params;

  const [chapterList, setChapterList] = useState([
    { id: 1,name: 'অপরিচিতা' },
    { id: 2,name: 'বিলাসী' },
    { id: 3,name: 'আমার পথ' },
    { id: 4,name: 'মানব কল্যাণ' },
    { id: 5,name: 'মাসি পিসি' },
    { id: 6,name: 'বায়ান্নর দিনগুলো' },
    { id: 7,name: 'রেইনকোট' },
    { id: 8,name: 'সোনার তরী' },
    { id: 9,name: 'বিদ্ৰোহী' },
    { id: 10,name: 'প্রতিদান' },
    { id: 11,name: 'তাহারেই পড়ে মনে' },
    { id: 12,name: 'আঠারো বছর বয়স' },
    { id: 13,name: 'ফেব্রুয়ারি ১৯৬৯' },
    { id: 14,name: 'আমি কিংবদন্তির কথা বলছি' },
    { id: 15,name: 'লালসালু' },
    { id: 16,name: 'সিরাজউদ্দৌলা' },
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
