import './App.css';
import { TodoProvider } from './context/TodoContext';
import TodoForm from './components/TodoForm';
import { useState, useEffect } from 'react';
import TodoItem from './components/TodoItem';

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))
    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])


  const addTodo = (todo) => {
    const temp = [{ id: Date.now(), ...todo }, ...todos]
    setTodos(temp)
  }

  const updateTodo = (id, todo) => {
    const temp = todos.map((todoItem) => {
      if (todoItem.id === id) {
        return todo
      }
      return todo
    })
    setTodos(temp)

  }

  const deleteTodo = (id) => {
    const temp = todos.filter((todoItem) => todoItem.id !== id)
    setTodos(temp)
  }

  const toggleComplete = (id) =>{
    const temp = todos.map((i) => {
      return i.id === id ? {...i, completed: !i.completed} : i
    })
    setTodos(temp)
  }

  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (
                          <div key={todo.id}
                          className='w-full'
                          >
                            <TodoItem todo={todo} />
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  );
}

export default App;
