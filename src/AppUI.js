import React from "react";
import { TodoCounter } from "./TodoCounter/TodoCounter";
import { TodoItem } from "./TodoItem/TodoItem";
import { CreateTodoButton } from "./CreateTodoButton/CreateTodoButton";
import { TodoSearch } from "./TodoSearch/TodoSearch";
import { TodoList } from "./TodoList/TodoList";
import { TodoContext } from "./TodoContext/TodoContext";
import { Modal } from "./Modal/Modal"
import { TodoForm } from "./TodoForm/TodoForm";
import { Emptytodos } from "./EmptyTodos/EmptyTodos";
import { TodoLoading } from "./TodoLoading/TodoLoading";
import { TodoError } from "./TodoError/TodoError";

function AppUI() {
  const { error, 
          loading, 
          searchedTodos, 
          completeTodo, 
          deleteTodo,
          openModal,
          setOpenModal } = React.useContext(TodoContext);
  return (
    <React.Fragment>
      <TodoCounter />
      <TodoSearch />
      <TodoList>
        {error && <TodoError error={error}/>}
        {loading && <TodoLoading />}
        {(!loading && !searchedTodos.length) && <Emptytodos />}

        {searchedTodos.map((todo) => (
          <TodoItem
            key={todo.text}
            text={todo.text}
            completed={todo.completed}
            onComplete={() => completeTodo(todo.text)}
            onDeleted={() => deleteTodo(todo.text)}
          />
        ))}
      </TodoList>

          {!!openModal && (
            <Modal> 
            
            <TodoForm/> 
          
          </Modal>)}
      
      <CreateTodoButton setOpenModal = {setOpenModal}/>
    </React.Fragment>
  );
}

export default AppUI;
