import React from 'react';
import TaskList from '../../components/TaskList';

export default function Bio1_3({ route }) {
  const { name } = route.params;
  return (
    <TaskList name={name} varName={name}/>
  );
}
