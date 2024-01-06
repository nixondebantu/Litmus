import { AntDesign, Entypo } from '@expo/vector-icons';
import AsyncStorage from '@react-native-async-storage/async-storage';
import CheckBox from 'expo-checkbox';
import React, { useEffect, useState } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';


export default function TaskList({ name, varName }) {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState('');
  const [taskScore, setTaskScore] = useState('');
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    try {
      const storedTasks = await AsyncStorage.getItem(`@tasks/${name}`);
      if (storedTasks !== null) {
        setTasks(JSON.parse(storedTasks));
      }
    } catch (error) {
      console.error('Error loading tasks:', error);
    }
  };

  const saveTasks = async (updatedTasks) => {
    try {
      await AsyncStorage.setItem(`@tasks/${name}`, JSON.stringify(updatedTasks));
    } catch (error) {
      console.error('Error saving tasks:', error);
    }
  };

  const addTask = () => {
    if (!taskName || !taskScore) {
      Alert.alert('Error', 'Please enter both task name and task score');
      return;
    }

    const newTask = {
      name: taskName,
      score: taskScore,
      done: false,
    };

    setTasks([...tasks, newTask]);
    saveTasks([...tasks, newTask]);
    setTaskName('');
    setTaskScore('');
  };

  const deleteTask = async (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
    saveTasks(updatedTasks);
  };

  const toggleDone = async (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].done = !updatedTasks[index].done;
    setTasks(updatedTasks);
    saveTasks(updatedTasks);
  };

  const calculateProgress = () => {
    const totalScore = tasks.reduce((total, task) => total + Number(task.score), 0);
    const completedScore = tasks.reduce((total, task) => task.done ? total + Number(task.score) : total, 0);
    let progress = (completedScore / totalScore) * 100;
    progress = isNaN(progress) ? 0 : progress.toFixed(2);
    return progress;
  };
  

  const saveProgress = async (progress) => {
    try {
      await AsyncStorage.setItem(`@progress/${varName}`, progress.toString());
    } catch (error) {
      console.error('Error saving progress:', error);
    };
  }
  useEffect(() => {
    const progress = calculateProgress();
    saveProgress(progress);
  }, [tasks]);
  

  return (
    <View style={styles.container}>
        <Text>{varName}</Text>
      <View style={styles.progressWrapper}>
        <Text style={styles.progressTxt}>Progress: </Text>
        <Text style={[styles.progressTxt,{color:'#341e9d'}]}>{calculateProgress()}%</Text>
      </View>
    <View style={styles.taskListContainer}>
    <ScrollView>
        {tasks.map((task, index) => (
          <View style={styles.taskItem} key={index}>
            <View style={styles.itemLeft}>
              <CheckBox
                style={styles.checkbox}
                value={task.done}
                onValueChange={() => toggleDone(index)}/>

              <Text style={styles.taskName}>{task.name}</Text>
            </View>
            <View style={styles.itemRight}>
              <View style={styles.taskScrBox}>
                <Text style={styles.taskScr}>{task.score}</Text>
              </View>
            <TouchableOpacity style={styles.deleteBtn}
              onPress={() =>
                Alert.alert(
                  'Delete Task',
                  'Are you sure you want to delete this task?',
                  [
                    {
                      text: 'Cancel',
                      style: 'cancel',
                    },
                    { text: 'OK', onPress: () => deleteTask(index) },
                  ]
                  )
                }
                >
              <Entypo name="trash" size={30} color="red" />
            </TouchableOpacity>
            </View>
          </View>
        ))}
    </ScrollView>
    </View>
    <View style={styles.inputWrapper}>
    <KeyboardAvoidingView style={styles.writeTaskWrapper} >
          <TextInput
            style={styles.txtInput}
            placeholder="Task"
            value={taskName}
            onChangeText={(text) => setTaskName(text)}/>

          <TextInput
            style={styles.scoreInput}
            placeholder="Score"
            value={taskScore}
            onChangeText={(text) => setTaskScore(text)}/>

          <TouchableOpacity style={styles.addBtn} onPress={addTask}>
              <AntDesign name="pluscircle" size={50} color="#341e9d" />
          </TouchableOpacity>
        </KeyboardAvoidingView>
    </View>
    </View>
    
  );
}


const styles = StyleSheet.create({
  container:{
    flex:1,
  },
  progressWrapper:{
    flexDirection:'row',
    justifyContent:'center'
  },
  progressTxt:{
    fontWeight:'bold',
    fontSize:25,
  },
  deleteBtn:{
    width:26
  },
  writeTaskWrapper:{
    position:'absolute',
    bottom:20,
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
  },
  txtInput:{
    marginLeft:10,
    paddingVertical:15,
    paddingHorizontal:15,
    backgroundColor:'#FFF',
    borderRadius:60,
    borderColor:'#C0C0C0',
    borderWidth:1,
    width:250,
  },
  scoreInput:{
    paddingVertical:15,
    paddingHorizontal:15,
    backgroundColor:'#FFF',
    borderRadius:60,
    borderColor:'#C0C0C0',
    borderWidth:1,
    width:80,
  },
  addBtn:{
    marginRight:10
  },
  taskListContainer:{
    flex:1,
    marginBottom:80,
    margin:5,
  },
  inputWrapper:{
  },
  checkbox:{
    marginRight:15,
  },
  taskItem:{
    backgroundColor: '#FFF',
    padding:15,
    borderRadius:10,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginTop:20,
    shadowColor: '#341e9d',
    elevation: 15,
  },
  itemLeft:{
    flexDirection:'row',
    alignItems:'center',
    flexWrap:'wrap',
  },
  itemRight:{
    flexDirection:'row',
    alignItems:'center',
    flexWrap:'wrap',
  },
  taskName:{
    maxWidth:'80%',
  },
  taskScr:{
    width:20,
    color:'#FFF',
    textAlign:'center',
    fontWeight:"bold"
  },
  taskScrBox:{
    backgroundColor:'#341e9d',
    borderRadius:20,
    borderWidth:1,
    padding:5,
    position: 'absolute',
    right: 30
  }
})
