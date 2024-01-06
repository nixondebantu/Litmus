import React from 'react';
import TaskList from '../../components/TaskList';

export default function Bng1_6({ route }) {
  const { name } = route.params;
  return (
    <TaskList name={name} varName={name}/>
  );
}