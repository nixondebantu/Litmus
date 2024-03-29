import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import HomeTitleBar from '../components/HomeTitleBar';
import InfoCard from '../components/InfoCard';
import FirstTimer from './FirstTimer';

export default function HomeScreen( {navigation} ) {
  const [aboutPage,setAboutPage] = useState(false);
  const [username, setUsername] = useState('');
  const [avatar, setAvatar] = useState(0);
    const [subList,setSubList] = useState([
        {   id:1, name:'বাংলা ১ম পত্র'    },
        {   id:2, name:'বাংলা ২য় পত্র'    },
        {   id:3, name:'English 1st Paper'   },
        {   id:4, name:'English 2nd Paper'   },
        {   id:5, name:'পদার্থবিজ্ঞান ১ম পত্র'   },
        {   id:6, name:'পদার্থবিজ্ঞান ২য় পত্র'   },
        {   id:7, name:'রসায়ন ১ম পত্র'  },
        {   id:8, name:'রসায়ন ২য় পত্র'  },
        {   id:9, name:'উচ্চতর গণিত ১ম পত্র'    },
        {   id:10, name:'উচ্চতর গণিত ২য় পত্র'  },
        {   id:11, name:'জীববিজ্ঞান ১ম পত্র'  },
        {   id:12, name:'জীববিজ্ঞান ২য় পত্র'  },
        {   id:13, name:'তথ্য ও যোগাযোগ প্রযুক্তি'    }        
    ]);

    const loadUserData = async () => {
      const storedUsername = await AsyncStorage.getItem('userName');
      setUsername(storedUsername||'User');
  
      const storedAvatar = await AsyncStorage.getItem('userAvatar');
      setAvatar(JSON.parse(storedAvatar)||1);
    };
  
    useEffect(() => {
      loadUserData();
    }, []);
    
    const handleInfoUpdate = async () => {
      await AsyncStorage.setItem('firstTimeUser', 'done');
      setAboutPage(false);
    };

    const [averageProgress, setAverageProgress] = useState(0);

  useFocusEffect(
    React.useCallback(() => {
      const loadProgress = async () => {
        const updatedSubList = await Promise.all(subList.map(async (chapter) => {
          const progress = await AsyncStorage.getItem(`@progress/${chapter.name}`);
          return { ...chapter, done: progress !== null ? Number(progress) : 0 };
        }));
        setSubList(updatedSubList);

        const totalProgress = updatedSubList.reduce((total, chapter) => total + Number(chapter.done), 0);
        const avgProgress = (totalProgress / updatedSubList.length).toFixed(2);
        setAverageProgress(avgProgress);
      };
      loadProgress();
    }, [])
  );


  return (
    <View style={styles.container}>
      {aboutPage ? (
        <FirstTimer onFinish={()=>setAboutPage(false)} setUsername={setUsername} setAvatar={setAvatar} />
      ) : (
        <ScrollView>
          <HomeTitleBar done={averageProgress} name={username} avatar={avatar} onFinish={()=>setAboutPage(true)} setAboutPage={setAboutPage} />
          {subList.map((subject) => (
            <InfoCard
              key={subject.id}
              done={subject.done}
              title={subject.name}
              onPress={() => navigation.navigate(subject.name, { name: subject.name })}
            />
          ))}
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
      flex:1
    }
})