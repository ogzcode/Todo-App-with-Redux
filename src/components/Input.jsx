import { FaPlus } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addTodo } from "../redux/todo/todoSlice";
import { nanoid } from "@reduxjs/toolkit";
import { useState } from "react";

function Input() {
    const dispatch = useDispatch();
    const [value, setValue] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addTodo({ id: nanoid(), content: value, completed: false }));
        setValue("");
    };
    return (
        <form onSubmit={handleSubmit} className="flex mb-8">
            <input
                value={value}
                onChange={e => setValue(e.target.value)}
                type="text"
                placeholder="Add new todo" required
                className="w-full focus:outline-none border-b-2 border-[#EC6F66]" />
            <button className="rounded-full bg-gradient-to-r from-[#EC6F66] to-[#F3A183] text-center p-2 ml-4">
                <FaPlus color="white" fontSize={20} />
            </button>
        </form>
    );
}

export default Input;   