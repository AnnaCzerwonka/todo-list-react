import { useState, useEffect } from "react";

export const useTasks = () => {
    const getInitialTasks = () => {
        const tasksFromLocalStorage = localStorage.getItem("tasks");
        return tasksFromLocalStorage ? JSON.parse(tasksFromLocalStorage) : [];
    };

    const [tasks, setTasks] = useState(getInitialTasks);
    const [hideDone, setHideDone] = useState(false);

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    const toggleHideDone = () => setHideDone(hide => !hide);

    const removeTask = (id) => setTasks(tasks => tasks.filter(task => task.id !== id));

    const toggleTaskDone = (id) => setTasks(tasks =>
        tasks.map(task => task.id === id ? { ...task, done: !task.done } : task)
    );

    const setAllDone = () => setTasks(tasks => tasks.map(task => ({ ...task, done: true })));

    const addNewTask = (content) => setTasks(tasks => [
        ...tasks,
        { content, done: false, id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1 },
    ]);

    return {
        tasks,
        hideDone,
        toggleHideDone,
        removeTask,
        toggleTaskDone,
        setAllDone,
        addNewTask,
    };
};




