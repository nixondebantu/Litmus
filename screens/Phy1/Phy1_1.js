import React from 'react';
import TaskList from '../../components/TaskList';

export default function Phy1_1({ route }) {
  const { name } = route.params;
  return (
    <TaskList name={name} varName={name}/>
  );
}
