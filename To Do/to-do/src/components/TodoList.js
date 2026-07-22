import TodoItem from "./TodoItem";

function TodoList({ tasks = [], toggleComplete, deleteTodo, editTodo }){
  return (
    <div className="todo-list">
      {tasks.map((task, index) => (
        <TodoItem
          key={index}
          todo={task}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
        />
      ))}
    </div>
  );
}

export default TodoList;