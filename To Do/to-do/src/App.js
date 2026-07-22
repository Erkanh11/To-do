import "./App.css";
import { useState } from "react";

import Header from "./components/Header";
import TodoForm from "./components/TodoForm";
import SearchBar from "./components/SearchBar";
import FilterButtons from "./components/FilterButtons";
import TodoList from "./components/TodoList";

function App() {
  const [tasks, setTasks] = useState([])
  const [searchQuery, setSearchQuery] = useState("");
  const [filter, setFilter] = useState("all");

  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),
      text: text,
      completed: false,
    };

    setTasks([...tasks, newTodo]);
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  };

  const deleteTodo = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const filteredTasks = tasks.filter((task) => {
    const matchesSearch = task.text.toLowerCase().includes(searchQuery.toLowerCase());

    if (filter === "completed") {
      return matchesSearch && task.completed;
    } else if (filter === "incomplete") {
      return matchesSearch && !task.completed;
    } else {
      return matchesSearch;
    }
  });

  

  return (
    <div className="App">
      <Header />

      <TodoForm addTodo={addTodo} />

      <SearchBar 
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />

      <FilterButtons 
        filter={filter}
        setFilter={setFilter}
      />

      <TodoList
        tasks={filteredTasks}
        toggleComplete={toggleComplete}
        deleteTodo={deleteTodo}
      />
    </div>
  );
}

export default App;
