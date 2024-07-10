import { useState } from 'react';
import { useGetTodoQuery, useGetTodosQuery } from '../store/apis/todosApi';

export const TodoApp = () => {

  const [ todoId, setTodoId ] = useState( 1 );

  // const { data: todos = [], isLoading } = useGetTodosQuery();
  const { data: todo, isLoading } = useGetTodoQuery( todoId );

  const previousTodo = () => {
    if ( todoId === 1 ) return;
    setTodoId( prev => prev - 1 );
  };

  const nextTodo = () => {
    setTodoId( prev => prev + 1 );
  };

  return (
    <>
      <h1>Todos - RTK Query</h1>
      <hr />
      <h4>isLoading: { isLoading ? "True" : "False" }</h4>

      <pre>{ JSON.stringify( todo, null, 2 ) }</pre>

      <button onClick={ previousTodo }>Previous Todo</button>
      <button onClick={ nextTodo }>Next Todo</button>

      {/* <ul>
        { todos.map( ( todo ) => (
          <li key={ todo.id }>
            <strong>Status: { todo.completed ? "Done" : "Pending" }</strong>
            <br />
            { todo.title }
          </li>
        ) ) }
      </ul> */}

    </>
  );

};