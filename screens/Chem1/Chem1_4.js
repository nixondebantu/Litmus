import React from 'react';
import TaskList from '../../components/TaskList';

export default function Chem1_4({ route }) {
  const { name } = route.params;
  return (
    <TaskList name={name} varName={name}/>
  );
}
