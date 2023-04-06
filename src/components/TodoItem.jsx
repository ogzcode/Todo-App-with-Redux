import { FaCheck, FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { toggleTodo, deleteTodo } from "../redux/todo/todoSlice";

function TodoItem({ id, content, completed }) {
    const dispatch = useDispatch();

    const handleToggle = () => {
        dispatch(toggleTodo({ id }));
    };

    const handleDelete = () => {
        dispatch(deleteTodo({ id }));
    };

    const completedStyle = "text-gray-300 line-through";
    const normalStyle = "text-slate-700";
    return (
        <div className="flex justify-between items-center border-[1px] border-slate-200 p-2 rounded-md mb-2">
            <div>
                <button
                    className="p-[.5rem] border-[1px] border-slate-200 rounded-full mr-4"
                    onClick={() => handleToggle()}
                >
                    <FaCheck fontSize={14} color="#22c55e" opacity={completed ? 1 : 0} />
                </button>
                <span className={completed ? completedStyle : normalStyle }>{content}</span>
            </div>
            {
                completed && (
                    <button className="p-[.5rem] border-[1px] border-slate-200 rounded-full"
                        onClick={() => handleDelete()}
                    >
                        <FaTrash fontSize={14} color="#ef4444"/>
                    </button>
                )
            }
        </div>
    );
}

export default TodoItem;