import { Task } from "../../components/Task/Task.";
import "./ToDoApp.css";
import React, { useState, useEffect, useRef } from "react";
import { v4 as uuidv4 } from "uuid";

export const ToDoApp = () => {
  const [buttonShow, setButtonShow] = useState(false);

  const [tasks, setTasks] = useState(() => {
    const toDoList = localStorage.getItem("tasks");
    return toDoList ? JSON.parse(toDoList) : [];
  });

  useEffect(
    () => localStorage.setItem("tasks", JSON.stringify(tasks)),
    [tasks]
  );

  const taskValueRef = useRef(null);
  const emptyControll = useRef(null);
  function buttonShowF() {
    taskValueRef.current.value.length === 0
      ? setButtonShow(false)
      : setButtonShow(true);
  }

  // ====================AFTER HOOKS===============================

  function addTask() {
    if (emptyControll.current.value.length === 0) return;
    setTasks([
      ...tasks,
      {
        id: uuidv4(),
        taskText: taskValueRef.current.value,
        status: false,
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString(),
      },
    ]);
    taskValueRef.current.value = "";
    setButtonShow(false);
  }
  function onEnterDown(e) {
    e.key === "Enter" ? addTask() : e.key;
  }

  function deleteTask(id) {
    setTasks(tasks.filter((task) => task.id != id));
  }

  function changeCheckBox(id) {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, status: !task.status } : task
      )
    );
  }

  return (
    <div className="to-do-app">
      <h1>Створіть завдання</h1>
      <input
        onChange={buttonShowF}
        ref={taskValueRef}
        type="text"
        placeholder="Ваше завдання..."
        onKeyDown={onEnterDown}
      />
      {buttonShow && (
        <button ref={emptyControll} onClick={addTask}>
          Додати завдання
        </button>
      )}

      <div className="list">
        <p>
          Кількість незавершених завдань:{" "}
          {tasks.filter((task) => !task.status).length}
        </p>
        {tasks.map((task) => (
          <React.Fragment key={task.id}>
            <Task
              tasks={tasks}
              {...task}
              deleteTask={deleteTask}
              changeCheckBox={changeCheckBox}
              setTasks={setTasks}
            />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
