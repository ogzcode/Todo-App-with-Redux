import Input from "./Input";
import TodoList from "./TodoList";

function TodoApp() {
    return (
        <div className='w-[24rem] min-h-[24rem] bg-white rounded-xl shadow-lg overflow-hidden p-8'>
            <Input />
            <TodoList/>
        </div>
    );
}

export default TodoApp;