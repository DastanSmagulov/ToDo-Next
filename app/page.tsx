import AddTask from "./components/AddTask/AddTask.tsx";
import ToDoList from "./components/ToDoList/ToDoList.tsx";
import getAllToDos from "../api.ts";

export default async function Home() {
  const tasks = await getAllToDos();
  console.log("Hi");
  return (
    <main className="max-w-4xl mx-auto mt-4">
      <div className="text-center my-5 flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Todo List App</h1>
        <AddTask />
      </div>
      <ToDoList tasks = {tasks} />
    </main>
  );
}
