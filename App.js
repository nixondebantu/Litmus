import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Bio1_1 from './screens/Bio1/Bio1_1';
import Bio1_10 from './screens/Bio1/Bio1_10';
import Bio1_11 from './screens/Bio1/Bio1_11';
import Bio1_12 from './screens/Bio1/Bio1_12';
import Bio1_2 from './screens/Bio1/Bio1_2';
import Bio1_3 from './screens/Bio1/Bio1_3';
import Bio1_4 from './screens/Bio1/Bio1_4';
import Bio1_5 from './screens/Bio1/Bio1_5';
import Bio1_6 from './screens/Bio1/Bio1_6';
import Bio1_7 from './screens/Bio1/Bio1_7';
import Bio1_8 from './screens/Bio1/Bio1_8';
import Bio1_9 from './screens/Bio1/Bio1_9';
import Bng1_1 from './screens/Bng1/Bng1_1';
import Bng1_10 from './screens/Bng1/Bng1_10';
import Bng1_11 from './screens/Bng1/Bng1_11';
import Bng1_12 from './screens/Bng1/Bng1_12';
import Bng1_13 from './screens/Bng1/Bng1_13';
import Bng1_14 from './screens/Bng1/Bng1_14';
import Bng1_15 from './screens/Bng1/Bng1_15';
import Bng1_16 from './screens/Bng1/Bng1_16';
import Bng1_2 from './screens/Bng1/Bng1_2';
import Bng1_3 from './screens/Bng1/Bng1_3';
import Bng1_4 from './screens/Bng1/Bng1_4';
import Bng1_5 from './screens/Bng1/Bng1_5';
import Bng1_6 from './screens/Bng1/Bng1_6';
import Bng1_7 from './screens/Bng1/Bng1_7';
import Bng1_8 from './screens/Bng1/Bng1_8';
import Bng1_9 from './screens/Bng1/Bng1_9';
import Bng2_1 from './screens/Bng2/Bng2_1';
import Bng2_10 from './screens/Bng2/Bng2_10';
import Bng2_11 from './screens/Bng2/Bng2_11';
import Bng2_12 from './screens/Bng2/Bng2_12';
import Bng2_13 from './screens/Bng2/Bng2_13';
import Bng2_14 from './screens/Bng2/Bng2_14';
import Bng2_15 from './screens/Bng2/Bng2_15';
import Bng2_2 from './screens/Bng2/Bng2_2';
import Bng2_3 from './screens/Bng2/Bng2_3';
import Bng2_4 from './screens/Bng2/Bng2_4';
import Bng2_5 from './screens/Bng2/Bng2_5';
import Bng2_6 from './screens/Bng2/Bng2_6';
import Bng2_7 from './screens/Bng2/Bng2_7';
import Bng2_8 from './screens/Bng2/Bng2_8';
import Bng2_9 from './screens/Bng2/Bng2_9';
import Chem1_1 from './screens/Chem1/Chem1_1';
import Chem1_2 from './screens/Chem1/Chem1_2';
import Chem1_3 from './screens/Chem1/Chem1_3';
import Chem1_4 from './screens/Chem1/Chem1_4';
import Chem1_5 from './screens/Chem1/Chem1_5';
import Chem2_1 from './screens/Chem2/Chem2_1';
import Chem2_2 from './screens/Chem2/Chem2_2';
import Chem2_3 from './screens/Chem2/Chem2_3';
import Chem2_4 from './screens/Chem2/Chem2_4';
import Chem2_5 from './screens/Chem2/Chem2_5';
import HM1_1 from './screens/HM1/HM1_1';
import HM1_2 from './screens/HM1/HM1_2';
import HM1_3 from './screens/HM1/HM1_3';
import HM1_4 from './screens/HM1/HM1_4';
import HM1_5 from './screens/HM1/HM1_5';
import HM1_6 from './screens/HM1/HM1_6';
import HM2_3 from './screens/HM2/HM2_3';
import HM2_4 from './screens/HM2/HM2_4';
import HM2_6 from './screens/HM2/HM2_6';
import HM2_7 from './screens/HM2/HM2_7';
import HM2_8 from './screens/HM2/HM2_8';
import HM2_9 from './screens/HM2/HM2_9';
import HomeScreen from './screens/HomeScreen';
import ICT1 from './screens/ICT/ICT1';
import ICT2 from './screens/ICT/ICT2';
import ICT3 from './screens/ICT/ICT3';
import ICT4 from './screens/ICT/ICT4';
import ICT5 from './screens/ICT/ICT5';
import Bio1 from './screens/subjects/Bio1';
import Bio2 from './screens/subjects/Bio2';
import Bng1 from './screens/subjects/Bng1';
import Bng2 from './screens/subjects/Bng2';
import Chem1 from './screens/subjects/Chem1';
import Chem2 from './screens/subjects/Chem2';
import Eng1 from './screens/subjects/Eng1';
import Eng2 from './screens/subjects/Eng2';
import HM1 from './screens/subjects/HM1';
import HM2 from './screens/subjects/HM2';
import ICT from './screens/subjects/ICT';
import Phy1 from './screens/subjects/Phy1';
import Phy2 from './screens/subjects/Phy2';

const Stack = createNativeStackNavigator();

export default function App() {
  const screenData = [
    { id:1 ,name:'Litmus' ,component:HomeScreen },
    { id:2 ,name:'জীববিজ্ঞান ১ম পত্র' ,component:Bio1 },
    { id:3 ,name:'জীববিজ্ঞান ২য় পত্র' ,component:Bio2 }, //
    { id:4 ,name:'বাংলা ১ম পত্র' ,component:Bng1 },
    { id:5 ,name:'বাংলা ২য় পত্র' ,component:Bng2 },
    { id:6 ,name:'রসায়ন ১ম পত্র' ,component:Chem1 },
    { id:7 ,name:'রসায়ন ২য় পত্র' ,component:Chem2 },
    { id:8 ,name:'English 1st Paper' ,component:Eng1 },
    { id:9 ,name:'English 2nd Paper' ,component:Eng2 },
    { id:10 ,name:'উচ্চতর গণিত ১ম পত্র' ,component:HM1 },
    { id:11 ,name:'উচ্চতর গণিত ২য় পত্র' ,component:HM2 },
    { id:12 ,name:'ICT' ,component:ICT },
    { id:13 ,name:'পদার্থবিজ্ঞান ১ম পত্র' ,component:Phy1 },
    { id:14 ,name:'পদার্থবিজ্ঞান ২য় পত্র' ,component:Phy2 },
    { id:15 ,name:'জটিল সংখ্যা' ,component:HM2_3 },
    { id:16 ,name:'বহুপদি ও বহুপদি সমীকরণ' ,component:HM2_4 },
    { id:17 ,name:'কণিক' ,component:HM2_6 },
    { id:17 ,name:'বিপরীত ত্রিকোণমিতিক ফাংশন ও সমীকরণ' ,component:HM2_7 },
    { id:17 ,name:'স্থিতিবিদ্যা' ,component:HM2_8 },
    { id:17 ,name:'সমতলে বস্তুকণার গতি' ,component:HM2_9 },
    { id:18 ,name:'অপরিচিতা' ,component:Bng1_1 },
    { id: 19,name: 'বিলাসী' ,component:Bng1_2},
    { id: 20,name: 'আমার পথ' ,component:Bng1_3},
    { id: 21,name: 'মানব কল্যাণ' ,component:Bng1_4},
    { id: 22,name: 'মাসি পিসি' ,component:Bng1_5},
    { id: 23,name: 'বায়ান্নর দিনগুলো' ,component:Bng1_6},
    { id: 24,name: 'রেইনকোট' ,component:Bng1_7},
    { id: 25,name: 'সোনার তরী' ,component:Bng1_8},
    { id: 26,name: 'বিদ্ৰোহী' ,component:Bng1_9},
    { id: 27,name: 'প্রতিদান' ,component:Bng1_10},
    { id: 28,name: 'তাহারেই পড়ে মনে' ,component:Bng1_11},
    { id: 29,name: 'আঠারো বছর বয়স' ,component:Bng1_12},
    { id: 30,name: 'ফেব্রুয়ারি ১৯৬৯' ,component:Bng1_13},
    { id: 31,name: 'আমি কিংবদন্তির কথা বলছি' ,component:Bng1_14},
    { id: 32,name: 'লালসালু' ,component:Bng1_15},
    { id: 33,name: 'সিরাজউদ্দৌলা' ,component:Bng1_16},
    { id: 34, name: 'বাংলা উচ্চারণের নিয়ম', component:Bng2_1 },
    { id: 35, name: 'বাংলা বানানের নিয়ম', component:Bng2_2 },
    { id: 36, name: 'বাংলা ভাষার ব্যাকরণিক শব্দশ্রেণী', component:Bng2_3 },
    { id: 37, name: 'বাংলা শব্দ গঠন- উপসর্গ ও সমাস', component:Bng2_4 },
    { id: 38, name: 'বাক্যতত্ত্ব', component:Bng2_5 },
    { id: 39, name: 'বাংলা ভাষার অপপ্রয়োগ ও শুদ্ধ প্রয়োগ', component:Bng2_6 },
    { id: 40, name: 'পারিভাষিক শব্দ ও অনুবাদ', component:Bng2_7 },
    { id: 41, name: 'দিনলিপি', component:Bng2_8 },
    { id: 42, name: 'প্রতিবেদন', component:Bng2_9 },
    { id: 43, name: 'বৈদুতিক চিঠি ও আবেদনপত্র', component:Bng2_10 },
    { id: 44, name: 'সারাংশ ও সারমর্ম', component:Bng2_11 },
    { id: 45, name: 'ভাবসম্প্রসারণ', component:Bng2_12 },
    { id: 46, name: 'সংলাপ', component:Bng2_13 },
    { id: 47, name: 'খুদে গল্প', component:Bng2_14 },
    { id: 48, name: 'প্রবন্ধ রচনা', component:Bng2_15 },
    { id: 49, name: 'তথ্য ও যোগাযোগ প্রযুক্তি বিশ্ব ও বাংলাদেশ (আংশিক)', component:ICT1 },
    { id: 50, name: 'কমিউনিকেশন সিস্টেম ও কম্পিউটারিং', component:ICT2 },
    { id: 51, name: 'সংখ্যা পদ্ধতি ও ডিজিটাল ডিভাইস', component:ICT3 },
    { id: 52, name: 'ওয়েব ডিজাইন পরিচিতি ও এইচটিএমএল', component:ICT4 },
    { id: 53, name: 'প্রোগ্রামিং ভাষা', component:ICT5 },
    { id: 54, name: 'ল্যাবরেটরির নিরাপদ ব্যবহার (MAT)', component:Chem1_1 },
    { id: 55, name: 'গুণগত রসায়ন (আংশিক)', component:Chem1_2 },
    { id: 56, name: 'মৌলের পর্যায়বৃত্ত ধর্ম ও রাসায়নিক বন্ধন (আংশিক)', component:Chem1_3 },
    { id: 57, name: 'রাসায়নিক পরিবর্তন (আংশিক)', component:Chem1_4 },
    { id: 58, name: 'কর্মমূখী রসায়ন (আংশিক)', component:Chem1_5 },
    { id: 59, name: 'পরিবেশ রসায়ন (আংশিক)', component: Chem2_1 },
    { id: 60, name: 'জৈব রসায়ন (আংশিক)', component: Chem2_2 },
    { id: 61, name: 'পরিমাণগত রসায়ন (আংশিক)', component: Chem2_3 },
    { id: 62, name: 'তড়িৎ রসায়ন (আংশিক)', component: Chem2_4 },
    { id: 63, name: 'অর্থনৈতিক রসায়ন (MAT)', component: Chem2_5 },
    { id: 64, name: 'ম্যাট্রিক্স ও নির্ণায়ক', component:HM1_1 },
    { id: 65, name: 'সরলরেখা', component:HM1_2 },
    { id: 66, name: 'বৃত্ত', component:HM1_3 },
    { id: 67, name: 'সংযুক্ত কোণর ত্রিকোণমিতিক অনুপাত', component:HM1_4 },
    { id: 68, name: 'অন্তরীকরণ', component:HM1_5 },
    { id: 69, name: 'যোগজীকরণ', component:HM1_6 },
    { id: 70, name: 'কোষ ও এর গঠন', component:Bio1_1 },
    { id: 71, name: 'কোষ বিভাজন', component:Bio1_2 },
    { id: 72, name: 'কোষ রসায়ন (MAT)', component:Bio1_3 },
    { id: 73, name: 'অণুজীব', component:Bio1_4 },
    { id: 74, name: 'শৈবাল ও ছত্রাক (MAT)', component:Bio1_5 },
    { id: 75, name: 'ব্রায়োফাইটা ও টেরিডোফাইটা (MAT)', component:Bio1_6 },
    { id: 76, name: 'নগ্নবীজী ও আবৃতবীজী উদ্ভিদ', component:Bio1_7 },
    { id: 77, name: 'টিস্যু ও টিস্যুতন্ত্র', component:Bio1_8 },
    { id: 78, name: 'উদ্ভিদ শারীরতত্ব', component:Bio1_9 },
    { id: 79, name: 'উদ্ভিদ প্ৰজনন (MAT)', component:Bio1_10 },
    { id: 80, name: 'জীবপ্রযুক্তি', component:Bio1_11 },
    { id: 81, name: 'জীবের পরিবেশ, বিস্তার ও সংরক্ষণ (MAT)', component:Bio1_12 },
    // { id: 1, name: 'প্রাণীর বিভিন্নতা ও শ্রেণিবিন্যাস' },
    // { id: 2, name: 'প্রাণীর পরিচিতি' },
    // { id: 3, name: 'পরিপাক ও শোষণ' },
    // { id: 4, name: 'রক্ত সঞ্চালন' },
    // { id: 5, name: 'শ্বাসক্রিয়া ও শ্বসন' },
    // { id: 6, name: 'চলন ও অঙ্গচালনা' },
    // { id: 7, name: 'বর্জ্য ও নিষ্কাশন (MAT)' },
    // { id: 8, name: 'সমন্বয় ও নিয়ন্ত্রণ (MAT)' },
    // { id: 9, name: 'মানব জীবনের ধারাবাহিকতা (MAT)' },
    // { id: 10, name: 'মানবদেহের প্রতিরক্ষা (MAT)' },
    // { id: 11, name: 'জিনতত্ব ও বিবর্তন' },
    // { id: 12, name: 'প্রাণীর আচরণ (MAT)' },
    // { id: 1, name: 'People or Institution Making History' },
    // { id: 2, name: 'Education Life' },
    // { id: 3, name: 'Dreams' },
    // { id: 4, name: 'Youthful Achievers' },
    // { id: 5, name: 'Relationships' },
    // { id: 6, name: 'Adolescence' },
    // { id: 7, name: 'Lifestyle' },
    // { id: 8, name: 'Human Rights' },
    // { id: 9, name: 'Tour\'s and Travels' },
    // { id: 10, name: 'Flow chart' },
    // { id: 11, name: 'Summary' },
    // { id: 12, name: 'Fill in the blanks with clues' },
    // { id: 13, name: 'Fill in the blanks without clues' },
    // { id: 14, name: 'Rearrange' },
    // { id: 15, name: 'Graph and Chart' },
    // { id: 16, name: 'Story Writing' },
    // { id: 17, name: 'Letter' },
    // { id: 1, name: 'Prepositions' },
    // { id: 2, name: 'Completing Sentence with Phrase' },
    // { id: 3, name: 'Completing Sentence' },
    // { id: 4, name: 'Right Form of Verb' },
    // { id: 5, name: 'Narration' },
    // { id: 6, name: 'Modifier' },
    // { id: 7, name: 'Connectors' },
    // { id: 8, name: 'Synonym-Antonym' },
    // { id: 9, name: 'Punctuation & Capitalization' },
    // { id: 10, name: 'Application' },
    // { id: 11, name: 'Paragraph' },
    // { id: 1, name: 'ভৌত জগৎ ও পরিমাপ (স্ফেরোমিটার শুধু)' },
    // { id: 2, name: 'ভেক্টর' },
    // { id: 3, name: 'নিউটনিয়ান বলবিদ্যা' },
    // { id: 4, name: 'কাজ ক্ষমতা ও শক্তি' },
    // { id: 5, name: 'মহাকর্ষ ও অভিকর্ষ' },
    // { id: 6, name: 'পদার্থের গাঠনিক ধর্ম( আংশিক )' },
    // { id: 7, name: 'পর্যায়বৃত্ত গতি' },
    // { id: 8, name: 'আদর্শ গ্যাস ও গ্যাসের গতিতত্ব' },
    // { id: ,name: ,component: },
  ]
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        {
          screenData.map((screen)=><Stack.Screen key={screen.id} name={screen.name} component={screen.component} />)
        }
      </Stack.Navigator>
    </NavigationContainer>
  );
}