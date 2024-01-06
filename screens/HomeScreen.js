import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';
import InfoCard from '../components/InfoCard';

export default function HomeScreen( {navigation} ) {
    const subList = [
        {   id:1,done:20,name:'বাংলা ১ম পত্র'    },
        {   id:2,done:30,name:'বাংলা ২য় পত্র'    },
        {   id:3,done:25,name:'English 1st Paper'   },
        {   id:4,done:12,name:'English 2nd Paper'   },
        {   id:5,done:80,name:'পদার্থবিজ্ঞান ১ম পত্র'   },
        {   id:6,done:50,name:'পদার্থবিজ্ঞান ২য় পত্র'   },
        {   id:7,done:30,name:'রসায়ন ১ম পত্র'  },
        {   id:8,done:15,name:'রসায়ন ২য় পত্র'  },
        {   id:9,done:60,name:'উচ্চতর গণিত ১ম পত্র'    },
        {   id:10,done:30,name:'উচ্চতর গণিত ২য় পত্র'  },
        {   id:11,done:12,name:'জীববিজ্ঞান ১ম পত্র'  },
        {   id:12,done:21,name:'জীববিজ্ঞান ২য় পত্র'  },
        {   id:13,done:71,name:'ICT'    }        
    ]
  return (
    <View style={styles.container}>
        <ScrollView>
            {/* <Text>Home Screen</Text> */}
            {subList.map((subject) => (
                <InfoCard key={subject.id} 
                done={subject.done} 
                title={subject.name} 
                onPress={()=>navigation.navigate(subject.name,{name:subject.name})}/>
        ))}
        </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
    }
})