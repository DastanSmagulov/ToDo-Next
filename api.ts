import axios from "axios"
import { ITask, ITaskAttributes } from "./types/tasks";
const baseUrl = "http://localhost:1337/api/to-dos";
// const getAllToDos = async () =>
//   await axios
//     .get("http://localhost:1337/api/to-dos")
//     .then((res) => res.data);

// export default getAllToDos;

export async function fetchTasks() {
  try {
    const response = await axios.get(baseUrl);
    const tasks = response.data.data;
    return tasks;
  } catch (error) {
    console.error('Error fetching tasks:', error);
    return [];
  }
}

export const addTodo = async (todo: ITaskAttributes): Promise<ITask> => {
  const res = await axios.post<ITask>(baseUrl, { attributes: todo });
  return res.data;
};

export const editTodo = async (todo: ITask): Promise<ITask> => {
  const res = await axios.put<ITask>(`${baseUrl}/${todo.id}`, todo.attributes);
  return res.data;
};

export const deleteTodo = async (id: number): Promise<void> => {
  await axios.delete(`${baseUrl}/${id}`);
};