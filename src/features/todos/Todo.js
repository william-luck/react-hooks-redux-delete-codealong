import React from "react";
import { todoRemoved } from "./todosSlice";
import { useDispatch } from "react-redux";

function Todo({ text }) {

  const dispatch = useDispatch()

  function handleDelete(){
    dispatch(todoRemoved(text))

  }

  return (
    <>
    <li>{text.text}</li>
    <button onClick={handleDelete}>DELETE</button>
    </>
  )
}

export default Todo;
