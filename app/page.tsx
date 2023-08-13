"use client"
import AddTask from "./components/AddTask/AddTask.tsx";
import ToDoList from "./components/ToDoList/ToDoList.tsx";
import {fetchTasks} from "../api.ts";
import * as api from "../api.ts"
import { useState, useEffect } from "react";
import { ITask } from "@/types/tasks.ts";

const Home = () => {
const [toDo, setToDo] = useState<ITask[]>([]);    
const [tasks, setTasks] = useState([]);

useEffect(() => {
  async function getTasks() {
    const fetchedTasks = await fetchTasks();
    setTasks(fetchedTasks);
  }

  getTasks();
}, []);

return(
    <main className="max-w-4xl mx-auto mt-4">
      <div className="text-center my-5 flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Todo List App</h1>
        <AddTask />
      </div>
      <ToDoList tasks = {tasks}/>
    </main>
)
}

export default Home;
