import React from 'react';
import TaskList from '../../components/TaskList';

export default function Bng2_10({ route }) {
  const { name } = route.params;
  return (
    <TaskList name={name} varName={name}/>
  );
}
