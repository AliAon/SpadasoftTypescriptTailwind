import React from 'react';
interface TodoListProps {
  items:{id: string, text: string}[],
  onDelete:(id:string)=>void
}

const TodoList: React.FC<TodoListProps> = props => {


  return (
    <ul>
      {props.items.map(todo => (
        <li key={todo.id}>{todo.text} <button onClick={props.onDelete.bind(null,todo.id)}> Delete</button> </li>
      ))}
    </ul>
  );
};

export default TodoList;
