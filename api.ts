import axios from "axios"
const baseUrl = "http://localhost:1337/api/to-dos";
import { ITask } from "./types/tasks";

// const getAllToDos = async () =>
//   await axios
//     .get("http://localhost:1337/api/to-dos")
//     .then((res) => res.data);

// export default getAllToDos;

export async function fetchTasks() {
  try {
    const response = await axios.get("http://localhost:1337/api/to-dos");
    const tasks = response.data.data; // Extract the data property
    return tasks;
  } catch (error) {
    console.error("Error fetching tasks:", error);
    return [];
  }
}

export async function getStaticProps() {
  const tasks = await fetchTasks();
  return {
    props: {
      tasks,
    },
  };
}

export const addTodo = async (todo: ITask): Promise<ITask> => {
  const res = await fetch(`${baseUrl}/tasks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });
  const newTodo = await res.json();
  return newTodo;
};

export const editTodo = async (todo: ITask): Promise<ITask> => {
  const res = await fetch(`${baseUrl}/tasks/${todo.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  });
  const updatedTodo = await res.json();
  return updatedTodo;
};

export const deleteTodo = async (id: string): Promise<void> => {
  await fetch(`${baseUrl}/tasks/${id}`, {
    method: "DELETE",
  });
};