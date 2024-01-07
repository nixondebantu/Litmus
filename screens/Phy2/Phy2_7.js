import React from 'react';
import TaskList from '../../components/TaskList';

export default function Phy2_7({ route }) {
  const { name } = route.params;
  return (
    <TaskList name={name} varName={name}/>
  );
}
