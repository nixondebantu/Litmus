import React from 'react';
import TaskList from '../../components/TaskList';

export default function Eng2_6({ route }) {
  const { name } = route.params;
  return (
    <TaskList name={name} varName={name}/>
  );
}
