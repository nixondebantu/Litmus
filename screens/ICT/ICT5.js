import React from 'react';
import TaskList from '../../components/TaskList';

export default function ICT5({ route }) {
  const { name } = route.params;
  return (
    <TaskList name={name} varName={name}/>
  );
}
