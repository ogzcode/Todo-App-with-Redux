import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

function TodoList() {
    const todos = useSelector(state => state.todo.todos)
    return (
        <div>
            {
                todos.length > 0 ? todos.map((todo, i) => <TodoItem {...todo} key={i}/>)
                    :
                    <p className="text-slate-400 border-2 border-slate-200 p-2 rounded-md text-sm">Todo is empty</p>
            }
        </div>
    );
}

export default TodoList;