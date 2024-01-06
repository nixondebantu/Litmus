import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import InfoCard from '../../components/InfoCard';

export default function Phy2({ route, navigation }) {
  const { name } = route.params;

  const chapterList = [
    { id: 1, done: Math.floor(Math.random() * 101), name: 'তাপগতিবিদ্যা' },
    { id: 2, done: Math.floor(Math.random() * 101), name: 'স্থির তড়িৎ' },
    { id: 3, done: Math.floor(Math.random() * 101), name: 'চল তড়িৎ' },
    { id: 4, done: Math.floor(Math.random() * 101), name: 'ভৌত আলোক বিজ্ঞান' },
    { id: 5, done: Math.floor(Math.random() * 101), name: 'আধুনিক পদার্থবিজ্ঞানের সূচনা' },
    { id: 6, done: Math.floor(Math.random() * 101), name: 'পরমাণুর মডেল নিউক্লিয়ার পদার্থবিজ্ঞান' },
    { id: 7, done: Math.floor(Math.random() * 101), name: 'সেমিকন্ডাক্টর ও ইলেকট্রনিক্স' },
  ];
  
  return (
    <View>
      <ScrollView>
        <Text>{name}</Text>
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
