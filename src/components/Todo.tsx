import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Moon from "/src/assets/images/icon-moon.svg";
import TodoList from "./TodoList";
import { initialTodos, type TodoProp } from "../constants";

const Todo = () => {
  const [newTodo, setNewTodo] = useState<string>("");

  const addTodo = (todo: TodoProp) => {
    initialTodos.push(todo);
    setNewTodo("");
  }

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { value } = e.target;
		setNewTodo(value);
	};

	const handleSubmit = () => {
    if(newTodo.length > 0) {
      addTodo({
        id: uuidv4(),
        done: false,
        text: newTodo
      })
    }
	};

	const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if (event.key === "Enter") {
			event.preventDefault();
			handleSubmit();
		}
	};

	return (
		<div className="w-full max-w-[540px]">
			{/* Title and Theme mode */}
			<div className="flex items-center justify-between mb-16">
				<h3 className="text-white font-bold text-4xl tracking-[1.23rem]">
					TODO
				</h3>
				<img src={Moon} alt="moon" />
			</div>

			{/* Todo Input */}
			<div className="w-full flex items-end rounded p-4 bg-white space-x-4 shadow-todoShadow">
				<div className="p-3 rounded-full border-1 border-oval shadow"></div>
				<form>
					<input
						type="text"
						name=""
            value={newTodo}
						className="w-full focus:outline-none appearance-none"
						placeholder="Create a new todo..."
            onChange={handleChange}
            onKeyDown={handleKeyDown}
					/>
				</form>
			</div>

			{/* Todo List */}
			<div className="mt-8">
				<TodoList />
			</div>
		</div>
	);
};

export default Todo;
