import { useState, ChangeEvent, useRef, useEffect, FormEvent } from "react";
import Check from "/src/assets/images/icon-check.svg";
import Cross from "/src/assets/images/icon-cross.svg";
import Edit from "/src/assets/images/icon-pencil.svg";

type TodoItem = {
  todoItemText: string;
  done: boolean;
  onDelete: any;
}

const TodoItem = ({ todoItemText, done, onDelete }: TodoItem) => {
  // State
	const [todoText, setTodoText] = useState(todoItemText);
	const [checked, setChecked] = useState(done);
  const [editMode, setEditMode] = useState(false);

  // Refs
  const inputRef = useRef<HTMLDivElement>(null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    
    setTodoText(value);
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Submit");
  }

  const handleClickOutside = (e: MouseEvent) => {
    if (inputRef.current && !inputRef.current.contains(e.target as Node)) {
      setEditMode(false);
      handleSubmit(e);
    }
  }

  useEffect(() => {
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  },[]);

	return (
		<div ref={inputRef} className="w-full flex items-center p-4 border-b-2 border-oval">
			<div className="flex flex-1 items-center space-x-4">
				<div
					className={`${
						checked ? "bg-gradient-to-r from-cyan to-purple" : "bg-oval"
					} p-2 rounded-full cursor-pointer shadow`}
					onClick={() => setChecked(!checked)}
				>
					{checked ? (
						<img src={Check} alt="Oval" className="w-2 h-2" />
					) : (
						<div className="w-2 h-2"></div>
					)}
				</div>
        {
          !editMode ? (
            <h6
              className={`${
                checked
                  ? "line-through text-footerText"
                  : "text-light-clearCompletedBtnHover"
              } text-ellipsis`}
            >
              {todoText}
            </h6>
          ) : (
            <form className="w-full" onSubmit={handleSubmit}>
              <input type="text" name='editTodo' value={todoText} onChange={handleChange} className="w-full focus:outline-none appearance-none" placeholder="Create a new todo..." />
            </form>
          )
        }
			</div>

			{/* Edit and Delete Button */}
			<div className="flex space-x-4 items-center">
        {
          !checked && (
            <img
              src={Edit}
              alt="delete"
              className={`${editMode && "animate-bounce"} cursor-pointer w-auto h-4 text-light-clearCompletedBtnHover`}
              onClick={() => setEditMode(!editMode)}
            />
          )
        }
				<img src={Cross} alt="delete" className="cursor-pointer w-auto h-3" onClick={onDelete} />
			</div>
		</div>
	);
};

export default TodoItem;
