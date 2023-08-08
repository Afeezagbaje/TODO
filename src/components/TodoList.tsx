import TodoItem from "./TodoItem";
import { initialTodos } from "../constants";
import { useState } from "react";

const TodoList = () => {
	const [todos, setTodos] = useState(initialTodos);
	const handleDeleteTodo = (todoId: string) => {
		const newTodos = todos.filter((todo) => todoId !== todo.id);
		setTodos(newTodos);
	};

	return (
		<>
			<div className="w-full rounded bg-white shadow-todoShadow">
				{/* List */}
				{todos &&
					todos.length > 0 &&
					todos.map((todo) => (
						<TodoItem
							key={todo.text}
							todoItemText={todo.text}
							done={todo.done}
							onDelete={() => handleDeleteTodo(todo.id)}
						/>
					))}
				{/* Footer */}
				<div className="flex items-center justify-between p-4 text-footerText">
					<h6>{`${todos?.length} items`}</h6>
					<div className="hidden md:flex items-center justify-center space-x-3 font-bold ">
						<h6 className="hover:text-brightBlue">All</h6>
						<h6 className="hover:text-brightBlue">Active</h6>
						<h6 className="hover:text-brightBlue">Completed</h6>
					</div>
					<h6>Clear Completed</h6>
				</div>
			</div>
			<div className="bg-white rounded p-4 mt-4 flex md:hidden items-center justify-center space-x-3 font-bold text-footerText shadow-todoShadow">
				<h6 className="hover:text-brightBlue">All</h6>
				<h6 className="hover:text-brightBlue">Active</h6>
				<h6 className="hover:text-brightBlue">Completed</h6>
			</div>
		</>
	);
};

export default TodoList;
